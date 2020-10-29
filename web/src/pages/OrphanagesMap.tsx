import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import logoMarker from '../images/logoMarker.svg';
import { FiPlus, FiArrowRight} from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import Leaflet from 'leaflet';

const mapIcon = Leaflet.icon({
    iconUrl: logoMarker,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
})

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={logo} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Espirito Santo</strong>
                    <span>Viana</span>
                </footer>
            </aside>

            <Map
                center={[-20.3754105,-40.4210675]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {/*<TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/lidht-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />*/}
                <Marker 
                    icon={mapIcon}
                    position={[-20.3754105,-40.4210675]}
                > 
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar das meninas
                        <Link to="/#">
                            <FiArrowRight size={20} color="#FFF" />
                        </Link>
                    </Popup>
                </Marker>

            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"></FiPlus>
            </Link>
        </div>
    )
}

export default OrphanagesMap