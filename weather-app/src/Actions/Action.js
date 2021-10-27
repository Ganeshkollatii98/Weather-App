


export const ADD_WEATHER="ADD_WEATHER"
export const ADD_FORECAST="ADD_FORECAST"
export const UPDATE_RESULT_STATUS="UPDATE_RESULT_STATUS"
export const UPDATE_404_PAGE_STATUE="UPDATE_404_PAGE_STATUE"

export const insertWeather=(data)=>{
  const {responce}=data;
    return {
        type:ADD_WEATHER,
        responce
      
      }
}
export const insertForecast=(data)=>{
  
    return {
        type:ADD_FORECAST,
        data
      
      }
}
export const changeResultStatus=(resultStatus)=>{
  
  return {
      type:UPDATE_RESULT_STATUS,
      Status:resultStatus
    
    }
}
export const change404PageStatus=(pageStatus)=>{
  return {
      type:UPDATE_404_PAGE_STATUE,
      Status:pageStatus
    
    }
}
