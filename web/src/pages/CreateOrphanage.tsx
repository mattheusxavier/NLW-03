import React from 'react';

import { Map, Marker, TileLayer } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';

import Sidebar from '../components/Sidebar';
import mapIcon from '../utils/mapIcon';

import '../styles/pages/create-orphanage.css';

export default function orphanageMap(){

    return (
        <div id="page-create-orphanage">
            <Sidebar/>

            <main>
                <form className="create-orphanage-form">
                    <fieldset>
                        <legend>Dados</legend>

                        <Map
                            center={[-20.3754105,-40.4210675]}
                            style={{ width: '100%', height: 200}}
                            zoom={15}
                        >
                            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                            <Marker interactive={false} icon={mapIcon} position={[ -20.3754105,-40.4210675 ]} />

                        </Map>

                        <div className="input-block">
                            <label htmlFor="name">Nome</label>
                            <input id="name"/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
                            <textarea id="name" maxLength={300} />
                        </div>

                        <div className="input-block">
                            <label htmlFor="images">Fotos</label>

                            <div className="uploaded-image"></div>

                            <button className="new-image">
                                <FiPlus size={24} color="#15B6D6"/>
                            </button>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Visitação</legend>

                        <div className="input-block">
                            <label htmlFor="opening-hours">Instruções</label>
                            <textarea id="instructions" />
                        </div>

                        <div className="input-block">
                            <label htmlFor="opening_hours">Name</label>
                            <input id="opening_hours"/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="open_on_weekends">Atende fim de semana</label>

                            <div className="button-select">
                                <button type="button" className="active">Sim</button>
                                <button type="button">Não</button>
                            </div>
                        </div>
                    </fieldset>

                    <button className="confirm-button" type="submit">
                        confirmar
                    </button>
                </form>
            </main>
        </div>
    )
}