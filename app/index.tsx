
import { Text, View, FlatList, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import icons from '@/constants/icons';
import images from '@/constants/images';
import { login } from "@/backend/appwrite";
import { router } from "expo-router";

const SignIn = () => {
  const handleSignIn = async () => {
    const result = await login();
    if (result) {
      console.log("Sign in successful");
      router.push("/(root)/(tabs)");
    } else {
      console.log("Sign in failed");
    }
  }

  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView>
        <Image source={images.onBoarding} className="w-full h-[300px]" />

        <View className="p-3 flex justify-center items-center">
          <View className="flex h-[150px] justify-center items-center">
            <Text className="text-[#E4E4E4] font-rubik-bold text-3xl py-1">Welcome to Gold Estate</Text>
            <Text className="text-[#E4E4E4] font-rubik-semibold text-lg py-2">By working with us you become <Text className="text-[#ebbd61]">luxurier</Text> </Text>
          </View>

          <View className="flex justify-center gap-1 bg-[#A46F05] h-[200px] rounded-lg w-[70%]">

            <Text className="text-center mb-2 font-rubik-bold text-white text-xl">Continue with</Text>

            <TouchableOpacity className="bg-[#ebbd61] p-3" onPress={handleSignIn}>
              <View className="flex flex-row justify-start items-center gap-3">
                <Image source={icons.google} className="w-[20px] h-[20px]" />
                <Text className="font-rubik text-lg">Google</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn



/*
  1) Создайте проект где будете подключаться через любой сервис на выбор
*/