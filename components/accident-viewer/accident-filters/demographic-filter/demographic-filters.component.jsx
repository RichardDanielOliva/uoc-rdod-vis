import React from 'react';
import { connect } from 'react-redux';

import Accordion from 'react-bootstrap/Accordion';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

import { handleOnGenderFilterChange, handleOnGroupFilterChange } from '../../../../redux/data/data.actions';
import { selectDemographicFilters } from '../../../../redux/data/data.selectors';

import { FormContainer } from '../../accident-viewer.styles';

const DemographicFilter = ({
  demographicFilters,
  handleOnGenderFilterChange,
  handleOnGroupFilterChange,
}) => {
  const { genderFilter, ageGroupFilter } = demographicFilters;
  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>Dimensión demográfica</Accordion.Header>
      <Accordion.Body>
        <FormContainer>
          <FormControl
            key={`form-control-gender`}
            sx={{ m: 1, paddingBottom: 1, borderBottom: 1, borderColor: 'divider' }}
            component="fieldset"
            variant="standard">
            <FormLabel key={`form-control-gender-label`} component="legend">Género</FormLabel>
            <FormGroup>
              {
                Object.keys(genderFilter).map(gender => (
                  <FormControlLabel
                    control={
                      <Checkbox checked={genderFilter[gender]} onChange={handleOnGenderFilterChange} name={gender} />
                    }
                    label={gender}
                  />
                ))
              }
              <FormHelperText >
                {`No se filtran valores nulos`}
              </FormHelperText>
            </FormGroup>
          </FormControl>
          <FormControl
            key={`form-control-age-group`}
            sx={{ m: 1 }} component="fieldset" variant="standard">
            <FormLabel key={`form-control-group-age-label`} component="legend">Grupo de edad</FormLabel>
            <FormGroup>
              {
                Object.keys(ageGroupFilter).map(gender => (
                  <FormControlLabel
                    control={
                      <Checkbox checked={ageGroupFilter[gender]} onChange={handleOnGroupFilterChange} name={gender} />
                    }
                    label={gender}
                  />
                ))
              }
              <FormHelperText >
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
  demographicFilters: selectDemographicFilters(state)
});

export const mapDispatchToProps = dispatch => ({
  handleOnGenderFilterChange: (event) => dispatch(handleOnGenderFilterChange(event)),
  handleOnGroupFilterChange: (event) => dispatch(handleOnGroupFilterChange(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DemographicFilter);
