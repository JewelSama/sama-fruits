import { View, SafeAreaView, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import GlobalStyles from '../GlobalStyles'
import {MagnifyingGlassIcon, PlusIcon, MinusIcon, Bars3CenterLeftIcon} from 'react-native-heroicons/outline'
import berry from '../assets/berry1.png'
import { selectCartItems, selectCartTotal, selectCartItemsWithId, removeFromCart, addToCart } from '../faetures/cartSlice'
import { useDispatch, useSelector  } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { urlFor } from '../sanity'


const CartScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const items = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
  const [groupedItemsInCart, setGroupedItemsInCart] = useState([])


  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item)
      return results;
    }, {})
    setGroupedItemsInCart(groupedItems)
  }, [items])
  // console.log(groupedItemsInCart)

//   const cartItems = useSelector((state) => selectCartItemsWithId(state, id))
  
//   const addItemToCart = () => {
//     dispatch(addToCart({id, name, desc, price, img}))
// }
// const removeItemFromCart = () => {
//     if(!items.length > 0) return;
//     dispatch(removeFromCart({id}))
// }


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
      {Object.entries(groupedItemsInCart).map(([key, items]) => 
    <View key={key} className="flex  flex-row rounded-lg border justify-between p-4 h-28 border-gray-400 mb-5">
      <Image source={{ uri: urlFor(items[0]?.img).url()}} className="w-24 h-24" />
      <View className="items-center">
      <Text className="text-xl font-bold">{items[0]?.name}</Text>
      <Text className="text-gray-400 text-md font-bold">{items.length}Qty</Text>
      <Text className="text-lg font-bold">₦{items[0]?.price}</Text>
      </View>
      {/* icons */}
      <View className="space-y-4 p-2 -mt-2 -mr-2  right-0 rounded-lg items-center bg-lightishPink h-24">
        <TouchableOpacity>
          <PlusIcon size={20} color="#de1f27" />
        </TouchableOpacity>
        <Text className="font-bold">{items.length}</Text>
        <TouchableOpacity>
          <MinusIcon size={20} color="#de1f27" />
        </TouchableOpacity>
      </View>
      
    </View>
    )}
    

    
    </ScrollView>
    </>
  )
}

export default CartScreen