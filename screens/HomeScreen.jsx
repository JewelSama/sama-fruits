import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import GlobalStyles from '../GlobalStyles'
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import avatar from '../assets/avatar1.png' 

const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => (
        navigation.setOptions({
            headerShown: false
        })
    ), [navigation])

  return (
    <SafeAreaView className="p-4" style={GlobalStyles.droidSafeArea}>
      <View className="flex-row items-center space-x-20  justify-between">
            <TouchableOpacity className="bg-lightishPink rounded p-2">
                <Bars3CenterLeftIcon size={25} style={{fontWeight: 'bold'}} color="#de1f27" />
            </TouchableOpacity>
            <Text className="text-xl text-center font-bold">Home</Text>
            <TouchableOpacity className="bg-lightishPink p-1 rounded">
                <Image 
                    source={avatar}
                    className="w-10 h-10"
                />
            </TouchableOpacity>
      </View>
      <Text className="text-xl mt-4  font-bold">Let's find best food here</Text>
      <TouchableOpacity className="flex-row mt-4 bg-slate-200 p-3">
        <MagnifyingGlassIcon size={25} style={{fontWeight: 'bold'}} color="#ccc" />
        <Text className="ml-3 font-bold text-slate-400 mt-1">Search now...</Text>
      </TouchableOpacity>

      
    </SafeAreaView>
    
  )
}

export default HomeScreen;