import React from 'react';
import { connect } from 'react-redux';

import {
  CardContainer,
  ChartTitle,
  ChartDescription
} from '../accident-viewer.styles';

const AccidentDescription = ({ data }) => {
  return (
    <CardContainer>
      <ChartDescription>
        <div>
          Al seleccionar un accidente se muestra la información asociada.
        </div>
        <div>
          Dentro de la sección de filtros es posible limitar los resultados de acuerdos de diferentes temáticas.
        </div>
        <div>
          En el apartado de capas es posible ajustar la representación del mapa, puedo cambiar el fondo, diferenciar los accidentes por su contenido o añadir capas adicionales para expandir el análisis.
        </div>
        <div>
        La información acerca de los accidentes proviene del siguiente <a target="_blank" href='https://data.europa.eu/data/datasets/https-kod-brno-cz-nkod-dataset-fa9235bbface40f6965be985f0f073ac_0-ttl?locale=es'>dataset</a>. 
        La densidad poblacional se calcula en base a la <a target="_blank" href='https://datahub.brno.cz/datasets/p%C5%99%C3%ADtomn%C3%A9-obyvatelstvo-dle-dat-mobiln%C3%ADho-oper%C3%A1tora-number-of-people-based-of-mobile-phone-usage'>estimación del número de persona de acuerdo con el uso del móvil</a> para el día 2021/11/07 a las 17:00-17:59. 
        Los datos del <a target="_blank" href='https://datahub.brno.cz/maps/po%C4%8Det-osob-na-adresn%C3%ADch-m%C3%ADstech-number-of-people-living-at-the-adresses'>número de personas por dirección de residencia</a> se utilizan para generar un heatmap.
        </div>
        <div>
          Este proyecto corresponde a la PR2 de la asignatura 22.531 Visualización de datos de la Universitat Oberta de Catalunya (UOC). La licencia es open source y código del proyecto se encuentra en <a target="_blank" href='https://github.com/RichardDanielOliva/uoc-rdod-vis'>Github</a>.
        </div>
      </ChartDescription>
    </CardContainer>
  );
};

const mapStateToProps = state => ({
  data: state
});

export const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AccidentDescription);
