import { useState, useEffect } from "react";

interface WeatherData {
  temperature: number;
  weathercode: number;
  windspeed: number;
  winddirection: number;
  is_day: number;
  time: string;
}

interface HotelLocation {
  name: string;
  lat: number;
  lon: number;
  value: string;
}

export const hotelLocations: HotelLocation[] = [
  { name: "Tulum", lat: 20.211, lon: -87.465, value: "Tulum" },
  { name: "Tulum Aeropuerto", lat: 20.232, lon: -87.430, value: "Tulum Aeropuerto" },
  { name: "Chichen Itzá", lat: 20.683, lon: -88.568, value: "Chichen Itzá" },
  { name: "Palenque", lat: 17.483, lon: -92.046, value: "Palenque" },
  { name: "Calakmul", lat: 18.104, lon: -89.810, value: "Calakmul" },
  { name: "Edzná", lat: 19.596, lon: -90.229, value: "Edzná" },
  { name: "Nuevo Uxmal", lat: 20.359, lon: -89.771, value: "Nuevo Uxmal" }
];

export const weatherConditions = {
  0: { label: "Despejado", icon: "sunny", color: "text-yellow-400" },
  1: { label: "Mayormente despejado", icon: "sunny", color: "text-yellow-300" },
  2: { label: "Parcialmente nublado", icon: "partly-sunny", color: "text-blue-300" },
  3: { label: "Nublado", icon: "cloudy", color: "text-gray-400" },
  45: { label: "Niebla", icon: "cloudy", color: "text-gray-300" },
  48: { label: "Niebla escarchada", icon: "snow", color: "text-blue-200" },
  51: { label: "Llovizna ligera", icon: "downpour", color: "text-blue-400" },
  53: { label: "Llovizna moderada", icon: "downpour", color: "text-blue-500" },
  55: { label: "Llovizna intensa", icon: "downpour", color: "text-blue-600" },
  61: { label: "Lluvia ligera", icon: "downpour", color: "text-blue-500" },
  63: { label: "Lluvia moderada", icon: "downpour", color: "text-blue-600" },
  65: { label: "Lluvia intensa", icon: "downpour", color: "text-blue-700" },
  71: { label: "Nieve ligera", icon: "snow", color: "text-blue-200" },
  73: { label: "Nieve moderada", icon: "snow", color: "text-blue-300" },
  75: { label: "Nieve intensa", icon: "snow", color: "text-blue-400" },
  80: { label: "Chubascos ligeros", icon: "downpour", color: "text-blue-500" },
  81: { label: "Chubascos moderados", icon: "downpour", color: "text-blue-600" },
  82: { label: "Chubascos violentos", icon: "stormy", color: "text-purple-600" },
  95: { label: "Tormenta eléctrica", icon: "stormy", color: "text-purple-700" },
  96: { label: "Tormenta con granizo ligero", icon: "stormy", color: "text-purple-800" },
  99: { label: "Tormenta con granizo intenso", icon: "stormy", color: "text-purple-900" },
};

export const useWeather = (initialCity: string = "Tulum") => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState(initialCity);

  const fetchWeather = async (lat: number, lon: number) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`
      );
      
      if (!response.ok) throw new Error("Error al cargar el clima");
      
      const data = await response.json();
      setWeather(data.current_weather);
    } catch (err) {
      console.error("Error fetching weather:", err);
      setError("No se pudo cargar la información del clima");
      setWeather({
        temperature: 28,
        weathercode: 0,
        windspeed: 12,
        winddirection: 180,
        is_day: 1,
        time: new Date().toISOString()
      });
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (weathercode: number) => {
    return weatherConditions[weathercode as keyof typeof weatherConditions] || weatherConditions[0];
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    const selectedHotel = hotelLocations.find(hotel => hotel.name === city);
    if (selectedHotel) {
      fetchWeather(selectedHotel.lat, selectedHotel.lon);
    }
  };

  useEffect(() => {
    const selectedHotel = hotelLocations.find(hotel => hotel.name === selectedCity);
    if (selectedHotel) {
      fetchWeather(selectedHotel.lat, selectedHotel.lon);
    }
  }, []);

  return {
    weather,
    loading,
    error,
    selectedCity,
    setSelectedCity,
    handleCityChange,
    getWeatherIcon,
    hotelLocations
  };
};