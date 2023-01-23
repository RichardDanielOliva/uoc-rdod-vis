import { AVAILABLE_ADDITIONAL_LAYERS, AVAILABLE_BASE_LAYERS, AVAILABLE_CONTENT_LAYERS } from "./constants";

export const INITIAL_STATES = {
    data: {
      initial: {},
      numberHouseData: [],
      populationData: [],
      baseLayer: AVAILABLE_BASE_LAYERS.STAMEN_TONER_LITE,
      contentLayer: AVAILABLE_CONTENT_LAYERS.NONE,
      additionalLayer: AVAILABLE_ADDITIONAL_LAYERS.NONE,
      // Demographic filter
      genderFilter: {
        Hombre: true,
        Mujer: true
      },
      ageGroupFilter: {
        "0-6": true,
        "7-11": true,
        "12-15": true,
        "16-18": true,
        "19-24": true,
        "24-32": true,
        "33-44": true,
        "45-60": true,
        "61-70": true,
        "71 o más": true
      },
      dateFilter: [1, 144],
      hoursFilters: [0, 23],
      dayOfTheWeekFilter: {
        Lunes: true,
        Martes: true,
        Miercoles: true,
        Jueves: true,
        Viernes: true,
        Sabado: true,
        Domingo: true,
      },
      stateRidic: {
        "good - no adverse circumstances were found": true,
        "under the influence of alcohol blood alcohol content of 1‰ or more": true,
        "under the influence of alcohol, blood alcohol content up to 0,99 ‰": true,
        "under the influence of drugs, narcotics": true,
        "the driver died while driving (heart attack, etc.": true,
        "other unfavourable sta": true
      },
      alcohol: {
        "no": true,
        "yes": true,
        "drogas": true,
      },
      consequence: {
        "Ileso": true,
        "Heridas leves": true,
        "Heridas graves": true,
        "Muerte": true,
      },
      carriageStatus: {
        "Superficie seca, no contaminada": true,
        "Superficie seca pero sucia (arena, polvo, hojas, grava, etc.)": true,
        "Superficie mojada": true,
        "Aceite, gasóleo, etc. derramados en la carretera.": true,
        "Capa de nieve continua, nieve suelta": true
      },
      visibility: {
        "Durante el día, la visibilidad no se ve afectada por las condiciones meteorológicas": true,
        "Durante el día, visibilidad reducida (amanecer, atardecer)": true,
        "Durante el día, visibilidad reducida debido a las condiciones meteorológicas (niebla, nieve, lluvia, etc.)": true,
        "De noche - con alumbrado público, la visibilidad no se ve afectada por las condiciones meteorológicas": true,
        "De noche - sin alumbrado público, la visibilidad no se ve afectada por las condiciones meteorológicas": true,
        "De noche - con alumbrado público, visibilidad reducida debido a las condiciones meteorológicas (niebla, lluvia, nieve, etc.)": true,

      }
    }
  };
  