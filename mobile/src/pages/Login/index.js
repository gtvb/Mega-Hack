import React, { useContext } from 'react'
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'

import { RectButton } from 'react-native-gesture-handler'
import McIcon from '@expo/vector-icons/MaterialCommunityIcons'

import { AuthContext } from '../../context/AuthContext'

export const Login = ({ navigation }) => {

    const authContext = useContext(AuthContext)
    const { signIn, user } = authContext

    return (
        <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#f0f0f5'}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
           <View style={styles.logoText}>
               <McIcon style={{paddingHorizontal: 24}} name='food' size={56} color='#000' />
           </View>

           <View style={styles.typography}>
               <Text style={styles.bigText}>Encontre restaurantes confiáveis num piscar de olhos.</Text>
               <Text style={styles.smallText}>Nós te ajudamos a encontrar lugares seguros e saudáveis para se alimentar.</Text>
           </View>

           <View style={styles.uiContainer}>
               <TextInput style={styles.inputElement} placeholder="E-mail" />
               <TextInput style={styles.inputElement} placeholder='Senha'/>

               <RectButton style={styles.logBtn}>
                   <Text style={styles.btnText}>Entrar</Text>
               </RectButton>

               <Text style={styles.linkText}>Não tem conta? Crie uma 
                    <Text onPress={() => navigation.navigate('Register')} style={{color: 'royalblue'}}>{` `}aqui</Text>
               </Text>
           </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    logoText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        flexDirection: 'row',
    },

    typography: {
        flex: 2,
        alignItems: "flex-start",
        justifyContent: 'flex-start',
        paddingHorizontal: 24,
        flexDirection: 'column',
        width: '100%',
    },

    bigText: {
        fontSize: 36,
        color: '#555',
        marginBottom: 16,
        fontFamily: 'Ubuntu_700Bold'
    },

    smallText: {
        fontSize: 16,
        color: '#555',
        fontFamily: 'Roboto_500Medium'
    },

    uiContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        paddingHorizontal: 10,
        width: '100%'
    },

    inputElement: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 8,
        height: 64,
        padding: 10
    },

    logBtn: {
        width: '90%',
        backgroundColor: '#222',
        borderRadius: 8,
        height: 56,
        alignItems: "center",
        justifyContent: 'center'
    },

    btnText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Roboto_500Medium'
    },

    linkText: {
        fontFamily: 'Roboto_500Medium'
    }
})