import React from 'react';
import { connect } from 'react-redux';

import Accordion from 'react-bootstrap/Accordion';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';


import { handleOnConsequenceFilterChange, handleOnAlcoholFilterChange } from '../../../../redux/data/data.actions';
import { selectConsequencesFilters } from '../../../../redux/data/data.selectors';

import { FormContainer } from '../../accident-viewer.styles';

const ConsequencesFilter = ({
  consequenceFilters,
  handleOnConsequenceFilterChange,
  handleOnAlcoholFilterChange,
}) => {
  const { consequence, alcohol } = consequenceFilters;
  return (
    <Accordion.Item eventKey="2">
      <Accordion.Header>Causa / Consecuencia</Accordion.Header>
      <Accordion.Body>
        <FormContainer>
          <FormControl
            key={`form-control-consequence`}
            sx={{ m: 1, paddingBottom: 1, borderBottom: 1, borderColor: 'divider' }}
            component="fieldset" variant="standard">
            <FormLabel key={`form-control-consequence-label`} component="legend">Consecuencia</FormLabel>
            <FormGroup>
              {
                Object.keys(consequence).map(gender => (
                  <FormControlLabel
                    control={
                      <Checkbox checked={consequence[gender]} onChange={handleOnConsequenceFilterChange} name={gender} />
                    }
                    label={gender}
                  />
                ))
              }
              <FormHelperText key={`form-control-consequence-helper-text`}>
                {`No se filtran valores nulos`}
              </FormHelperText>
            </FormGroup>
          </FormControl>
          <FormControl
            key={`form-control-alcohol`}
            sx={{ m: 1 }} component="fieldset" variant="standard">
            <FormLabel key={`form-control-alcohol-label`} component="legend">Uso de alcohol</FormLabel>
            <FormGroup>
              {
                Object.keys(alcohol).map(gender => (
                  <FormControlLabel
                    control={
                      <Checkbox checked={alcohol[gender]} onChange={handleOnAlcoholFilterChange} name={gender} />
                    }
                    label={gender}
                  />
                ))
              }
              <FormHelperText key={`form-control-alcohol-helper-text`}>
                {`No se filtran valores nulos`}
              </FormHelperText>
            </FormGroup>
          </FormControl>
        </FormContainer>
      </Accordion.Body>
    </Accordion.Item>
  );
};

const mapStateToProps = state => ({
  consequenceFilters: selectConsequencesFilters(state)
});

export const mapDispatchToProps = dispatch => ({
  handleOnConsequenceFilterChange: (event) => dispatch(handleOnConsequenceFilterChange(event)),
  handleOnAlcoholFilterChange: (event) => dispatch(handleOnAlcoholFilterChange(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConsequencesFilter);
