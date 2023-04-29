import { useLoadScript, MarkerF, GoogleMap } from '@react-google-maps/api';
import React, { useMemo, useState, useEffect } from 'react';
// const dotenv = require('dotenv')
// dotenv.config();


function MapPage(props){ 
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

              <MarkerF position={{ lat: 40.7505, lng: -73.9934 }}/>
            </GoogleMap>
          )}
        </div>
      );
}

export default MapPage;