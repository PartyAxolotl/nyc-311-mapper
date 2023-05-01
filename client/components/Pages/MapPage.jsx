import { useLoadScript, MarkerF, GoogleMap, InfoWindow } from '@react-google-maps/api';
import React, { useMemo, useState, useEffect } from 'react';
// const dotenv = require('dotenv')
// dotenv.config();


function MapPage(props){ 
const [selectedMarker, setSelectedMarker] = useState(null);
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
              zoom={15}
            >
              {selectedMarker && (
                <InfoWindow
                    onCloseClick={() => {
                      setSelectedMarker(null);
                    }}
                    position={selectedMarker}
                >
                  <div>
                  <h3>party time</h3>
                </div>
                </InfoWindow>
              )}
              {/* {markers.map(marker => {
                <MarkerF key='marker.id' position={{ lat: marker.latitude, lng: marker.longitude }}></MarkerF>
              })} */}
              <MarkerF position={{ lat: 40.730610, lng: -73.935242 }} onClick={() => setSelectedMarker({ lat: 40.730610, lng: -73.935242 })} />
            </GoogleMap>
          )}
        </div>
      );
}

export default MapPage;