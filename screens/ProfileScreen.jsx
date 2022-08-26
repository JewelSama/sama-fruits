import { View, SafeAreaView, TouchableOpacity, Text, Image} from 'react-native'
import React, {useLayoutEffect} from 'react'
import GlobalStyles from '../GlobalStyles'
import {ChevronLeftIcon, ClipboardDocumentIcon, PencilSquareIcon} from 'react-native-heroicons/outline'
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
    <SafeAreaView className="p-4" style={GlobalStyles.droidSafeArea}>
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
    
        <View className="bg-lightishPink h-24 flex flex-row">
            <View>
                <ClipboardDocumentIcon size={16} color="#ccc" />
                <Text>order</Text>
            </View>
            <View>
                <Text>payment</Text>
            </View>
            <View>
                <Text>location</Text>
            </View>
        </View>
    
    </SafeAreaView>
  )
}

export default ProfileScreen