import { View, SafeAreaView, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import GlobalStyles from '../GlobalStyles'
import {MagnifyingGlassIcon, PlusIcon, XMarkIcon, Bars3CenterLeftIcon} from 'react-native-heroicons/outline'
import berry from '../assets/berry1.png'

const CartScreen = () => {
  return (
    <>
    <SafeAreaView className="p-5" style={GlobalStyles.droidSafeArea}>
      <View className="flex-row items-center space-x-10  justify-between">
            <TouchableOpacity onPress={() => navigation.goBack()} className="bg-lightishPink rounded-lg p-2">
                <Bars3CenterLeftIcon size={25} style={{fontWeight: 'bold'}} color="#de1f27" />
            </TouchableOpacity>
            <Text className="text-xl text-center font-bold">Cart</Text>
            <TouchableOpacity className="bg-lightishPink rounded-lg p-2">
                <MagnifyingGlassIcon size={25} style={{fontWeight: 'bold'}} color="#de1f27" />
            </TouchableOpacity>
      </View>
    </SafeAreaView>
    <ScrollView className="-mt-4 p-5" contentContainerStyle={{paddingBottom: 80}} showsVerticalScrollIndicator={false}>
    <View className="flex flex-row rounded-lg border justify-between p-4 h-28 border-gray-400 mb-5">
      <Image source={berry} className="w-24 h-24"  />
      <View>
      <Text className="text-xl font-bold">Strawberry</Text>
      <Text className="text-gray-400 text-md font-bold">Fresh Fruits</Text>
      <Text className="text-lg font-bold">₦800</Text>
      </View>
      {/* icons */}
      <View className="space-y-6 items-center">
        <TouchableOpacity className="bg-gray-300 items-center h-6 justify-center w-6 rounded-md">
          <XMarkIcon size={12} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-darkRed items-center p-2 rounded-md">
          <PlusIcon size={16} color="#fff" />
        </TouchableOpacity>
      </View>
      
    </View>
    
    
    </ScrollView>
    </>
  )
}

export default CartScreen