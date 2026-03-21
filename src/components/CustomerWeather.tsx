import { Box, CircularProgress, Skeleton, Typography } from '@mui/material';
import axios from 'axios';
import type { LoadingState, LocationDataAPI, WeatherDataAPI } from '../types/api';
import { useEffect, useState } from 'react';

interface Props {
  city: string;
}

function calculateCelsius(tempK: number) {
  return (tempK - 273).toFixed(1);
}

export function CustomerWeather({ city }: Props) {
  const [weatherData, setWeatherData] = useState<WeatherDataAPI | null>(null);
  const [weatherLoadingState, setWeatherLoadingState] = useState<LoadingState>('Loading');
  const [weatherError, setWeatherError] = useState<string | null>(null);

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  async function fetchWeatherData() {
    setWeatherData(null);
    setWeatherLoadingState('Loading');
    setWeatherError(null);

    try {
      const locationData = (
        await axios.get<LocationDataAPI[]>(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${import.meta.env.VITE_API_KEY}`
        )
      ).data;

      if (locationData.length == 0) {
        setWeatherLoadingState('Error');
        setWeatherError("Location for the customer's city not found!");
        return;
      }

      const weatherData = (
        await axios.get<WeatherDataAPI>(
          `https://api.openweathermap.org/data/2.5/weather?appid=${import.meta.env.VITE_API_KEY}&lat=${locationData[0].lat}&lon=${locationData[0].lon}`
        )
      ).data;

      setWeatherData(weatherData);
      setWeatherLoadingState('Success');
      setWeatherError(null);
    } catch (error) {
      setWeatherData(null);
      setWeatherLoadingState('Error');
      setWeatherError('Failed to load weather details!');
    }
  }

  return (
    <Box>
      {weatherLoadingState == 'Loading' && <Skeleton variant="text" width={100} sx={{ fontSize: '0.875rem' }} />}
      {weatherError && <Typography color="error">{weatherError}</Typography>}
      {weatherData && (
        <Typography variant="subtitle2">Temperature: {calculateCelsius(weatherData.main.temp)} &deg;C</Typography>
      )}
    </Box>
  );
}
