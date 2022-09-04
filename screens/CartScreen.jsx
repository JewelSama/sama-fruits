import { View, SafeAreaView, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import GlobalStyles from '../GlobalStyles'
import {MagnifyingGlassIcon, PlusIcon, MinusIcon, XMarkIcon, Bars3CenterLeftIcon} from 'react-native-heroicons/outline'
import berry from '../assets/berry1.png'
import { selectCartItems, selectCartTotal } from '../faetures/cartSlice'
import { useDispatch, useSelector  } from 'react-redux'
import { useNavigation } from '@react-navigation/native'



const CartScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const items = useSelector(selectCartItems)
  const basketTotal = useSelector(selectCartTotal)
  const [groupedItemsInCart, setGroupedItemsInCart] = useState([])


  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item)
      return results;
    }, {})
    setGroupedItemsInCart(groupedItems)
  }, [items])
  console.log(groupedItemsInCart)
  


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
    <ScrollView className="mt-2 p-4" contentContainerStyle={{paddingBottom: 80}} showsVerticalScrollIndicator={false}>
    <View className="flex  flex-row rounded-lg border justify-between p-4 h-28 border-gray-400 mb-5">
      <Image source={berry} className="w-24 h-24"  />
      <View>
      <Text className="text-xl font-bold">Strawberry</Text>
      <Text className="text-gray-400 text-md font-bold">3Kg</Text>
      <Text className="text-lg font-bold">₦800</Text>
      </View>
      {/* icons */}
      <View className="space-y-4 p-2 -mt-2 -mr-2  right-0 rounded-lg items-center bg-lightishPink h-24">
        <TouchableOpacity>
          <PlusIcon size={20} color="#de1f27" />
        </TouchableOpacity>
        <Text className="font-bold">3</Text>
        <TouchableOpacity >
          <MinusIcon size={20} color="#de1f27" />
        </TouchableOpacity>
      </View>
      
    </View>
    <View className="flex  flex-row rounded-lg border justify-between p-4 h-28 border-gray-400 mb-5">
      <Image source={berry} className="w-24 h-24"  />
      <View>
      <Text className="text-xl font-bold">Strawberry</Text>
      <Text className="text-gray-400 text-md font-bold">3Kg</Text>
      <Text className="text-lg font-bold">₦800</Text>
      </View>
      {/* icons */}
      <View className="space-y-4 p-2 -mt-2 -mr-2  right-0 rounded-lg items-center bg-lightishPink h-24">
        <TouchableOpacity>
          <PlusIcon size={20} color="#de1f27" />
        </TouchableOpacity>
        <Text className="font-bold">3</Text>
        <TouchableOpacity >
          <MinusIcon size={20} color="#de1f27" />
        </TouchableOpacity>
      </View>
      
    </View>
    <View className="flex  flex-row rounded-lg border justify-between p-4 h-28 border-gray-400 mb-5">
      <Image source={berry} className="w-24 h-24"  />
      <View>
      <Text className="text-xl font-bold">Strawberry</Text>
      <Text className="text-gray-400 text-md font-bold">3Kg</Text>
      <Text className="text-lg font-bold">₦800</Text>
      </View>
      {/* icons */}
      <View className="space-y-4 p-2 -mt-2 -mr-2  right-0 rounded-lg items-center bg-lightishPink h-24">
        <TouchableOpacity>
          <PlusIcon size={20} color="#de1f27" />
        </TouchableOpacity>
        <Text className="font-bold">3</Text>
        <TouchableOpacity >
          <MinusIcon size={20} color="#de1f27" />
        </TouchableOpacity>
      </View>
      
    </View>
    <View className="flex  flex-row rounded-lg border justify-between p-4 h-28 border-gray-400 mb-5">
      <Image source={berry} className="w-24 h-24"  />
      <View>
      <Text className="text-xl font-bold">Strawberry</Text>
      <Text className="text-gray-400 text-md font-bold">3Kg</Text>
      <Text className="text-lg font-bold">₦800</Text>
      </View>
      {/* icons */}
      <View className="space-y-4 p-2 -mt-2 -mr-2  right-0 rounded-lg items-center bg-lightishPink h-24">
        <TouchableOpacity>
          <PlusIcon size={20} color="#de1f27" />
        </TouchableOpacity>
        <Text className="font-bold">3</Text>
        <TouchableOpacity >
          <MinusIcon size={20} color="#de1f27" />
        </TouchableOpacity>
      </View>
      
    </View>
    <View className="flex  flex-row rounded-lg border justify-between p-4 h-28 border-gray-400 mb-5">
      <Image source={berry} className="w-24 h-24"  />
      <View>
      <Text className="text-xl font-bold">Strawberry</Text>
      <Text className="text-gray-400 text-md font-bold">3Kg</Text>
      <Text className="text-lg font-bold">₦800</Text>
      </View>
      {/* icons */}
      <View className="space-y-4 p-2 -mt-2 -mr-2  right-0 rounded-lg items-center bg-lightishPink h-24">
        <TouchableOpacity>
          <PlusIcon size={20} color="#de1f27" />
        </TouchableOpacity>
        <Text className="font-bold">3</Text>
        <TouchableOpacity >
          <MinusIcon size={20} color="#de1f27" />
        </TouchableOpacity>
      </View>
      
    </View>
    <View className="flex  flex-row rounded-lg border justify-between p-4 h-28 border-gray-400 mb-5">
      <Image source={berry} className="w-24 h-24"  />
      <View>
      <Text className="text-xl font-bold">Strawberry</Text>
      <Text className="text-gray-400 text-md font-bold">3Kg</Text>
      <Text className="text-lg font-bold">₦800</Text>
      </View>
      {/* icons */}
      <View className="space-y-4 p-2 -mt-2 -mr-2  right-0 rounded-lg items-center bg-lightishPink h-24">
        <TouchableOpacity>
          <PlusIcon size={20} color="#de1f27" />
        </TouchableOpacity>
        <Text className="font-bold">3</Text>
        <TouchableOpacity >
          <MinusIcon size={20} color="#de1f27" />
        </TouchableOpacity>
      </View>
      
    </View>

    
    </ScrollView>
    </>
  )
}

export default CartScreen