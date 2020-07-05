import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import MapView, { Marker } from 'react-native-maps'

import FiIcon from '@expo/vector-icons/Feather'

export const Map = ({ navigation }) => {

    const handleNavigateToDetail = () => {
        navigation.navigate('Detalhes')
    }

    return (
        <View style={styles.mapContainer}>
            <View style={styles.mapHeader}>
                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.nearText}>Estabelecimentos perto de você</Text>
                    <Text style={styles.instruction}>Clique em um estabelecimento no mapa para obter mais detalhes</Text>
                </View>               
            </View>

            <View style={styles.mapView}>
                <MapView
                  initialRegion={{
                    latitude: 45,
                    longitude: -0,
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.014,
                  }} 
                  style={styles.mapElement}
                >
                    <Marker 
                       coordinate={{
                        latitude: 45,
                        longitude: -0,
                      }}
                      onPress={handleNavigateToDetail}
                      style={styles.marker}
                    >
                        <FiIcon name='map-pin' size={22} color='red' />
                    </Marker>
                </MapView>
            </View>

            <View style={styles.results}>
                <Text style={styles.resultsText}>Resultados encontrados: 33</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mapContainer: {
        flex: 1,
        backgroundColor: '#f0f0f5'
    },

    mapHeader: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 24,
        flexDirection: 'row',
        backgroundColor: '#222'
    },

    nearText: {
        fontSize: 24,
        color: '#fff'
    },

    instruction: {
        fontSize: 12,
        marginTop: 10,
        color: '#fff'
    },

    mapView: {
        flex: 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },

    mapElement: {
        height: '100%',
        width: '90%',
    },
    
    marker: {

    },

    results: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    resultsText: {
        fontSize: 24
    }
})

