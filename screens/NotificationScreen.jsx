import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import {Bars3CenterLeftIcon} from 'react-native-heroicons/outline'
import GlobalStyles from '../GlobalStyles'

const NotificationScreen = () => {
  return (
<SafeAreaView className="p-5 relative" style={GlobalStyles.droidSafeArea}>
      <View className="flex-row items-center space-x-10  justify-between">
            <TouchableOpacity onPress={() => navigation.goBack()} className="bg-lightishPink rounded-lg p-2">
                <Bars3CenterLeftIcon size={25} style={{fontWeight: 'bold'}} color="#de1f27" />
            </TouchableOpacity>
            <Text className="text-xl text-center font-bold">Notifications</Text>
      <View></View>
      </View>
            {/* <TouchableOpacity className="bg-darkRed bottom-10 w-full z-50 absolute">
                <Text className="text-lightishPink">View Details</Text>
            </TouchableOpacity> */}

    </SafeAreaView>
  )
}

export default NotificationScreen