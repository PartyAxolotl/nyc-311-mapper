import { useLoadScript, MarkerF, GoogleMap, InfoWindow } from '@react-google-maps/api';
import React, { useMemo, useState, useEffect } from 'react';
// const dotenv = require('dotenv')
// dotenv.config();


function MapPage(props){ 
const [selectedMarker, setSelectedMarker] = useState(null);
const [address, setAddress] = useState('')

console.log(props.partySpots)
// const [markers, setMarkers] = useState([])

// useEffect(() => {
//   async function fetchData(){
//     data = await fetch('/party/mapData', {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })

//     const toJson = await data.json()

//     setMarkers(toJson)
//   }
//   fetchData()
// }, [])

  const handleClick = () => {
    console.log('hi')
  }

  // let residentialMarkers = []
  // let commercialMarkers = []

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