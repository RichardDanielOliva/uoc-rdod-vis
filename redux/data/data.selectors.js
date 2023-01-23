import { createSelector } from 'reselect';
import { AVAILABLE_ADDITIONAL_LAYERS, AVAILABLE_CONTENT_LAYERS } from '../../config/constants';
import FilterServices from '../../services/filters-services';

const _selectInitialData = state => state.data.initial;

const _selectGenderFilter = state => state.data.genderFilter;
const _selectAgeGroupFilter = state => state.data.ageGroupFilter;
const _selectDateFilter = state => state.data.dateFilter;
const _selectHoursFilter = state => state.data.hoursFilters;
const _selectDateOfTheWeekFilter = state => state.data.dayOfTheWeekFilter;
const _selectStateRidicFilter = state => state.data.stateRidic;
const _selectAlcoholFilter = state => state.data.alcohol;
const _selectConsequenceFilter = state => state.data.consequence;
const _selectVisibility = state => state.data.visibility;
const _selectCarriageStatus = state => state.data.carriageStatus;
const _selectNumberHouseData = state => state.data.numberHouseData;
const _selectContentLayer = state => state.data.contentLayer;

export const selectDemographicFilters = createSelector(
  [_selectGenderFilter, _selectAgeGroupFilter],
  (genderFilter, ageGroupFilter) => {
    // genders -> me, woman, Boy, Girl -> Checkbox
    // age_group .> 0-6, 7-11, 12-15, 16-18, 19-24, 24-32. 32-44. 45-60, 61-70, 7 and older -> Girl -> Checkbox
    return {
      genderFilter,
      ageGroupFilter
    }
  }
)

export const selectTimeFilters = createSelector(
  [_selectDateFilter, _selectHoursFilter, _selectDateOfTheWeekFilter],
  (dateFilter, hoursFilter, dayOfTheWeekFilter) => {
    // Year -> Range
    // Hour -> Range
    // day_of_the_week -> Chack box
    return {
      dateFilters: { ...FilterServices.getDateOptions(), value: dateFilter },
      hoursFilters: { ...FilterServices.getHoursOptions(), value: hoursFilter },
      dayOfTheWeekFilter
    }
  }
)

export const selectConsequencesFilters = createSelector(
  [_selectConsequenceFilter, _selectAlcoholFilter, _selectStateRidicFilter],
  (consequence, alcohol, stateRidic) => {
    // collision -> Range
    // mark_person -> with helmet, without helmet
    // state_ridic -> Range
    // consequence -> Chack box
    return {
      alcohol,
      consequence,
      stateRidic
    }
  }
)

export const selectEnvironmentConditionsFilters = createSelector(
  [_selectCarriageStatus, _selectVisibility],
  (carriageStatus, visibility) => {
    // carriage_status -> Range
    // Visibility -> Range
    // place_of_happiness -> Chack box
    return {
      carriageStatus,
      visibility
    }
  }
)

export const selectFilterMapData = createSelector(
  [_selectInitialData, selectTimeFilters, selectDemographicFilters, selectConsequencesFilters, selectEnvironmentConditionsFilters],
  (data, timeFilters, demographicFilters, consequencesFilters, environmentFilters) => {
    if (Object.keys(data).length === 0) return []
    const _ = require('lodash');
    data = _.cloneDeep(data);
    
    data = FilterServices.filterByTime(data, timeFilters, demographicFilters, consequencesFilters, environmentFilters);
    return data
  }
)


export const selectNumberHouseData = createSelector(
  [_selectNumberHouseData],
  (numberHouseData) => {
    return numberHouseData
  }
)

export const selectMapData = createSelector(
  [selectFilterMapData, _selectContentLayer],
  (data, contentLayer) => {
    const _ = require('lodash');
    data = _.cloneDeep(data);

    if (contentLayer === AVAILABLE_CONTENT_LAYERS.NONE)
      return data

    if (contentLayer === AVAILABLE_CONTENT_LAYERS.GENERO) {
      return data.map(accident => {
        if (["me", "Boy (up to 15 years)"].includes(accident.genders)) {
          accident.marker = { fillColor: "blue", color: "blue" };
        } else if (["Woman", "girl (up to 15 years)"].includes(accident.genders)) {
          accident.marker = { fillColor: "red", color: "red" };
        } else {
          accident.marker = { fillColor: "grey", color: "grey" };
        }

        return accident
      });
    }

    if (contentLayer === AVAILABLE_CONTENT_LAYERS.CONSEQUENCE) {
      return data.map(accident => {
        if ("Ileso" === accident.consequence)
          accident.marker = { fillColor: "green", color: "green" };
        else if ("Heridas leves" === accident.consequence)
          accident.marker = { fillColor: "yellow", color: "yellow" };
        else if ("Heridas graves" === accident.consequence)
          accident.marker = { fillColor: "orange", color: "orange" };
        else if ("Muerte" === accident.consequence)
          accident.marker = { fillColor: "red", color: "red" };
        else
          accident.marker = { fillColor: "grey", color: "grey" };

        return accident
      });
    }

    if (contentLayer === AVAILABLE_CONTENT_LAYERS.ALCOHOL) {
      return data.map(accident => {
        if (["No", "Not detected"].includes(accident.alcohol))
          accident.marker = { fillColor: "green", color: "green" };
        else if ("Under the influence of drugs" === accident.alcohol)
          accident.marker = { fillColor: "black", color: "black" };
        else if (null === accident.alcohol)
          accident.marker = { fillColor: "grey", color: "grey" };
        else
          accident.marker = { fillColor: "red", color: "red" };


        return accident
      });
    }

    return data
  }
)