import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home';
import Products from '../screens/Products';
import ProductDetail from '../screens/ProductDetail/ProductDetail';

const RootNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='home' screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='products' component={Products} />
        <Stack.Screen name='productDetail' component={ProductDetail} />
    </Stack.Navigator>
  )
}

export default RootNavigation