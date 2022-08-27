import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalStyles from '../GlobalStyles'
import {MagnifyingGlassIcon, Bars3CenterLeftIcon} from 'react-native-heroicons/outline'

const CartScreen = () => {
  return (
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
  )
}

export default CartScreen