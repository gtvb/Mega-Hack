import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Login } from '../pages/Login'
import { Register } from '../pages/Register'

const Stack = createStackNavigator()

export const AuthRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none' initialRouteName='Home'>
                <Stack.Screen name='Home' component={Login} />
                <Stack.Screen name='Register' component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}