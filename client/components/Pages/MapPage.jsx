import { useLoadScript, MarkerF, GoogleMap, InfoWindow } from '@react-google-maps/api';
import React, { useMemo, useState, useEffect } from 'react';
// const dotenv = require('dotenv')
// dotenv.config();


function MapPage(props){ 
const [selectedMarker, setSelectedMarker] = useState(null);
const [address, setAddress] = useState('')

console.log(props.partySpots)

  const markers = props.partySpots.map((marker, id) => {
    
    const latitude = Number(marker.latitude);
    const longitude = Number(marker.longitude);

    if(marker.complaintType === "Noise - Residential"){
    return <MarkerF position={{ lat: latitude, lng: longitude }} icon={                             
      "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    }
    onClick={() => {
      setAddress(marker.incidentAddress)
      setSelectedMarker({ lat: latitude, lng: longitude })} 
    }/>
  } else {
    return <MarkerF position={{ lat: latitude, lng: longitude }} icon={                             
      "http://maps.google.com/mapfiles/ms/icons/red-dot.png"}
    onClick={() => {
      setAddress(marker.incidentAddress)
      setSelectedMarker({ lat: latitude, lng: longitude })} 
    }/>
  }
  })

// if(props.partySpots.complaintType === "Noise - Residential"){
//     residentialMarkers = props.partySpots.map((marker, id) => {
    
//     const latitude = Number(marker.latitude);
//     const longitude = Number(marker.longitude);

//     return <MarkerF position={{ lat: latitude, lng: longitude }} icon={                             
//       url= "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
//     }
//     onClick={() => {
//       setAddress(marker.incidentAddress)
//       setSelectedMarker({ lat: latitude, lng: longitude })} 
//     }/>
//   })
// } else {
//     commercialMarkers = props.partySpots.map((marker) => {
//     const latitude = Number(marker.latitude);
//     const longitude = Number(marker.longitude);
//     return <MarkerF position={{ lat: latitude, lng: longitude }} onClick={() => {
//       setAddress(marker.incidentAddress)
//       setSelectedMarker({ lat: latitude, lng: longitude })} 
//     }/>
//   })
// }

// console.log('residential markers', commercialMarkers)

// const markers = residentialMarkers.concat(commercialMarkers)

  



    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_API_KEY
        ,
      });
      const center = useMemo(() => ({ lat: 40.730610, lng: -73.935242 }), []);
    
      return (
        <div className="App">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={11}
              options={{
              styles: [
                { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
                {
                  featureType: "administrative.locality",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#d59563" }],
                },
                {
                  featureType: "poi",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#d59563" }],
                },
                {
                  featureType: "poi.park",
                  elementType: "geometry",
                  stylers: [{ color: "#263c3f" }],
                },
                {
                  featureType: "poi.park",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#6b9a76" }],
                },
                {
                  featureType: "road",
                  elementType: "geometry",
                  stylers: [{ color: "#38414e" }],
                },
                {
                  featureType: "road",
                  elementType: "geometry.stroke",
                  stylers: [{ color: "#212a37" }],
                },
                {
                  featureType: "road",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#9ca5b3" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry",
                  stylers: [{ color: "#746855" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry.stroke",
                  stylers: [{ color: "#1f2835" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#f3d19c" }],
                },
                {
                  featureType: "transit",
                  elementType: "geometry",
                  stylers: [{ color: "#2f3948" }],
                },
                {
                  featureType: "transit.station",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#d59563" }],
                },
                {
                  featureType: "water",
                  elementType: "geometry",
                  stylers: [{ color: "#17263c" }],
                },
                {
                  featureType: "water",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#515c6d" }],
                },
                {
                  featureType: "water",
                  elementType: "labels.text.stroke",
                  stylers: [{ color: "#17263c" }],
                },
              ],
            }}
            >
              {selectedMarker && (
                <InfoWindow
                    onCloseClick={() => {
                      setSelectedMarker(null);
                    }}
                    position={selectedMarker}
                >
                  <div>
                  <h3>{address}</h3>
                </div>
                </InfoWindow>
              )}
              {markers}
            </GoogleMap>
          )}
        </div>
      );
}

export default MapPage;