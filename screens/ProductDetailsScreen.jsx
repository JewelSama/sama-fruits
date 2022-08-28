import { View, SafeAreaView, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import GlobalStyles from '../GlobalStyles'
import {ChevronLeftIcon} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const ProductDetailsScreen = () => {

    const navigation = useNavigation()
  return (
        <SafeAreaView className="p-5 relative bg-lightishPink rounded-full h-96 w-96" style={GlobalStyles.droidSafeArea}>
            <View className="flex-row mt-4  items-center space-x-10  justify-between">
                <TouchableOpacity onPress={() => navigation.goBack()} className="bg-red-200 rounded-lg p-2">
                    <ChevronLeftIcon size={25} style={{fontWeight: 'bold'}} color="#de1f27" />
                </TouchableOpacity>
                <Text className="text-xl text-center font-bold">Product Details</Text>
                <View></View>
            </View>
            {/* <TouchableOpacity className="bg-darkRed bottom-10 w-full z-50 absolute">
                <Text className="text-lightishPink">View Details</Text>
            </TouchableOpacity> */}

        </SafeAreaView>
  )
}

export default ProductDetailsScreen