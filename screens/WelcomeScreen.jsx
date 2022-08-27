import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import splash from '../assets/splash.png'
import naru from '../assets/naru.png'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
    const navigation = useNavigation()
  return (
    <View>
      <View className="bg-red-200 items-center justify-center z-10 h-96 rounded-b-full">
        <Image source={splash} className="w-48 h-48" />
      </View>
      <View className="bg-slate-300 space-y-3 h-full items-center -mt-36 ">
        <Text className=" mt-56 text-4xl font-bold text-center">Buy Your Daily <Text className="text-darkRed">Grocery</Text> Easily</Text>
        <Text className="font-bold text-gray-600 text-lg text-center">The easiest way to share your family's grocery shopping-Try it out.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomeT')} className="bg-darkRed top-12 items-center p-3  w-56 rounded-lg">
            <Text className=" text-gray-200 text-lg font-bold">Let's Buy</Text>
        </TouchableOpacity>
      </View>
        <Image source={naru} className="w-44 h-36 z-20 absolute self-center" style={{marginTop: 300}} />
    </View>
  )
}

export default WelcomeScreen