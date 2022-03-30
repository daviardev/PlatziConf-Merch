import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
    const mapStyles = {
        height: "50vh",
        width: "100%",
    }

    const defaultCenter = {
        lat: 10.9645252, 
        lng: -74.7961524
    }
    return (
        <LoadScript googleMapsApiKey='AIzaSyCJUarBIbynUqhR5xuDFqkC0tsHRAJSzTY'>
            <GoogleMap 
                mapContainerStyle = {mapStyles}
                zoom = {9}
                center = {defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;