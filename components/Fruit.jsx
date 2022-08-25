import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import avatar from '../assets/berry1.png'
import {BookmarkIcon as OutlinedBookmark} from 'react-native-heroicons/outline'
import {BookmarkIcon as SolidBookmark, PlusIcon} from 'react-native-heroicons/solid'
const Fruit = () => {
  return (
        <TouchableOpacity className="h-48 w-36 mt-3 p-2 relative  bg-transparent  rounded-md border border-gray-400 ">
            <TouchableOpacity className="rounded p-2  items-center self-end  bg-lightishPink">
                {/* <SolidBookmark size={20} color="#de1f27" /> */}
                <OutlinedBookmark size={18} color="#fff" style={{fontWeight: 'bold'}} />
            </TouchableOpacity>
            <Image source={avatar} className="w-20 mt-8 absolute  self-center h-20" />
           <View className="flex mt-14">
            <Text className="text-md font-bold mt-3 text-md" >Strawberry</Text>
                <Text className=" text-gray-400 text-xs font-bold">Fresh Fruits</Text>
            <View className="flex flex-row mt-1 justify-between">
            <Text className="text-lg font-bold">₦50,000</Text>
                <TouchableOpacity className="bg-darkRed items-center p-2 rounded-md">
                    <PlusIcon size={16} color="#fff" />
                </TouchableOpacity>
            </View>
            </View>
        </TouchableOpacity>
        
  )
}

export default Fruit