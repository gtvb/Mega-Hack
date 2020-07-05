import React from 'react'

import { View, Text, TextInput, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import FiIcon from '@expo/vector-icons/Feather'

export const Register = ({ navigation }) => {
    return (
        <View style={styles.registerContainer}>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Crie Sua Conta</Text>
                <FiIcon style={styles.headerIcon} name='x' size={24} color='red' onPress={() => navigation.goBack()} />
            </View>

            <View style={styles.creation}>
                <TextInput style={styles.creationInput} placeholder='Nome' />
                <TextInput style={styles.creationInput} placeholder='E-mail' />
                <TextInput style={styles.creationInput} placeholder='Senha' />

                <RectButton style={styles.createBtn}>
                    <Text style={styles.createText}>Criar</Text>
                </RectButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    registerContainer: {
        flex: 1,
        backgroundColor: '#f0f0f5',
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerView: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#111'
    },

    headerText: {
        fontSize: 26,
        paddingHorizontal: 24,
        color: '#fff',
        fontFamily: 'Ubuntu_700Bold'
    },

    headerIcon: {
        paddingHorizontal: 24
    },

    creation: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%'
    },

    creationInput: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 8,
        height: 52,
        padding: 10
    },

    createBtn: {
        width: '90%',
        backgroundColor: '#222',
        borderRadius: 8,
        height: 56,
        alignItems: "center",
        justifyContent: 'center'
    },

    createText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Roboto_500Medium'
    }
})