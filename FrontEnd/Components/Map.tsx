"use client";
import L from "leaflet";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  const customIcon = new L.Icon({
    iconUrl: "/leaflet/marker-icon.png", 
    shadowUrl: "/leaflet/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  return (
    <MapContainer
      center={[34.7914549, 48.5136892]}
      zoom={17}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[34.7915191, 48.5129755]} icon={customIcon}>
        <Popup>مرکز اداری الماس  طبقه چهارم  واحد37</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
