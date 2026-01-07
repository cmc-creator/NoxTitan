import React, { useEffect, useState } from 'react';

interface WeatherData {
  temp: number;
  description: string;
  city: string;
}

const dadJokes = [
  "Why did the sun go to school? To get a little brighter!",
  "Cloudy with a chance of... coffee breaks.",
  "Rain or shine, NoxTitan keeps your schedule on track!",
  "If it rains cats and dogs, just hope you don't step in a poodle.",
  "Forecast: 100% chance of business domination."
];

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [joke, setJoke] = useState('');

  useEffect(() => {
    // Demo: Fake weather data. Replace with real API if desired.
    setWeather({ temp: 72, description: 'Sunny', city: 'Your City' });
    setJoke(dadJokes[Math.floor(Math.random() * dadJokes.length)]);
  }, []);

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6 shadow-sm flex items-center gap-4">
      <div>
        <div className="text-2xl font-bold text-blue-600">{weather?.temp}°F</div>
        <div className="text-blue-500 font-semibold">{weather?.description}</div>
        <div className="text-xs text-blue-400">{weather?.city}</div>
      </div>
      <div className="ml-4 text-sm text-blue-700 italic">
        <span role="img" aria-label="weather joke">🌦️</span> {joke}
      </div>
    </div>
  );
}
