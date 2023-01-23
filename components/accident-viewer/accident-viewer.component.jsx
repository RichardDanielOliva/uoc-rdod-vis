import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { connect } from 'react-redux';
import AccidentDescription from './accident-description/accident-description.component';
import AccidentFilters from './accident-filters/accident-filters.component';
import AccidentLayers from './accident-layers/accident-layers.component';
import AccidentMap from './accident-map/accident-map.component';

import {
  AccidentViewerContainer,
  CardContentContainer,
  ChartTitle,
  TabsContainer,
  ContentContainer,
  ChartDescription
} from './accident-viewer.styles';


const AccidentViewer = ({ baseLayer, additionalLayer }) => {
  const [value, setValue] = useState('1');

  // https://data.brno.cz/datasets/mestobrno::cyklistick%C3%A9-nehody-bike-accidents/explore?filters=eyJ0YXJnZXRfZmlkIjpbMSwxMzQ3XSwiaWQiOls2MDA4NDg3MzQ5My4zMiw2MDIzNjYyNTQzMi4wN119&location=49.201214%2C16.589433%2C11.44&style=druh_vozidla
  return (
    <AccidentViewerContainer>
      <AccidentMap 
        baseLayer={baseLayer}
        additionalLayer={additionalLayer}
        />
      <CardContentContainer>
        <ChartTitle>Accidentes de ciclismo en Brno</ChartTitle>
        <ChartDescription>
        <div>
          Mapa interactivo con los accidentes de ciclismo ocurridos en la ciudad de Brno, en República Checa.
        </div>
      </ChartDescription>
        <TabsContainer>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList 
                  variant="fullWidth"
                  onChange={(_, newValue) => setValue(newValue)} 
                  centered={true}>
                  <Tab sx={{fontWeight: 550, minHeight: 40 }} label="Descripción" value="1" />
                  <Tab sx={{fontWeight: 550, minHeight: 40 }}  label="Filtros" value="2" />
                  <Tab sx={{fontWeight: 550, minHeight: 40 }}  label="Capas" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <AccidentDescription />
              </TabPanel>
              <TabPanel value="2">
                <ContentContainer>
                  <AccidentFilters />
                </ContentContainer>
              </TabPanel>
              <TabPanel value="3">
                <ContentContainer>
                  <AccidentLayers />
                </ContentContainer>
              </TabPanel>
            </TabContext>
        </TabsContainer>

      </CardContentContainer>
    </AccidentViewerContainer>
  );
};

const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AccidentViewer);
