import { View, SafeAreaView, TouchableOpacity, Text, Image, ScrollView} from 'react-native'
import React, {useLayoutEffect} from 'react'
import GlobalStyles from '../GlobalStyles'
import {ChevronLeftIcon, ChevronRightIcon, UserIcon, Cog6ToothIcon, ChatBubbleOvalLeftEllipsisIcon, 
    LanguageIcon, ArrowRightOnRectangleIcon, CreditCardIcon, MapPinIcon, 
    ClipboardDocumentIcon, PencilSquareIcon
} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import avatar from '../assets/avatar1.png'




const ProfileScreen = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => (
        navigation.setOptions({
            headerShown: false
        })
    ), [navigation])

  return (
    <ScrollView>
    <SafeAreaView className="p-5" style={GlobalStyles.droidSafeArea}>
      <View className="flex-row items-center space-x-20  justify-between">
            <TouchableOpacity onPress={() => navigation.goBack()} className="bg-lightishPink rounded p-2">
                <ChevronLeftIcon size={25} style={{fontWeight: 'bold'}} color="#de1f27" />
            </TouchableOpacity>
            <Text className="text-2xl text-center font-bold">Profile</Text>
            <TouchableOpacity className="bg-lightishPink rounded p-2">
                <PencilSquareIcon size={25} style={{fontWeight: 'bold'}} color="#de1f27" />
            </TouchableOpacity>
            
      </View>
      <View className="bg-lightishPink mt-16 items-center justify-center self-center h-32 w-32 rounded-3xl">
        <Image source={avatar} className="w-28  h-28" />
      </View>
      <Text className="text-xl font-semibold text-center mt-5">Michael Thomas</Text>
      <Text className="text-md font-bold mt-2 text-gray-400 text-center">@Michael</Text>
    
        <View className="bg-lightishPink mt-3 h-20 p-5 justify-between flex flex-row rounded-b-2xl">
            <TouchableOpacity className="flex flex-col items-center space-x-1">
                <ClipboardDocumentIcon size={24} color="rgb(75, 85, 99)" />
                <Text className="text-gray-600 font-bold">My Order</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-col items-center space-x-1">
                <CreditCardIcon size={24} color="rgb(75, 85, 99)" />
                <Text className="text-gray-600 font-bold">Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-col items-center space-x-1">
                <MapPinIcon size={24} color="rgb(75, 85, 99)" />
                <Text className="text-gray-600 font-bold">Location</Text>
            </TouchableOpacity>
        </View>
            <TouchableOpacity className="flex flex-row h-16 p-2 space-x-3 items-center">
                <View className="bg-slate-300  rounded-lg  p-1">
                    <UserIcon size={23} color="rgb(75, 85, 99)" />
                </View>
                <Text className="flex-1 text-lg font-semibold text-gray-600">User Details</Text>
                <ChevronRightIcon size={24} color="rgb(75, 85, 99)" />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row h-16 p-2 space-x-3 items-center">
                <View className="bg-slate-300  rounded-lg  p-1">
                    <Cog6ToothIcon size={23} color="rgb(75, 85, 99)" />
                </View>
                <Text className="flex-1 text-lg font-semibold text-gray-600">Settings</Text>
                <ChevronRightIcon size={24} color="rgb(75, 85, 99)" />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row h-16 p-2 space-x-3 items-center">
                <View className="bg-slate-300  rounded-lg  p-1">
                    <ChatBubbleOvalLeftEllipsisIcon size={23} color="rgb(75, 85, 99)" />
                </View>
                <Text className="flex-1 text-lg font-semibold text-gray-600">Help & Support</Text>
                <ChevronRightIcon size={24} color="rgb(75, 85, 99)" />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row h-16 p-2 space-x-3 items-center">
                <View className="bg-slate-300  rounded-lg  p-1">
                    <LanguageIcon size={23} color="rgb(75, 85, 99)" />
                </View>
                <Text className="flex-1 text-lg font-semibold text-gray-600">Language</Text>
                <ChevronRightIcon size={24} color="rgb(75, 85, 99)" />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row h-16 p-2 space-x-3 items-center">
                <View className="bg-slate-300  rounded-lg  p-1">
                    <ArrowRightOnRectangleIcon size={23} color="#000" />
                </View>
                <Text className="flex-1 text-lg font-semibold text-gray-600">Logout</Text>
                <ChevronRightIcon size={24} color="rgb(75, 85, 99)" />
            </TouchableOpacity>
            
    </SafeAreaView>
        </ScrollView>
  )
}

export default ProfileScreen