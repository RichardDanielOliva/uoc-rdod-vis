/*
Copyright (c) 2021, company LTD, company INC (company)
company SOFTWARE LICENSE

0. Definitions.

"License" refers the Licence Software Agreement covered by a Master Agreement and/or related Order Forms between
your organisation and company.

"You" refers to the Licensee. The licensee could be a person or a organisation.

"Source Code" refers to any copyrightable work licensed under the License.

1. The Source Code must retain the above Copyright notice, this list of conditions and the following disclaimer.
You may NOT delete, alter or obscure the copyright, trademark, or other proprietary rights notices appearing in
the Source Code.

2. You are free to make modifications to the Source Code in compliance with the License. You are also free to
compile the source after modifying it and using the compiled product obtained thereafter in compliance with the
License.

3. Except if permitted in the License, you may NOT under any circumstance copy, redistribute and/or republish the
source or a work based on it (which includes binary or object code compiled from it) in part or whole.

4. Neither the name of the Copyright holder nor the names of its contributors may be used to endorse or promote
products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE
USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import DataTypes from "./data.types";

export const INITIAL_DATA = require('../../config/data/accidents_data.json');
export const INITIAL_HOME_HOUSE_DATA = require('../../config/data/number_house.json');
 
export const INITIAL_POPULATION_NUMBER_DATA = require('../../config/data/BRNO_POBYT_2021107.json');
export const INITIAL_POPULATION_DATA = require('../../config/data/population.json');

export const setAccidentData = () => async (dispatch, getState) => {
    const populationData = INITIAL_POPULATION_DATA['features'].map(catastralEle => {
        let numberEle = INITIAL_POPULATION_NUMBER_DATA.find(ele => ele['catastral_code'] == catastralEle.properties['KOD'])

        if(numberEle){
            catastralEle.properties.population = numberEle.number;
        }else{
            catastralEle.properties.population = 0;
        }

        return catastralEle;
    })
    dispatch({
        type: DataTypes.SET_DATA,
        payload: {
            data: INITIAL_DATA,
            numberHouseData: INITIAL_HOME_HOUSE_DATA,
            populationData
        }
    })
}

export const setBaseLayer = (event) => async (dispatch, getState) => {
    const state = getState();
    dispatch({
        type: DataTypes.SET_BASE_LAYER,
        payload: null
    })
    dispatch({
        type: DataTypes.SET_ADDITIONAL_LAYER,
        payload: null
    })

    setTimeout(() => {
        dispatch({
            type: DataTypes.SET_BASE_LAYER,
            payload: event.target.value
        })
        dispatch({
            type: DataTypes.SET_ADDITIONAL_LAYER,
            payload: state.data.additionalLayer
        })
    }, 100);
}

export const setContentLayer = (event) => async (dispatch, getState) => {
    dispatch({
        type: DataTypes.SET_CONTENT_LAYER,
        payload: event.target.value
    })
}

export const setAdditionalLayer = (event) => ({
    type: DataTypes.SET_ADDITIONAL_LAYER,
    payload: event.target.value
})


export const handleOnGenderFilterChange = (event) => async (dispatch, getState) => {
    dispatch({
        type: DataTypes.SET_GENDER_FILTERS,
        payload: {
            ...getState().data.genderFilter,
            [event.target.name]: event.target.checked
        }
    })
}

export const handleOnGroupFilterChange = (event) => async (dispatch, getState) => {
    dispatch({
        type: DataTypes.SET_GROUP_FILTERS,
        payload: {
            ...getState().data.ageGroupFilter,
            [event.target.name]: event.target.checked
        }
    })
}

export const handleOnDayOfTheWeekFilterChange = (event) => async (dispatch, getState) => {
    dispatch({
        type: DataTypes.SET_DAY_OF_THE_WEEK_FILTERS,
        payload: {
            ...getState().data.dayOfTheWeekFilter,
            [event.target.name]: event.target.checked
        }
    })
}

export const handleOnConsequenceFilterChange = (event) => async (dispatch, getState) => {
    dispatch({
        type: DataTypes.SET_CONSEQUENCES_FILTERS,
        payload: {
            ...getState().data.consequence,
            [event.target.name]: event.target.checked
        }
    })
}

export const handleOnAlcoholFilterChange = (event) => async (dispatch, getState) => {
    dispatch({
        type: DataTypes.SET_ALCOHOL_FILTERS,
        payload: {
            ...getState().data.alcohol,
            [event.target.name]: event.target.checked
        }
    })
}

export const handleOnStateRidicFilterChange = (event) => async (dispatch, getState) => {
    dispatch({
        type: DataTypes.SET_STATE_RIDIC_FILTERS,
        payload: {
            ...getState().data.stateRidic,
            [event.target.name]: event.target.checked
        }
    })
}

export const handleOnVisibilityFilterChange = (event) => async (dispatch, getState) => {
    dispatch({
        type: DataTypes.SET_VISIBILITY_FILTERS,
        payload: {
            ...getState().data.visibility,
            [event.target.name]: event.target.checked
        }
    })
}

export const handleOnCarriageStatusFilterChange = (event) => async (dispatch, getState) => {
    dispatch({
        type: DataTypes.SET_CARRIAGE_STATUS_FILTERS,
        payload: {
            ...getState().data.carriageStatus,
            [event.target.name]: event.target.checked
        }
    })
}

export const handleOnDateFilterChange = (event, value) => async (dispatch, getState) => {
    dispatch({
        type: DataTypes.SET_DATE_FILTERS,
        payload: value
    })
}

export const handleOnHourFilterChange = (event, value) => async (dispatch, getState) => {
    dispatch({
        type: DataTypes.SET_HOURS_FILTERS,
        payload: value
    })
}