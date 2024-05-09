
import { Popup } from 'leaflet';
import { Marker } from 'leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
const Map = () => {
    const position = [21.426567, 91.973169]

    return (
        <div className="w-full">
            {/* <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer> */}

        </div>
    )
}

export default Map;