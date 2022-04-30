import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ForecastState, Coordinates } from 'Forecasts'
import { RootState } from '../../app/store'
import forecastService from './forecastAPI'

const initialState: ForecastState = {
  forecasts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

/**
 * Get the weather forcast for the location specified in the form
 */
export const getForecasts = createAsyncThunk(
  'forecast/getForecasts',
  async (location: Coordinates, thunkAPI) => {
    try {
      return await forecastService.getForecasts(location)
    } catch (error: any) {
      const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getForecasts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getForecasts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.forecasts = action.payload?.locations[0]?.hourly
      })
      .addCase(getForecasts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = `Error: ${action.payload}`
      })
  },
})

export const forecastSelector = (state: RootState) => state.forecast
export default forecastSlice.reducer