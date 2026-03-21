export interface LocationDataAPI {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

export interface WeatherDataAPI {
  cod: number;
  message?: string;

  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
}

export type LoadingState = 'Loading' | 'Success' | 'Error';
