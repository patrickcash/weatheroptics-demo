import axios from 'axios'
import { Coordinates } from 'Forecasts';

/**
 * Call the WeatherOptics API to get the forecasts for the specified location
 * API Doc: https://api.weatheroptics.co/
 * 
 * @param location Latitude and longitude coordinates for the specified location
 * @returns forecast data
 */
const getForecasts = async (location: Coordinates) => {
  const config = {
    params: {
      token: process.env.REACT_APP_WEATHEROPTICS_API_KEY,
      latitude: location.latitude,
      longitude: location.longitude
    }  
  }
  const response = await axios.get(`${process.env.REACT_APP_WEATHEROPTICS_API_URL}`, config)
  
  return response.data
}

const forecastAPI = {
  getForecasts
}
  
export default forecastAPI