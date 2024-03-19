"use client";
import Categories from "@/components/categories/Categories";
import { MapContainer,  TileLayer } from "react-leaflet";
import l from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import makrerShadow from "leaflet/dist/images/marker-shadow.png";

// @ts-ignore
delete l.Icon.Default.prototype._getIconUrl;
l.Icon.Default.mergeOptions ({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: makrerShadow,
});

export default function Home() {
  return (
    <>
      <Categories />
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  );
}
