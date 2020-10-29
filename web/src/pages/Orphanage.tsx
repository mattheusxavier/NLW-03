import React from "react";
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo, FiArrowLeft} from 'react-icons/fi';
import { Map, Marker, TileLayer } from "react-leaflet";
import { useHistory } from 'react-router-dom';
import L from 'leaflet';

import logoMarker from '../images/mapMarker.svg';

import '../styles/pages/orphanage.css';
import OrphanagesMap from "./OrphanagesMap";

const happyMapIcon = L.icon({
    iconUrl: logoMarker,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60],
})

export default function Orphanage() {
    const { goBack } = useHistory();

    return (
        <div className="page-orphanage">
            <aside>
                <img src={logoMarker} alt="Happy"/>

                <footer>
                    <button type="button" onClick={goBack}>
                        <FiArrowLeft size={24} color="#FFF"/>
                    </button>
                </footer>
            </aside>

            <main>
                <div className="orphanage-details">
                    <img src="" alt="Lar das Meninas"/>

                    <div className="images">
                        <button type="button" className="active">
                            <img src="" alt="Lar das Meninas"/>
                        </button>
                        <button type="button">
                            <img src="" alt="Lar das Meninas"/>
                        </button>
                        <button type="button">
                            <img src="" alt="Lar das Meninas"/>
                        </button>
                        <button type="button">
                            <img src="" alt="Lar das Meninas"/>
                        </button>
                        <button type="button">
                            <img src="" alt="Lar das Meninas"/>
                        </button>
                        <button type="button">
                            <img src="" alt="Lar das Meninas"/>
                        </button>
                    </div>

                    <div className="orphanage-details-content">
                        <h1>Lar das meninas</h1>
                        <p>Presta assistência a crianças de 06 a 15 anos que se encntre em situação de risco e/ou vulnerabilidade</p>
                    </div>

                    <div className="map-container">
                        <Map
                            center={[-20.3754105,-40.4210675]}
                            zoom={16}
                            style={{ width: '100%', height: 280}}
                            dragging={false}
                            touchZoom={false}
                            zoomControl={false}
                            scrollWheelZoom={false}
                            doubleClickZoom={false}
                        >
                            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                            <Marker interactive={false} icon={happyMapIcon} position={[-20.3754105,-40.4210675]} ></Marker>
                        </Map>

                        <footer>
                            <a href="">
                                Ver rotas no Google Maps
                            </a>
                        </footer>

                        <hr/>

                        <h2>Instruções para visita</h2>
                        <p>Venha como se sentir mais à vontade e traga muito amor para dar.</p>

                        <div className="open-details">
                            <div className="hour">
                                <FiClock size={32} color="#15B6D6"/>
                                Segunda à Sexta <br/>
                                8h às 18h
                            </div>
                            <div className="open-on-weekends">
                                <FiClock size={32} color="#39CC83"/>
                                Atendemos <br/>
                                fim de semana
                            </div>
                        </div>

                        <button type="button" className="contact-button">
                            <FaWhatsapp size={20} color="#FFF" />
                            Entrar eem contato
                        </button>

                    </div>
                </div>
            </main>
        </div>
    )
}