'use client';
import { MapContainer, Popup, TileLayer } from 'react-leaflet'
import L, { Marker as LeafletMarker, icon } from "leaflet";
import { Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { Locale } from '@/config/i18n.config';
import locationIcon from '../../../../public/icons/marker-icon.png'

LeafletMarker.prototype.options.icon = icon({
  iconUrl: '../../../../public/icons/marker-icon.png',
  iconRetinaUrl: '../../../../public/icons/marker-icon.png',
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  shadowUrl: '../../../../public/icons/marker-icon.png',
  shadowRetinaUrl: '../../../../public/icons/marker-icon.png',
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
})
const center: [number, number] = [35.77850293084265, 51.42559769089241]
const markers: [number, number][] = [center, [48.2, 16.37], [48.1987, 16.3685]]

export default function Map({ lang }: { lang: Locale }) {
  return (
    <MapContainer center={[35.77850293084265, 51.42559769089241]} zoom={20} scrollWheelZoom={true} style={{height: 350, width: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        {markers.map((position, index) => (
    <Marker key={index} position={position} />
  ))}
      {/* <Marker
        icon={customMarkerIcon}
        position={[35.77850293084265, 51.42559769089241]}>
        <Popup>
          {lang === 'fa' ? ' آژانس تبلیغاتی نماآگهی محیط' : 'Nam Agahi advertising agency'}
        </Popup>
      </Marker> */}
    </MapContainer>
  )
}
