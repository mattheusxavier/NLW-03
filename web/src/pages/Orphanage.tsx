import React from "react";

import { FiClock} from 'react-icons/fi';
import { Map, Marker, TileLayer } from "react-leaflet";

import Sidebar from '../components/Sidebar';
import mapIcon from "../utils/mapIcon";

import '../styles/pages/orphanage.css';

export default function Orphanage() {
  
    return (
        <div id="page-orphanage">
            <Sidebar />

            <main>
                <div className="orphanage-details">
                    <img src="https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg" alt="Lar das Meninas"/>

                    <div className="images">
                        <button type="button" className="active">
                            <img src="https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg" alt="Lar das Meninas"/>
                        </button>
                        <button type="button">
                            <img src="https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg" alt="Lar das Meninas"/>
                        </button>
                        <button type="button">
                            <img src="https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg" alt="Lar das Meninas"/>
                        </button>
                        <button type="button">
                            <img src="https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg" alt="Lar das Meninas"/>
                        </button>
                        <button type="button">
                            <img src="https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg" alt="Lar das Meninas"/>
                        </button>
                        <button type="button">
                            <img src="https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg" alt="Lar das Meninas"/>
                        </button>
                    </div>

                    <div className="orphanage-details-content">
                        <h1>Lar das meninas</h1>
                        <p>Presta assistência a crianças de 06 a 15 anos que se encntre em situação de risco e/ou vulnerabilidade</p>

                        <div className="map-container">
                            <Map
                                interactive={false}
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
                                <Marker interactive={false} icon={mapIcon} position={[-20.3754105,-40.4210675]} ></Marker>
                            </Map>

                            <footer>
                                <a href="">
                                    Ver rotas no Google Maps
                                </a>
                            </footer>
                        </div>

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

                        {/*<button type="button" className="contact-button">
                            <FaWhatsapp size={20} color="#FFF" />
                            Entrar em contato
                        </button>*/}

                    </div>
                </div>
            </main>
        </div>
    )
}