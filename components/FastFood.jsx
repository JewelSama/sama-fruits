import { View, Text, Image, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import avatar from '../assets/fast1.png'
import {BookmarkIcon as OutlinedBookmark} from 'react-native-heroicons/outline'
import {BookmarkIcon as SolidBookmark, PlusIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { urlFor } from '../sanity'
import sanityClient from '../sanity'

const FastFood = () => {
    const navigation = useNavigation()
    const [fastFoods, setFastFoods] = useState([])

    
    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "category"] {
            ...,
            dishes[]->
            
          }[0]
        `).then((data) => {
            setFastFoods(data?.dishes)
        })
        
    }, [sanityClient])
  return (
    <>
    {fastFoods?.map(fFood => (
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')} className="h-48 w-36 mt-3 p-2 relative  bg-transparent  rounded-md border border-gray-400 ">
            <TouchableOpacity className="rounded p-2  items-center self-end  bg-lightishPink">
                {/* <SolidBookmark size={20} color="#de1f27" /> */}
                <OutlinedBookmark size={18} color="#fff" style={{fontWeight: 'bold'}} />
            </TouchableOpacity>
            <Image source={{uri: urlFor(fFood.image).url()}} className="w-20 mt-8 absolute  self-center h-20" />
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
        </>
        
  )
}

export default FastFood