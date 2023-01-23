import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import DemographicFilter from './demographic-filter/demographic-filters.component';
import TimeFilter from './time-filter/time-filter.component';
import ConsequencesFilter from './consequences-filters/consequences-filters.component';
import EnvironmentsFilter from './environments-filters/environments-filters.component';

import {
  CardContainer
} from '../accident-viewer.styles';

const AccidentFilters = ({data}) => {
  return (
    <CardContainer>
        <Accordion defaultActiveKey={[]} alwaysOpen>
          <TimeFilter />
          <DemographicFilter />
          <ConsequencesFilter />
          <EnvironmentsFilter />
        </Accordion>
    </CardContainer>
  );
};


export default AccidentFilters;
