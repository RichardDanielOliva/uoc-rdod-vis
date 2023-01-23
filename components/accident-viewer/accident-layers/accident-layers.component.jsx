import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import BaseLayers from './base-layers/base-layers.component';
import ContentLayers from './content-layers/content-layers.component';
import AdditionalLayers from './additional-layers/additional-layers.component';

import {
  CardContainer,
} from '../accident-viewer.styles';


const AccidentLayers = () => {
  return (
    <CardContainer>
      <Accordion defaultActiveKey={[]} alwaysOpen>
        <BaseLayers />
        <ContentLayers />
        <AdditionalLayers />
      </Accordion>
    </CardContainer>
  );
};

export default AccidentLayers;
