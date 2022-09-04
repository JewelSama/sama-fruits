import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const AddToCart = ({cartItems, cartTotal}) => {
  
  const navigation = useNavigation()
  
  if(cartItems.length === 0) return null;
  
  return (
    <View className="z-50 bottom-0 w-full px-5 bg-white py-8  absolute">
      <TouchableOpacity onPress={() => navigation.navigate('Cart')} className="bg-darkRed  items-center p-3  rounded-lg">
            <Text className=" text-gray-200 text-lg font-bold">View Cart({cartItems.length}) {''}  ₦{cartTotal}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default AddToCart