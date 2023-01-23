

export default class FilterServices {
  static getDateOptions = () => {
    let options = []
    let labels = {}
    let valuesByLabels = {}
    let max=1;
    for (let year = 2009; year < 2021; year++) {
      if(year % 2 === 0)
        options.push(
          {
            value: max,
            label: `${year}`
          }
        )
      for (let month = 1; month < 13; month++) {
        labels[max] = `${month}/${year}`
        valuesByLabels[`${month}/${year}`] = max;
        max++;
      }
    }
    return {
      options,
      labels,
      valuesByLabels
    }
  }

  static getHoursOptions = () => {
    let options = []
    let labels = {}
    for (let hour = 0; hour < 24; hour++) {
      if(hour % 2 === 0)
        options.push(
          {
            value: hour,
            label: `${hour}`
          }
        )
        labels[hour] = hour
    }
    return {
      options,
      labels
    }
  }

  static filterByTime = (data, timeFilters, demographicFilters, consequencesFilters, environmentFilters) => {
    // TIME FILTERS
    const { dateFilters, hoursFilters, dayOfTheWeekFilter } = timeFilters;
    const { valuesByLabels, value: dateValue } = dateFilters;
    const { value: hourValue } = hoursFilters;

    // DEMOGRAPHIC FILTERS
    const { genderFilter, ageGroupFilter } = demographicFilters;

    // CONSEQUENCES FILTERS
    const { alcohol, consequence, stateRidic } = consequencesFilters;

    // ENVIRONMENT FILTERS
    const { carriageStatus, visibility } = environmentFilters;

    return data.filter(accident => {
      // TIME FILTERS
      if(valuesByLabels[`${accident.month}/${accident.year}`] < dateValue[0] || 
        valuesByLabels[`${accident.month}/${accident.year}`] >  dateValue[1])
        return false;
      
      if(accident.Hour < hourValue[0] || accident.Hour > hourValue[1] )
        return false;
      
      if(!dayOfTheWeekFilter[accident.day_of_the_week])
        return false;

      // DEMOGRAPHIC FILTERS
      if((!genderFilter.Hombre && ["me", "Boy (up to 15 years)"].includes(accident.genders)) ||
        !genderFilter.Mujer && ["Woman", "girl (up to 15 years)"].includes(accident.genders))
        return false

      if(!ageGroupFilter[accident.age_group] &&  accident.age_group !== null )
        return false;

      // CONSEQUENCES FILTERS
      if((!alcohol.no && ["No", "Not detected"].includes(accident.alcohol)) ||
        !alcohol.yes && accident.alcohol.startsWith("Yes")||
        !alcohol.drogas && ["Under the influence of drugs"].includes(accident.alcohol)
        )
        return false


      if(!stateRidic[accident.state_ridic] &&  accident.age_group !== null)
        return false;

      if(!consequence[accident.consequence]&&  accident.consequence !== null)
        return false;

      // ENVIRONMENT FILTERS
      if(!carriageStatus[accident.carriage_status])
        return false;

      if(!visibility[accident.Visibility])
        return false;

      return true;
    })
  }
}
