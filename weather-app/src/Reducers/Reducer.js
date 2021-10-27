import { ADD_WEATHER,UPDATE_404_PAGE_STATUE ,ADD_FORECAST, UPDATE_RESULT_STATUS } from "../Actions/Action";
const initilState = {
    weather: [],
    foreCast: [],
    foundResult: false,
    page404Status:false
}
export const WeatherData = (state = initilState, actions) => {
    if (actions.type === ADD_WEATHER) {
        return {
            ...state,
            weather: actions.responce,

        }
    }
    else if (actions.type === ADD_FORECAST) {
        return {
            ...state,
            foreCast: actions.responce,
        }
    }
    else if (actions.type === UPDATE_RESULT_STATUS) {
        return {
            ...state,
            foundResult: actions.Status,

        }
    }
    else if (actions.type === UPDATE_404_PAGE_STATUE) {
        return {
            ...state,
            page404Status: actions.Status,

        }
    }

    return state;
}