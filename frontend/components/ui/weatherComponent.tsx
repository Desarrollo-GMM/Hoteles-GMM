// components/weather/WeatherComponent.tsx
'use client'
import React from "react";
import { 
  TiWeatherSunny, 
  TiWeatherCloudy, 
  TiWeatherStormy, 
  TiWeatherSnow, 
  TiWeatherDownpour,
  TiWeatherPartlySunny 
} from "react-icons/ti";
import { FaWind, FaTemperatureHigh } from "react-icons/fa";
import { useWeather } from "@/lib/hooks/useWeather";

export type WeatherComponentVariant = 'compact' | 'medium' | 'detailed';

interface WeatherComponentProps {
  city?: string;
  variant?: WeatherComponentVariant;
  showCitySelector?: boolean;
  className?: string;
}

const WeatherComponent: React.FC<WeatherComponentProps> = ({ 
  city = "Tulum",
  variant = 'compact',
  showCitySelector = false,
  className = ""
}) => {
  const { weather, loading, error, selectedCity, handleCityChange, getWeatherIcon, hotelLocations } = useWeather(city);
  
  const getIconComponent = (iconName: string) => {
    switch(iconName) {
      case 'sunny': return <TiWeatherSunny />;
      case 'cloudy': return <TiWeatherCloudy />;
      case 'stormy': return <TiWeatherStormy />;
      case 'snow': return <TiWeatherSnow />;
      case 'downpour': return <TiWeatherDownpour />;
      case 'partly-sunny': return <TiWeatherPartlySunny />;
      default: return <TiWeatherSunny />;
    }
  };

  // Loading states por variant
  if (loading) {
    switch(variant) {
      case 'compact':
        return (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-black/30 rounded-full"></div>
            <div className="h-6 w-16 bg-black/30 rounded"></div>
          </div>
        );
      case 'medium':
        return (
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 ">
            <div className="h-6 w-32 bg-white/20 rounded mb-3"></div>
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-white/20 rounded-full"></div>
              <div className="h-10 w-24 bg-white/20 rounded"></div>
            </div>
            <div className="h-4 w-full bg-white/20 rounded"></div>
          </div>
        );
      case 'detailed':
        return (
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 ">
            <div className="h-7 w-40 bg-white/20 rounded mb-4"></div>
            <div className="flex items-center justify-between mb-6">
              <div className="h-16 w-16 bg-white/20 rounded-full"></div>
              <div className="h-14 w-32 bg-white/20 rounded"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-6 w-full bg-white/20 rounded"></div>
              <div className="h-6 w-full bg-white/20 rounded"></div>
            </div>
          </div>
        );
    }
  }

  if (!weather) return null;
  
  const weatherInfo = getWeatherIcon(weather.weathercode);

  // Renderizado por variant
  switch(variant) {
    case 'compact':
      return (
        <div className={`flex items-center justify-center gap-2 mx-auto bg-black/50 backdrop-blur-sm px-2 py-2 rounded-xl ${className}`}>
          <div className={`text-3xl ${weatherInfo.color}`}>
            {getIconComponent(weatherInfo.icon)}
          </div>
          <div className="text-white">
            <div className="font-bold text-lg">{Math.round(weather.temperature)}°C</div>
          </div>
        </div>
      );

    case 'medium':
      return (
        <div className={`bg-black/40 backdrop-blur-sm rounded-xl p-4  ${className}`}>
          {showCitySelector && (
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-white font-bold text-lg">Clima Actual</h3>
              <select 
                value={selectedCity}
                onChange={(e) => handleCityChange(e.target.value)}
                className="text-sm bg-white/20 text-white  rounded-lg px-2 py-1 focus:outline-none"
              >
                {hotelLocations.map((hotel) => (
                  <option key={hotel.value} value={hotel.name}>
                    {hotel.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          
          <div className="flex items-center justify-between mb-4">
            <div className={`text-4xl ${weatherInfo.color}`}>
              {getIconComponent(weatherInfo.icon)}
            </div>
            <div className="text-right">
              <div className="text-white text-3xl font-bold">{Math.round(weather.temperature)}°C</div>
              <div className="text-white/80 text-sm">{weatherInfo.label}</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <FaWind className="opacity-70" />
              <span>Viento: {Math.round(weather.windspeed)} km/h</span>
            </div>
            <div className="flex items-center gap-2">
              <FaTemperatureHigh className="opacity-70" />
              <span>Sensación: {Math.round(weather.temperature)}°C</span>
            </div>
          </div>
        </div>
      );

    case 'detailed':
      return (
        <div className={`bg-black/40 backdrop-blur-sm rounded-xl p-6 ${className}`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-white font-bold text-xl">Pronóstico del Clima</h3>
            {showCitySelector && (
              <select 
                value={selectedCity}
                onChange={(e) => handleCityChange(e.target.value)}
                className="text-sm bg-black/20 text-white rounded-xl px-3 py-2 focus:outline-none"
              >
                {hotelLocations.map((hotel) => (
                  <option key={hotel.value} value={hotel.name} className="bg-black/40 backdrop-blur-sm text-black">
                    {hotel.name}
                  </option>
                ))}
              </select>
            )}
          </div>
          
          <div className="flex items-center justify-between mb-8">
            <div className={`text-5xl ${weatherInfo.color}`}>
              {getIconComponent(weatherInfo.icon)}
            </div>
            <div className="text-right">
              <div className="text-white text-4xl font-bold mb-1">{Math.round(weather.temperature)}°C</div>
              <div className="text-white/80 text-lg">{weatherInfo.label}</div>
              <div className="text-white/60 text-sm mt-1">
                {new Date(weather.time).toLocaleDateString('es-MX', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long'
                })}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-white/80">
            <div className="flex flex-col items-center p-3 bg-white/10 rounded-lg">
              <FaWind className="text-xl mb-2 opacity-70" />
              <span className="text-sm">Viento</span>
              <span className="font-bold">{Math.round(weather.windspeed)} km/h</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-white/10 rounded-lg">
              <FaTemperatureHigh className="text-xl mb-2 opacity-70" />
              <span className="text-sm">Sensación</span>
              <span className="font-bold">{Math.round(weather.temperature)}°C</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-white/10 rounded-lg">
              <div className="text-xl mb-2 opacity-70">↗</div>
              <span className="text-sm">Dirección</span>
              <span className="font-bold">{weather.winddirection}°</span>
            </div>
          </div>
          
          {error && (
            <div className="mt-4 text-sm text-red-300">
              <p>{error}</p>
            </div>
          )}
        </div>
      );
  }
};

export default WeatherComponent;