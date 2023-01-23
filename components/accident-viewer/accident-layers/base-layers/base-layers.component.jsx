import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { connect } from 'react-redux';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import { setBaseLayer } from '../../../../redux/data/data.actions';

import { FormContainer } from '../../accident-viewer.styles';
import { AVAILABLE_BASE_LAYERS } from '../../../../config/constants';

const BaseLayers = ({
  baseLayer,
  setBaseLayer,
}) => {

  return (
    <Accordion.Item eventKey="1">
      <Accordion.Header>Capas base </Accordion.Header>
      <Accordion.Body>
        <FormContainer>
          <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={baseLayer}
              onChange={setBaseLayer}
            >
              {
                Object.values(AVAILABLE_BASE_LAYERS).map(baseLayerOption => (
                  <FormControlLabel value={baseLayerOption} control={<Radio />} label={baseLayerOption} />
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
  baseLayer: state.data.baseLayer
});

export const mapDispatchToProps = dispatch => ({
  setBaseLayer: (event) => dispatch(setBaseLayer(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayers);
