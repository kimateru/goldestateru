import { SplashScreen, Stack } from "expo-router";
import './global.css';
import {useFonts} from 'expo-font';
import { useEffect } from "react";
import { GlobalProvider } from "@/backend/globalProvider";
export default function RootLayout() {

  const [loaded] = useFonts( {
    "Rubik-Bold" : require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold" : require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light" : require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Regular" : require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold" : require("../assets/fonts/Rubik-SemiBold.ttf"),
    "Poppins-Bold" : require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold" : require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Light" : require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular" : require("../assets/fonts/Poppins-Regular.ttf"),
    "Lato-Regular" : require("../assets/fonts/Lato-Regular.ttf"),
    "Lato-Lightitalic" : require("../assets/fonts/Lato-LightItalic.ttf"),
    "Lato-Bolditalic" : require("../assets/fonts/Lato-BoldItalic.ttf"),
    "Lato-Bold" : require("../assets/fonts/Lato-Bold.ttf")
  }) 

  useEffect(() => {
    if(loaded){
      SplashScreen.hideAsync();
    }
  }, [loaded])


  if(!loaded) {
    return null;
  }

  return (
    <GlobalProvider>
      <Stack screenOptions={{headerShown: false}} />
    </GlobalProvider>
  );
}
