import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { connect } from 'react-redux';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import { setContentLayer } from '../../../../redux/data/data.actions';

import { FormContainer } from '../../accident-viewer.styles';
import { AVAILABLE_CONTENT_LAYERS } from '../../../../config/constants';

const ContentLayers = ({
  contentLayer,
  setContentLayer,
}) => {

  return (
    <Accordion.Item eventKey="3">
      <Accordion.Header>Capas de Contenido </Accordion.Header>
      <Accordion.Body>
        <FormContainer>
          <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={contentLayer}
              onChange={setContentLayer}
            >
              {
                Object.values(AVAILABLE_CONTENT_LAYERS).map(contentLayerOption => (
                  <FormControlLabel value={contentLayerOption} control={<Radio />} label={contentLayerOption} />
                ))
              }
            </RadioGroup>
          </FormControl>
        </FormContainer>
      </Accordion.Body>
    </Accordion.Item>
  );
};

const mapStateToProps = state => ({
  contentLayer: state.data.contentLayer
});

export const mapDispatchToProps = dispatch => ({
  setContentLayer: (event) => dispatch(setContentLayer(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentLayers);
