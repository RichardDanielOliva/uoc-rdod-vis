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
          Al seleccionar un accidente dentro del mapa se muestra la información asociada.
        </div>
        <br />
        <div>
          Dentro de la sección de filtros es posible limitar los resultados de acuerdos de diferentes temáticas, permitiendo un análisis temporal, demográfico, de causa/consecuencia o por las condiciones del entorno.
        </div>
        <br />
        <div>
          En el apartado de capas es posible ajustar la representación del mapa, puedo cambiar el fondo o diferencias los accidentes por su contenido. Además, se dispone una serie de capas adicionales para añadir información extra y expandir el análisis..
        </div>
        <br />
        <div>
          Este proyecto corresponde a la PR2 de la asignatura XX de la Universitat Oberta de Catalunya. El la licencias es open source y código del proyecto se encuentra en XX.
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
