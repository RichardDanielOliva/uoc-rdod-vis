import React from 'react';
import { Pane, MapContainer, GeoJSON, Circle, TileLayer } from 'react-leaflet';
import { HeatmapLayer } from 'react-leaflet-heatmap-layer-v3'
import { AVAILABLE_ADDITIONAL_LAYERS, AVAILABLE_BASE_LAYERS } from '../../config/constants';
import CustomLegend from './custom-legend.component';
//import EventCard from '../events-preview/preview-card/preview-card.component';

import {
    PropertiesMapContainer,
} from './custom-map.styles';
import CustomPopUp from './custom-popup.component';


const BaseLayer = ({ baseLayer }) => {
    switch (baseLayer) {
        case AVAILABLE_BASE_LAYERS.STAMEN_TONER_LITE:
            return (<TileLayer
                url='https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}'
                attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                ext='png'
            />)
        case AVAILABLE_BASE_LAYERS.STAMEN_TERRAIN:
            return (<TileLayer
                url='https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}'
                attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                ext='png'
            />)

        case AVAILABLE_BASE_LAYERS.CARTODB_LIGHT_ALL:
            return (<TileLayer
                url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                ext='png'
            />)
        case AVAILABLE_BASE_LAYERS.ESRI_WORLD_IMAGERY:
            return (<TileLayer
                url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            />)
        case AVAILABLE_BASE_LAYERS.STADIA_SMOOTH_DARK:
            return (<TileLayer
                url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            />)
        default:
            return (<></>)
    }
}

const AdditionalLayer = ({ additionalLayer, populationData, numberHouseData }) => {
    switch (additionalLayer) {
        case AVAILABLE_ADDITIONAL_LAYERS.NONE:
            return (<></>)
        case AVAILABLE_ADDITIONAL_LAYERS.CICLOVIAS:
            return (<TileLayer
                url='https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png'
                attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://waymarkedtrails.org">waymarkedtrails.org</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
            />)
        case AVAILABLE_ADDITIONAL_LAYERS.DENSIDAD_POBLACIONAL:
            // https://mestobrno.maps.arcgis.com/apps/instant/minimalist/index.html?appid=9842138472524cd18d67ef43eecf4453
            return (
                <>
                    {
                        populationData.map((popEle, index) => (
                            < GeoJSON
                                data={[popEle]}
                                style={(ele) => {
                                    let commonProps = {
                                        opacity: 0,
                                        fillOpacity: 0.6,
                                        zIndex: -1
                                    }
                                    if (ele.properties.population <= 500)
                                        return { color: "#fcff9d", ...commonProps };
                                    else if (ele.properties.population <= 1000)
                                        return { color: "#f0df7d", ...commonProps };
                                    else if (ele.properties.population <= 2000)
                                        return { color: "#eac048", ...commonProps };
                                    else if (ele.properties.population <= 5000)
                                        return { color: "#cf6b29", ...commonProps };
                                    else if (ele.properties.population <= 10000)
                                        return { color: "#a82224", ...commonProps };
                                    else {
                                        return { color: "#5d0004" };
                                    }

                                }}
                            >
                                <CustomPopUp
                                    key={`popup-${index}-${popEle.properties['id']}`}
                                    attributesToDisplay={['KOD', 'NAZEV', 'population']}
                                    attributesLabels={['Código del territorio', 'Nombre del municipio', 'Num. de habitantes']}
                                    attributes={popEle.properties} />
                            </GeoJSON>
                        ))
                    }
                </>
            )
        case AVAILABLE_ADDITIONAL_LAYERS.LIVING_ADDRESS:
            /// https://datahub.brno.cz/datasets/p%C5%99%C3%ADtomn%C3%A9-obyvatelstvo-dle-dat-mobiln%C3%ADho-oper%C3%A1tora-number-of-people-based-of-mobile-phone-usage/about
            return (<HeatmapLayer
                points={numberHouseData}
                maxZoom={20}
                blur={20}
                longitudeExtractor={(m) => m['X']}
                latitudeExtractor={(m) => m['Y']}
                intensityExtractor={(m) => m['number_house']}
                radius={10}
                min={100}
                max={50000}
                AggregateType='mean'
                minOpacity={1}
                onStatsUpdate={() => ({ min: 10, max: 100 })}
                scaleRadius={false}
            />)

        default:
            return (<></>)
    }
}


const CustomMap = ({ latitude, logitude, contentLayer, baseLayer, additionalLayer, zoom = 12, populationData = [], numberHouseData = [], data = [] }) => {
    let position = [latitude, logitude]
    return (<PropertiesMapContainer>
        <MapContainer center={position} zoom={zoom} style={{ width: '100%', height: '100%' }}>
            <CustomLegend additionalLayer={additionalLayer} contentLayer={contentLayer} />
            <BaseLayer baseLayer={baseLayer} />
            <AdditionalLayer additionalLayer={additionalLayer} populationData={populationData} numberHouseData={numberHouseData} />
            <Pane name="accidentLayer" style={{ zIndex: 500 }}>
                {data
                    .map(({ point_y, point_x, marker = { fillColor: "#ff9900", color: "#ff9900" }, ...props }, index) => {

                        return (
                            <Circle
                                //icon={<WeatherIcon />}
                                center={[point_y, point_x]}
                                radius={60}

                                {...marker}
                                key={`market-${index}-${contentLayer}-${props.id}`}>

                                <CustomPopUp

                                    key={`popup-${index}-${contentLayer}-${props.id}`}
                                    attributes={props} />
                            </Circle>
                        )
                    })}
            </Pane>
        </MapContainer>
    </PropertiesMapContainer>)
};

export default CustomMap;