import React from 'react';
import { connect } from 'react-redux';

import Accordion from 'react-bootstrap/Accordion';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';


import { handleOnCarriageStatusFilterChange, handleOnVisibilityFilterChange } from '../../../../redux/data/data.actions';
import { selectEnvironmentConditionsFilters } from '../../../../redux/data/data.selectors';

import { FormContainer } from '../../accident-viewer.styles';

const EnvironmentsFilter = ({
  environmentConditionsFilters,
  handleOnCarriageStatusFilterChange,
  handleOnVisibilityFilterChange,
}) => {
  const { carriageStatus, visibility } = environmentConditionsFilters;
  return (
    <Accordion.Item eventKey="3">
      <Accordion.Header>Condiciones del entorno</Accordion.Header>
      <Accordion.Body>
        <FormContainer>
          <FormControl
            key={`form-control-carriage-status`}
            sx={{ m: 1, paddingBottom: 1, borderBottom: 1, borderColor: 'divider' }}
            component="fieldset" variant="standard">
            <FormLabel key={`form-control-carriage-status-label`} component="legend">Estado de la via</FormLabel>
            <FormGroup>
              {
                Object.keys(carriageStatus).map(gender => (
                  <FormControlLabel
                    control={
                      <Checkbox checked={carriageStatus[gender]} onChange={handleOnCarriageStatusFilterChange} name={gender} />
                    }
                    label={gender}
                  />
                ))
              }
            </FormGroup>
          </FormControl>
          <FormControl
            key={`form-control-visibility`}
            sx={{ m: 1 }} component="fieldset" variant="standard">
            <FormLabel key={`form-control-visibility-label`} component="legend">Visibilidad</FormLabel>
            <FormGroup>
              {
                Object.keys(visibility).map(gender => (
                  <FormControlLabel
                    control={
                      <Checkbox checked={visibility[gender]} onChange={handleOnVisibilityFilterChange} name={gender} />
                    }
                    label={gender}
                  />
                ))
              }
            </FormGroup>
          </FormControl>
        </FormContainer>
      </Accordion.Body>
    </Accordion.Item>
  );
};

const mapStateToProps = state => ({
  environmentConditionsFilters: selectEnvironmentConditionsFilters(state)
});

export const mapDispatchToProps = dispatch => ({
  handleOnCarriageStatusFilterChange: (event) => dispatch(handleOnCarriageStatusFilterChange(event)),
  handleOnVisibilityFilterChange: (event) => dispatch(handleOnVisibilityFilterChange(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnvironmentsFilter);
