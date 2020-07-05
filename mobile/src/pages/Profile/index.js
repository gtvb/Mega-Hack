import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

import { RectButton } from 'react-native-gesture-handler'

export const Profile = () => {

    const arr = [
        {
            name: 'teste',
            id: '124124'
        }
    ]

    return (
        <View>
            <View>
                <Text>Minha conta</Text>
            </View>

            <View>
                <Text>Username: User23432</Text>
                <Text>Email: email@email.com</Text>
            </View>

            <View>
                <Text>Favoritos</Text>

                <View>
                    
                </View>
            </View>

            <RectButton>
                <Text>Editar</Text>
            </RectButton>
        </View>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1
    },

    profileHeader: {
        flex: 1 / 2,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    headertext: {
        fontSize: 24,
        fontFamily: 'Roboto_500Medium'
    },

    settingsView: {
        flex: 1,
        
    }
})