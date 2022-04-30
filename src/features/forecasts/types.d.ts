
declare module 'Forecasts' {
    export type Coordinates = {
      latitude: number;
      longitude: number;
    };

    export type Forecast = {
      id: string;
      title: string;
      content: string;
      time: number;
      time_iso: Date;
      local_time_iso: Date;
      temperature: number;
      relative_humidity: number;
      heat_index: number;
      radar_reflectivity: number;
      visibility: number;
      wind_gust: number;
      wind_speed: number;
      rain_flag: boolean;
      snow_flag: boolean;
      sleet_flag: boolean;
      freezing_rain_flag: boolean;
      total_precipitation: number;
      rainfall_rate: number;
      snowfall_rate: number;
      liquid_snowfall_rate: number;
      rain_accumulation: number;
      snow_accumulation: number;
      freezingRainAccumulation: number;
    };

    export type ForecastState = {
      forecasts: Forecast[],
      isError: boolean,
      isSuccess: boolean,
      isLoading: boolean,
      message: String;
    };
  }