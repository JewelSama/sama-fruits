import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import GlobalStyles from '../GlobalStyles'
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import avatar from '../assets/avatar1.png' 
import Fruit from '../components/Fruit'
import Vegetable from '../components/Vegetable'
import FastFood from '../components/FastFood'
import Bakery from '../components/Bakery'


const HomeScreen = () => {
    const navigation = useNavigation()
    const [ defaultTab, switchTab ] = useState(0);

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
            <Text className="text-2xl text-center font-bold">Home</Text>
            <TouchableOpacity className="bg-lightishPink p-1 rounded">
                <Image 
                    source={avatar}
                    className="w-10 h-10"
                />
            </TouchableOpacity>
      </View>
      <Text className="text-xl mt-5  font-bold">Let's find best food here</Text>
      <TouchableOpacity className="flex-row mt-2 bg-slate-200 p-3">
        <MagnifyingGlassIcon size={25} style={{fontWeight: 'bold'}} color="#ccc" />
        <Text className="ml-3 font-bold text-slate-400 mt-1">Search now...</Text>
      </TouchableOpacity>

        {/* categories */}
      <View className="flex-row space-x-5 mt-5">
        <TouchableOpacity onPress={() => switchTab(0)}>
            <Text className={`text-lg text-slate-400 font-bold ${defaultTab === 0 &&  'text-slate-900'}`}>
                Fruits
            </Text>
            {defaultTab == 0 && (<View className="w-1 h-1 bg-gray-900 rounded-full items-center self-center">

            </View>)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => switchTab(1)}>
            <Text className={`text-lg text-slate-400 font-bold ${defaultTab === 1 && 'text-slate-900'}`}>
                Vegetable
            </Text>
            {defaultTab == 1 &&(<View className="w-1 h-1 bg-gray-900 rounded-full items-center self-center">

            </View>)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => switchTab(2)}>
            <Text className={`text-lg text-slate-400 font-bold ${defaultTab === 2 &&  'text-slate-900'}`}>
                Bakery
            </Text>
            {defaultTab == 2 &&(<View className="w-1 h-1 bg-gray-900 rounded-full items-center self-center">

            </View>)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => switchTab(3)}>
            <Text className={`text-lg text-slate-400 font-bold ${defaultTab === 3 && 'text-slate-900'}`}>
                Fast Food
            </Text>
            {defaultTab == 3 &&(<View className="w-1 h-1 bg-gray-900 rounded-full items-center self-center">

            </View>)}
        </TouchableOpacity>
      </View>

    <View>
        {defaultTab === 0 && (
            <ScrollView>
                <Fruit />
            </ScrollView>
        )}
        {defaultTab === 1 && (
            <ScrollView>
                <Vegetable />
            </ScrollView>
        )}
        {defaultTab === 2 && (
            <ScrollView>
                <Bakery />
            </ScrollView>
        )}
        {defaultTab === 3 && (
            <ScrollView>
            <FastFood />
            </ScrollView>
        )}
    </View>
    </SafeAreaView>
    
  )
}

export default HomeScreen;