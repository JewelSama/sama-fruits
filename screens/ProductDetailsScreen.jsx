import { View, SafeAreaView, TouchableOpacity, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import GlobalStyles from '../GlobalStyles'
import {ChevronLeftIcon, PlusIcon, MinusIcon} from 'react-native-heroicons/outline'
import {StarIcon} from 'react-native-heroicons/mini'
import { useNavigation, useParams } from '@react-navigation/native'
import berry from '../assets/berry1.png'
import AddToCart from '../components/AddToCart'
import { urlFor } from '../sanity'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, selectCartItemsWithId } from '../faetures/cartSlice'




const ProductDetailsScreen = ({route}) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()


    const {
        id,
        name,
        img,
        price,
        rating,
        desc,
    } = route.params; 
    const items = useSelector((state) => selectCartItemsWithId(state, id))
    // console.log(route.params)

    const addItemToCart = () => {
        dispatch(addToCart({id, name, desc, price, img}))
    }
    const removeItemFromCart = () => {
        if(!items.length > 0) return;
        dispatch(removeFromCart({id}))
    }

    
    // console.log(items)
  return (
    <>
        <AddToCart />
        <SafeAreaView className="p-5 bg-lightishPink  self-center h-80 w-96" style={GlobalStyles.droidSafeArea}>
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
            <Image source={{uri: urlFor(img).url()}} className=" w-56 mt-2 self-center  h-48" />

        </SafeAreaView>
    <ScrollView  className="mt-2"  contentContainerStyle={{paddingBottom: 120}} showsVerticalScrollIndicator={false}>
        <View className="flex flex-row items-center justify-center mt-7 space-x-3">
            <TouchableOpacity onPress={removeItemFromCart} className="bg-gray-400 items-center p-2 rounded-md">
              <MinusIcon size={16} color="#fff" />
            </TouchableOpacity>
            <Text className="font-bold">{items.length} kg</Text>
            <TouchableOpacity className="bg-darkRed items-center p-2 rounded-md" onPress={addItemToCart}>
              <PlusIcon size={16} color="#fff" />
            </TouchableOpacity>
        </View>    
        <View className="flex flex-row justify-between mt-4 px-5">
            <View className="flex flex-col space-y-2">
                <Text className="text-2xl font-semibold">{name}</Text>
                <Text className="font-bold text-slate-400">Available in stock</Text>
            </View>
            
            <View className="flex flex-col space-y-3">
                <Text className="text-2xl font-semibold text-darkRed mt-2">₦{price}<Text className="text-slate-400 text-base">/kg</Text></Text>
                <Text className="self-end font-bold text-sm text-slate-400"><StarIcon className="self-center" size={16} color="rgb(234, 179, 8)" /> {rating}</Text>
            </View>
        </View>
        <Text className="font-semibold text-xl px-5 mt-7">Details</Text>
        <Text className="font-semibold text-sm text-gray-400 px-5 mt-2">
            {desc}<Text className="text-base text-black font-semibold"> Read More</Text>
        </Text>
        <Text className="font-semibold text-xl px-5 mt-4">Related Fruits</Text>
        <ScrollView horizontal className="flex flex-row space-x-3 mt-2 px-5" contentContainerStyle={{paddingRight: 60}} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity className="bg-lightishPink h-20 rounded-lg p-3 w-20">
                <Image source={berry} className="w-full h-full" />
            </TouchableOpacity>
            <TouchableOpacity className="bg-lightishPink h-20 rounded-lg p-3 w-20">
                <Image source={berry} className="w-full h-full" />
            </TouchableOpacity>
            <TouchableOpacity className="bg-lightishPink h-20 rounded-lg p-3 w-20">
                <Image source={berry} className="w-full h-full" />
            </TouchableOpacity>
            <TouchableOpacity className="bg-lightishPink h-20 rounded-lg p-3 w-20">
                <Image source={berry} className="w-full h-full" />
            </TouchableOpacity>
            <TouchableOpacity className="bg-lightishPink h-20 rounded-lg p-3 w-20">
                <Image source={berry} className="w-full h-full" />
            </TouchableOpacity>
           
            
        </ScrollView>
        
    </ScrollView>
    </>
  )
}

export default ProductDetailsScreen