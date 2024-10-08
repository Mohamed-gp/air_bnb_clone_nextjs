"use client";

import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// @ts-ignore
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

interface MapProps {
  latlng: [number,number];
}

const Map = ({ latlng }: MapProps) => {
  console.log(latlng)
  return (
    <>
      {latlng && (
        <MapContainer
          center={latlng}
          doubleClickZoom={false}
          zoom={3}
          scrollWheelZoom={false}
          className="cursor-pointer"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={latlng}></Marker>
        </MapContainer>
      )}
    </>
  );
};

export default Map;
