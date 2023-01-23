import React from 'react';
import { AVAILABLE_ADDITIONAL_LAYERS, AVAILABLE_CONTENT_LAYERS } from '../../config/constants';

import {
  CustomLegendContainer,
  CustomLegendItemContainer,
  CustomLegendGroupContainer,
  CustomLegendLabelContainer,
  CustomLegendGroupTitleContainer,
  CustomPopUpTitle,
  AccidentIcon
} from './custom-map.styles';


const ContentLegendItem = ({ contentLayer }) => {
  switch (contentLayer) {
    case AVAILABLE_CONTENT_LAYERS.NONE:
      return (
        <CustomLegendGroupContainer key={`legend-group-${AVAILABLE_CONTENT_LAYERS.NONE}`}>
          <CustomLegendItemContainer key={`legend-item-${AVAILABLE_CONTENT_LAYERS.NONE}`}>
            <AccidentIcon color={'#ff9900'} />
            <CustomLegendLabelContainer>
              Accidente
            </CustomLegendLabelContainer>
          </CustomLegendItemContainer>
        </CustomLegendGroupContainer>
      )
    case AVAILABLE_CONTENT_LAYERS.GENERO:
      return (
        <CustomLegendGroupContainer key={`legend-item-${AVAILABLE_CONTENT_LAYERS.GENERO}`}>
          <CustomLegendItemContainer>
            <AccidentIcon color={'blue'} />
            <CustomLegendLabelContainer>
              {'Hombre'}
            </CustomLegendLabelContainer>
          </CustomLegendItemContainer>
          <CustomLegendItemContainer>
            <AccidentIcon color={'red'} />
            <CustomLegendLabelContainer>
              {'Mujer'}
            </CustomLegendLabelContainer>
          </CustomLegendItemContainer>
          <CustomLegendItemContainer>
            <AccidentIcon color={'grey'} />
            <CustomLegendLabelContainer>
              {'Sin identificar'}
            </CustomLegendLabelContainer>
          </CustomLegendItemContainer>
        </CustomLegendGroupContainer>
      )
    case AVAILABLE_CONTENT_LAYERS.CONSEQUENCE:
      return (
        <CustomLegendGroupContainer key={`legend-item-${AVAILABLE_CONTENT_LAYERS.CONSEQUENCE}`}>
          <CustomLegendItemContainer>
            <AccidentIcon color={'green'} />
            <CustomLegendLabelContainer>
              {'Ileso'}
            </CustomLegendLabelContainer>
          </CustomLegendItemContainer>
          <CustomLegendItemContainer>
            <AccidentIcon color={'yellow'} />
            <CustomLegendLabelContainer>
              {'Heridas leves'}
            </CustomLegendLabelContainer>
          </CustomLegendItemContainer>
          <CustomLegendItemContainer>
            <AccidentIcon color={'orange'} />
            <CustomLegendLabelContainer>
              {'Heridas graves'}
            </CustomLegendLabelContainer>
          </CustomLegendItemContainer>
          <CustomLegendItemContainer>
            <AccidentIcon color={'red'} />
            <CustomLegendLabelContainer>
              {'Muerte'}
            </CustomLegendLabelContainer>
          </CustomLegendItemContainer>
          <CustomLegendItemContainer>
            <AccidentIcon color={'grey'} />
            <CustomLegendLabelContainer>
              {'Sin identificar'}
            </CustomLegendLabelContainer>
          </CustomLegendItemContainer>
        </CustomLegendGroupContainer>
      )
    case AVAILABLE_CONTENT_LAYERS.ALCOHOL:
      return (
        <CustomLegendGroupContainer key={`legend-item-${AVAILABLE_CONTENT_LAYERS.ALCOHOL}`}>
          <CustomLegendItemContainer>
            <AccidentIcon color={'green'} />
            <CustomLegendLabelContainer>
              {'No'}
            </CustomLegendLabelContainer>
          </CustomLegendItemContainer>
          <CustomLegendItemContainer>
            <AccidentIcon color={'red'} />
            <CustomLegendLabelContainer>
              {'Si'}
            </CustomLegendLabelContainer>
          </CustomLegendItemContainer>
          <CustomLegendItemContainer>
            <AccidentIcon color={'black'} />
            <CustomLegendLabelContainer>
              {'Drogas'}
            </CustomLegendLabelContainer>
          </CustomLegendItemContainer>
        </CustomLegendGroupContainer>
      )
    default:
      return (<></>)
  }
}

const AddItionalLegendItem = ({ additionalLayer }) => {
  switch (additionalLayer) {
    case AVAILABLE_ADDITIONAL_LAYERS.NONE:
      return (<></>)
    case AVAILABLE_ADDITIONAL_LAYERS.DENSIDAD_POBLACIONAL:
      return (
        <CustomLegendGroupContainer key={`legend-group-${AVAILABLE_CONTENT_LAYERS.NONE}`}>
          <CustomLegendGroupTitleContainer>
            Densidad:
          </CustomLegendGroupTitleContainer>
          <CustomLegendItemContainer key={`legend-item-${AVAILABLE_CONTENT_LAYERS.NONE}-500`}>
            <AccidentIcon color={'#fcff9d'} />
            <CustomLegendLabelContainer>
              {'0 - 500 Hab.'}
            </CustomLegendLabelContainer>
          </CustomLegendItemContainer>
          <CustomLegendItemContainer key={`legend-item-${AVAILABLE_CONTENT_LAYERS.NONE}-100`}>
            <AccidentIcon color={'#f0df7d'} />
            <CustomLegendLabelContainer>
              {'501 - 1000 Hab.'}
            </CustomLegendLabelContainer>
          </CustomLegendItemContainer>
          <CustomLegendItemContainer key={`legend-item-${AVAILABLE_CONTENT_LAYERS.NONE}-2000`}>
            <AccidentIcon color={'#eac048'} />
            <CustomLegendLabelContainer>
              {'1001 - 2000 Hab.'}
            </CustomLegendLabelContainer>
          </CustomLegendItemContainer>
          <CustomLegendItemContainer key={`legend-item-${AVAILABLE_CONTENT_LAYERS.NONE}-5000`}>
            <AccidentIcon color={'#cf6b29'} />
            <CustomLegendLabelContainer>
              {'2001 - 5000 Hab.'}
            </CustomLegendLabelContainer>
          </CustomLegendItemContainer>
          <CustomLegendItemContainer key={`legend-item-${AVAILABLE_CONTENT_LAYERS.NONE}-1000`}>
            <AccidentIcon color={'#a82224'} />
            <CustomLegendLabelContainer>
              {'5001 - 10000 Hab.'}
            </CustomLegendLabelContainer>
          </CustomLegendItemContainer>
          <CustomLegendItemContainer key={`legend-item-${AVAILABLE_CONTENT_LAYERS.NONE}-1001`}>
            <AccidentIcon color={'#5d0004'} />
            <CustomLegendLabelContainer>
              {'> 1000 Hab.'}
            </CustomLegendLabelContainer>
          </CustomLegendItemContainer>
        </CustomLegendGroupContainer>
      )
    default:
      return (<></>)
  }
}


const CustomLegend = ({ additionalLayer, contentLayer }) => {
  return (
    <CustomLegendContainer className={'leaflet-top leaflet-right'}>
      <CustomPopUpTitle>Legenda:</CustomPopUpTitle>
      <ContentLegendItem contentLayer={contentLayer} />
      <AddItionalLegendItem additionalLayer={additionalLayer} />
    </CustomLegendContainer>

  );
};

export default CustomLegend;
