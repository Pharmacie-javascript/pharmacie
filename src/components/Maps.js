import React from "react";
import GoogleMapReact from "google-map-react";

const Maps = () => {
    const location = {
        center: {
            lat: 40.4680413,
            lng: -3.6892357,
        },
        zoom: 17,
    };

    const Marker = ({ text }) => <div>{text}</div>;

    return (
        <div className="map-container">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
                defaultCenter={location.center}
                defaultZoom={location.zoom}
            >
                <Marker lat={location.center.lat} lng={location.center.lng} text="Pharmacie" />
            </GoogleMapReact>
        </div>
    );
};

export default Maps;
