import { Client, Account, ID, Avatars, OAuthProvider } from 'react-native-appwrite';
import * as Linking from "expo-linking"
import { openAuthSessionAsync } from 'expo-web-browser';

export const config = {
  platform: 'com.goldestate',
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  // databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
  // ownersCollectionId: process.env.EXPO_PUBLIC_APPWRITE_OWNERS_COLLECTION_ID,
  // galleriesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID,
  // reviewsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLID,
  // propertiesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID,
};

const client = new Client()
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.platform!);

export const account = new Account(client);
export const avatars = new Avatars(client);

export async function login() {
  try {
    const redirectUri = Linking.createURL('./');
    const response = await account.createOAuth2Token(OAuthProvider.Google, redirectUri);
    if (!response) {
      throw new Error("Failed to create OAuth2 token");
    }

    const browserResult = await openAuthSessionAsync(response.toString(), redirectUri);
    if (browserResult.type !== "success") {
      throw new Error("Failed to open browser");
    }

    const url = new URL(browserResult.url);
    const secret = url.searchParams.get("secret")?.toString();
    const userId = url.searchParams.get("userId")?.toString();

    if (!secret || !userId) {
      throw new Error("Invalid response from Appwrite");
    }

    const session = await account.createSession(userId, secret);
    if (!session) {
      throw new Error("Failed to create session");
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getUser() {
  try {
    const user = await account.get();
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}