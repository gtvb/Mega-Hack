import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TextInput, FlatList, ScrollView, Dimensions } from 'react-native'

import Ionicon from '@expo/vector-icons/Ionicons'
import { RectButton } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;

export const Detail = () => {

    const fakeData = [
        {
            user: 'userName',
            name: 'test',
            id: '1'
        },

        {
            user: 'userName',
            name: 'teste',
            id: '2'
        },
        {
            user: 'userName',
            name: 'teste',
            id: '3'
        },
        {
            user: 'userName',
            name: 'teste',
            id: '4'
        },
        {
            user: 'userName',
            name: 'teste',
            id: '5'
        },
        {
            user: 'userName',
            name: 'teste',
            id: '6'
        },

        {
            user: 'userName',
            name: 'teste',
            id: '7'
        },
        {
            user: 'userName',
            name: 'teste',
            id: '8'
        },
        {
            user: 'userName',
            name: 'teste',
            id: '9'
        },
        {
            user: 'userName',
            name: 'werf',
            id: '10'
        },
        {
            user: 'userName',
            name: 'teste',
            id: '11'
        },

    ]
  
    return (
         <View style={styles.detailsContainer}>
             <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80'}}  />
             </View> 

            <View style={styles.infoContainer}>
                <View style={styles.statusContainer}>
                     <Text style={styles.name}>Nome do restaurante</Text>
                     <Text style={styles.status}>Aberto</Text>
                </View>

                <RectButton style={styles.favBtn}>
                    <Text style={styles.favText}>
                        Adicionar aos favoritos {` `}
                        <Ionicon name='ios-heart' size={20} color='red' />
                    </Text>
                </RectButton>
            </View>

            <View style={styles.listContainer}>

                <Text style={styles.listText}>Comentários</Text>
                <ScrollView vertical showsVerticalScrollIndicator={true}>
                     <FlatList scrollEnabled={true} showsHorizontalScrollIndicator={false} style={styles.listElement} data={fakeData} renderItem={({ item }) => 
                     <View style={styles.listItem}>
                         <Text style={styles.user}>{item.user}</Text>
                         <Text style={styles.commentary}>{item.name}</Text>
                     </View>
                 } 
                 keyExtractor={item => item.id}
                />
                </ScrollView>    
            </View>

            <View style={styles.contact}>
                <Text style={styles.contactText}>Contato</Text>
                  
                <View style={styles.iconsView}>
                     <Ionicon name='logo-whatsapp' size={36} color='springgreen' />
                     <Ionicon name='logo-instagram' size={36} color='orangered' />
                     <Ionicon name='logo-facebook' size={36} color='royalblue' />
                </View>              
            </View>
           
        </View>     
    
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },

    imageContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },

    image: {
        width: '89%',
        height: '80%',
        borderRadius: 10
    },

    infoContainer: {
        flex: 1 / 2,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 16,
        flexDirection: 'column'
    },

    statusContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    name: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 24
    },

    status: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        color: 'springgreen'
    },

    favBtn: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        backgroundColor: '#f0f0f5',
        height: 45,
        borderColor: 'red',
    },

    favText: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        color: 'red'
    },

    listContainer: {
        flex: 3 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
    },

    listText: {
        fontSize: 24,
        fontFamily: 'Roboto_500Medium'
    },

    listElement: {
        paddingHorizontal: 20, 
        width: windowWidth, 
    },

    listItem: {
        width: '100%',
        backgroundColor: '#f0f0f5',
        height: 100,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: '#000'
    },

    user: {
        fontSize: 16,
        fontFamily: 'Roboto_500Medium',
        paddingHorizontal: 10,
        color: '#fff'
    },

    commentary: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 12,
        paddingHorizontal: 10,
        color: '#fff'
    },

    recomendation: {
        paddingHorizontal: 10,
        color: 'springgreen'
    },

    contact: {
        flex: 1 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    contactText: {
        marginTop: 8,
        fontFamily: 'Roboto_500Medium',
        fontSize: 16
    },

    iconsView: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        width: '60%',
        marginTop: 10
    }
})