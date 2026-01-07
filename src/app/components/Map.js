
"use client";
import { useEffect, useState } from "react";

export default function Map() {
  const [LeafletMap, setLeafletMap] = useState(null);

  useEffect(() => {
    // Dynamically import react-leaflet and leaflet only on client
    Promise.all([
      import("react-leaflet"),
      import("leaflet"),
      import("leaflet/dist/leaflet.css")
    ]).then(([reactLeaflet, L]) => {
      const locationIcon = L.default.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      setLeafletMap(() => () => {
        const { MapContainer, TileLayer, Marker, Popup } = reactLeaflet;
        return (
          <div style={{ height: '400px', width: '100%' }}>
            <MapContainer center={[-33.9121, 151.1036]} zoom={17} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-33.9121, 151.1036]} icon={locationIcon}>
                <Popup>
                  Unit 4, 88 Beamish St Campsie, NSW 2194, Australia<br />Logic Miners Office
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        );
      });
    });
  }, []);

  return LeafletMap ? <LeafletMap /> : <div style={{ height: '400px', width: '100%' }}>Loading map...</div>;
}
