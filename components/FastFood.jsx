import { View, Text, Image, TouchableOpacity, ActivityIndicator} from 'react-native'
import React, {useState, useEffect} from 'react'
import {BookmarkIcon as OutlinedBookmark} from 'react-native-heroicons/outline'
import {BookmarkIcon as SolidBookmark, PlusIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { urlFor } from '../sanity'
import sanityClient from '../sanity'

const FastFood = () => {
    const navigation = useNavigation()
    const [fastFoods, setFastFoods] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    
    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "category"] {
            ...,
            dishes[]->
            
          }[0]
        `).then((data) => {
            setFastFoods(data?.dishes)
            // console.log(fastFoods);
            setIsLoading(false)
        })
        
    }, [sanityClient])
  return isLoading ? (
    <ActivityIndicator size="large" color="#de1f27" />
  ) :(
    <View className="flex flex-row flex-wrap justify-between">
    {fastFoods?.map(fFood => (
        <TouchableOpacity key={fFood?._id} onPress={() => navigation.navigate('ProductDetail', {
            id: fFood?.id,
            img: fFood?.image,
            name: fFood?.name,
            price: fFood?.price,
            rating: fFood?.rating,
            desc: fFood?.short_description,
            
        })} 
        
        className="h-48 w-40 mt-3 p-2 relative  bg-transparent  rounded-md border border-gray-400 ">
            <TouchableOpacity className="rounded p-2  items-center self-end  bg-red-300">
                {/* <SolidBookmark size={20} color="#de1f27" /> */}
                <OutlinedBookmark size={18} color="#fff" style={{fontWeight: 'bold'}} />
            </TouchableOpacity>
            <Image source={{uri: urlFor(fFood.image).url()}} className="w-24 mt-8 absolute  self-center h-20" />
           <View className="flex mt-14">
            <Text className="text-md font-bold mt-3 text-md" >{fFood.name}</Text>
                <Text className=" text-gray-400 text-xs font-bold">Fast Food</Text>
            <View className="flex flex-row mt-1 justify-between">
            <Text className="text-lg font-bold">₦{fFood.price}</Text>
                <TouchableOpacity className="bg-darkRed items-center p-2 rounded-md">
                    <PlusIcon size={16} color="#fff" />
                </TouchableOpacity>
            </View>
            </View>
        </TouchableOpacity>
        ))}
        </View>
        
  )
}

export default FastFood