import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { connect } from 'react-redux';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import { setAdditionalLayer } from '../../../../redux/data/data.actions';

import { FormContainer } from '../../accident-viewer.styles';
import { AVAILABLE_ADDITIONAL_LAYERS } from '../../../../config/constants';

const AdditionalLayers = ({
  additionalLayer,
  setAdditionalLayer,
}) => {

  return (
    <Accordion.Item eventKey="2">
      <Accordion.Header>Capas Adiccionales </Accordion.Header>
      <Accordion.Body>
      <FormContainer>
        <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={additionalLayer}
            onChange={setAdditionalLayer}
          >
            {
              Object.values(AVAILABLE_ADDITIONAL_LAYERS).map(baseLayerOption => (
                <FormControlLabel value={baseLayerOption} control={<Radio />} label={baseLayerOption} />
              ))
            }
          </RadioGroup>
        </FormControl>
      </FormContainer>
    </Accordion.Body>
      </Accordion.Item >
  );
};

const mapStateToProps = state => ({
  additionalLayer: state.data.additionalLayer
});

export const mapDispatchToProps = dispatch => ({
  setAdditionalLayer: (event) => dispatch(setAdditionalLayer(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalLayers);
