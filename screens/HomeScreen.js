import React, { useState, useEffect }from 'react';
import { View, Text, StyleSheet, PermissionsAndroid } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default function HomeScreen({navigation}) {
    const customMapStyle = [
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 13
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#144b53"
                },
                {
                    "lightness": 14
                },
                {
                    "weight": 1.4
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#08304b"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#0c4152"
                },
                {
                    "lightness": 5
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#0b434f"
                },
                {
                    "lightness": 25
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#0b3d51"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#146474"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#021019"
                }
            ]
        }
    ]

    const [currentPosition, setCurrentPosition] = useState({
        latitude: 0,
        longitude: 0,
    });

    const [positionHistory, setPositionHistory] = useState([]);

    const [permissionGranted, setPermissionGranted] = useState(false);






    useEffect(() => {
        try {
            const granted = PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                'title': 'Location Permission',
                'message': 'This App needs access to your location ' +
                           'so we can know where you are.'
              }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                setPermissionGranted(granted)
            } else {
                setPermissionGranted(granted)
            }
          } catch (err) {
            console.log(err)
          }
    },[])

    useEffect(() => {
        Geolocation.watchPosition( (info) => {

            let initialCurrentPosition = {
                latitude: parseFloat(info.coords.latitude.toFixed(6)),
                longitude: parseFloat(info.coords.longitude.toFixed(6)),
            }
            setCurrentPosition(initialCurrentPosition)
        }, 
        error => console.log(error.message),
        {enableHighAccuracy: true, timeout: 10000, distanceFilter:1, maximumAge: 0});      
    
    },[])

    return (
        <View style={style.container}>
            <MapView
                showsUserLocation={true}
                style={style.map} 
                provide={PROVIDER_GOOGLE}
                region={{
                    latitude: currentPosition.latitude, 
                    longitude: currentPosition.longitude,
                    latitudeDelta: 0.03,
                    longitudeDelta: 0.035
                }}
                customMapStyle={customMapStyle}
                onUserLocationChange={() => {
                    let posHis = positionHistory;
                    if(posHis.length === 0) {
                        let newPositionHistory  = [...posHis, currentPosition]
                        setPositionHistory(newPositionHistory)
                    }

                    if(posHis.length > 0) {
                        let indexPosHis = posHis.length - 1;
                        if(!(posHis[indexPosHis].latitude === currentPosition.latitude) && !(posHis[indexPosHis].longitude === currentPosition.longitude)){
                            let newPositionHistory  = [...posHis, currentPosition]
                            setPositionHistory(newPositionHistory)
                            console.log(positionHistory.length)
                        }
                    }
                    
                }}
            >
            {/* <Marker coordinate={currentPosition} /> */}
            <Polyline
                coordinates={positionHistory}
                strokeColor="coral" // fallback for when `strokeColors` is not supported by the map-provider
                strokeWidth={6}
	        />
            </MapView>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'coral',
        // alignItems: 'center'
    },
    map: {
        height: '100%',
    }
});