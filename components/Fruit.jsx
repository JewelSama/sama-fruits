import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import React, {useState, useEffect} from 'react'
import avatar from '../assets/berry1.png'
import {BookmarkIcon as OutlinedBookmark} from 'react-native-heroicons/outline'
import {BookmarkIcon as SolidBookmark, PlusIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import sanityClient from '../sanity'
import { urlFor } from '../sanity'

const Fruit = () => {
    const [fruits, setFruits] = useState([])
    const navigation = useNavigation()


    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "category"] {
            ...,
            dishes[]->
            
          }[3]
        `).then((data) => {
            setFruits(data?.dishes)
        })
        
    }, [sanityClient])
    
    // console.log(fruits);
  return (
    <View className="flex flex-row flex-wrap justify-between">
     {fruits?.map(fruit => (
     
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', {
            id: fruit?._id,
            name:fruit?.name,
            img:fruit?.image,
            price:fruit?.price,
            rating:fruit?.rating,
            desc:fruit?.short_description,
        })} className="h-48 w-40 mt-3 p-2 relative  bg-transparent  rounded-md border border-gray-400 ">
            <TouchableOpacity className="rounded p-2  items-center self-end  bg-red-300">
                {/* <SolidBookmark size={20} color="#de1f27" /> */}
                <OutlinedBookmark size={18} color="#fff" style={{fontWeight: 'bold'}} />
            </TouchableOpacity>
            <Image source={{ uri: urlFor(fruit?.image).url() }} className="w-24 mt-8 absolute  self-center h-20" />
           <View className="flex mt-14">
            <Text className="text-md font-bold mt-3 text-md" >{fruit?.name}</Text>
                <Text className=" text-gray-400 text-xs font-bold">Fresh Fruits</Text>
            <View className="flex flex-row mt-1 justify-between">
            <Text className="text-lg font-bold">₦{fruit?.price}</Text>
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

export default Fruit