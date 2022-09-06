import { View, Text, SafeAreaView, Image } from 'react-native'
import React, {useEffect} from 'react'
import GlobalStyles from '../GlobalStyles'
import deliveryLoading from '../assets/deliveryLoading.gif'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'


const PreparingOrderScreen = () => {
    const navigation  = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery')
        }, 5000)
    }, [])
  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center" style={GlobalStyles.droidSafeArea}>
      <Image 
        source={deliveryLoading}
        
        className="h-96 w-96 my-10"
      />
      <Text
        className="text-lg text-white font-bold text-center"
      >
        Waiting for Restaurant tom accept your order!
      </Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen