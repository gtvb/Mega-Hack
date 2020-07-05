import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { Map } from '../pages/Map'
import { Detail } from '../pages/Detail'
import { Profile } from '../pages/Profile'

import FiIcon from '@expo/vector-icons/Feather'

const Tab = createBottomTabNavigator()
const MapStack = createStackNavigator()


const MapDetailsStack = () => {
    return (       
        <MapStack.Navigator headerMode='none'>
            <MapStack.Screen name='Map' component={Map} />
            <MapStack.Screen name='Detalhes' component={Detail} />
        </MapStack.Navigator>   
    )
}


export const UsersRoutes = () => {
    return (
        <>
        <NavigationContainer>
                <Tab.Navigator 
                    initialRouteName='Mapa'
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
            
                        if (route.name === 'Mapa') {
                            iconName = 'map'
                        } else if (route.name === 'Pesquisar') {
                            iconName = 'search'
                        } else {
                            iconName = 'user'
                        }
            
                        return <FiIcon name={iconName} size={size} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: 'black',
                        inactiveTintColor: 'gray',
                    }}
                >
                    <Tab.Screen name='Mapa' component={MapDetailsStack} />
                    <Tab.Screen name='Pesquisar' component={() => <Text>Search</Text>} />
                    <Tab.Screen name='Perfil' component={Profile} />
                </Tab.Navigator>
        </NavigationContainer>
        </>
    )
}