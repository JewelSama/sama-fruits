import { View, SafeAreaView, TouchableOpacity, Text,  } from 'react-native'
import React, {useLayoutEffect} from 'react'
import GlobalStyles from '../GlobalStyles'
import {ChevronLeftIcon, PencilSquareIcon} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'



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
      <View>
        
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen