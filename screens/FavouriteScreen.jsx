import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import GlobalStyles from '../GlobalStyles'
import { Bars3CenterLeftIcon, ShoppingBagIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'

const FavouriteScreen = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView className="p-5" style={GlobalStyles.droidSafeArea}>
      <View className="flex-row items-center space-x-10  justify-between">
            <TouchableOpacity onPress={() => navigation.goBack()} className="bg-lightishPink rounded-lg p-2">
                <Bars3CenterLeftIcon size={25} style={{fontWeight: 'bold'}} color="#de1f27" />
            </TouchableOpacity>
            <Text className="text-xl text-center font-bold">Favourite Lists</Text>
            <TouchableOpacity className="bg-lightishPink rounded-lg p-2">
                <ShoppingBagIcon size={25} style={{fontWeight: 'bold'}} color="#de1f27" />
            </TouchableOpacity>
      </View>
      <TouchableOpacity className="flex-row mt-6 rounded-md bg-slate-200 p-3">
        <MagnifyingGlassIcon size={25} style={{fontWeight: 'bold'}} color="#ccc" />
        <Text className="ml-3 font-bold text-slate-400 mt-1">Search in favourite list</Text>
      </TouchableOpacity>

      <View className="flex flex-row">
        {/* <Image source={}  /> */}
      </View>
    </SafeAreaView>
  )
}

export default FavouriteScreen