import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { connect } from 'react-redux';

import { handleOnDateFilterChange, handleOnDayOfTheWeekFilterChange, handleOnHourFilterChange } from '../../../../redux/data/data.actions';
import { selectTimeFilters } from '../../../../redux/data/data.selectors';

import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

import {
  FormContainer,
  CustomSlider
} from '../../accident-viewer.styles';


const TimeFilter = ({ timeFilters, handleOnDateFilterChange, handleOnHourFilterChange, handleOnDayOfTheWeekFilterChange }) => {
  const { dateFilters, hoursFilters, dayOfTheWeekFilter } = timeFilters;
  return (
    <Accordion.Item eventKey="1">
      <Accordion.Header>Dimensión temporal </Accordion.Header>
      <Accordion.Body>
        <FormContainer>
          <FormControl
            key={`form-control-date`}
            sx={{ m: 1, paddingBottom: 1, borderBottom: 1, borderColor: 'divider' }}
            component="fieldset"
            variant="standard">
            <FormLabel key={`form-control-date-label`} component="legend">Fecha:</FormLabel>
            <CustomSlider
              key={`form-control-date-slider`}
              getAriaLabel={() => 'Fecha'}
              min={1}
              max={144}
              value={dateFilters.value}
              step={1}
              marks={dateFilters.options}
              onChange={handleOnDateFilterChange}
              track={false}
            />
            <FormHelperText id="track-date-slider" >
              {`Desde ${dateFilters.labels[dateFilters.value[0]]} hasta ${dateFilters.labels[dateFilters.value[1]]}`}
            </FormHelperText>

          </FormControl>

          <FormControl
            key={`form-control-hour`}
            sx={{ m: 1, paddingBottom: 1, borderBottom: 1, borderColor: 'divider' }}
            component="fieldset" variant="standard">
            <FormLabel key={`form-control-hour-label`} component="legend">Hora del dia:</FormLabel>
            <CustomSlider
              key={`form-control-hour-slider`}
              getAriaLabel={() => 'Hora del día'}
              min={0}
              max={23}
              value={hoursFilters.value}
              step={1}
              marks={hoursFilters.options}
              onChange={handleOnHourFilterChange}
              track={false}
            />
            <FormHelperText id="track-hour-slider" >
              {`Desde las ${hoursFilters.labels[hoursFilters.value[0]]} hasta las ${hoursFilters.labels[hoursFilters.value[1]]}`}
            </FormHelperText>

          </FormControl>

          <FormControl
            key={`form-control-day-of-week`}
            sx={{ m: 1 }}
            component="fieldset" variant="standard">
            <FormLabel component="legend">Día de la semana:</FormLabel>
            <FormGroup>
              {
                Object.keys(dayOfTheWeekFilter).map(gender => (
                  <FormControlLabel
                    control={
                      <Checkbox checked={dayOfTheWeekFilter[gender]} onChange={handleOnDayOfTheWeekFilterChange} name={gender} />
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
  timeFilters: selectTimeFilters(state)
});

export const mapDispatchToProps = dispatch => ({
  handleOnDateFilterChange: (event, value) => dispatch(handleOnDateFilterChange(event, value)),
  handleOnHourFilterChange: (event, value) => dispatch(handleOnHourFilterChange(event, value)),
  handleOnDayOfTheWeekFilterChange: (event) => dispatch(handleOnDayOfTheWeekFilterChange(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeFilter);
