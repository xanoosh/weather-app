import { ReactNode } from 'react';

interface hourForecastInterface {
  hour?: number;
  cloudBase?: number | null;
  cloudCeiling?: number | null;
  cloudCover?: number | null;
  dewPoint?: number | null;
  evapotranspiration?: number | null;
  freezingRainIntensity?: number | null;
  humidity?: number | null;
  iceAccumulation?: number | null;
  iceAccumulationLwe?: number | null;
  precipitationProbability?: number | null;
  precipitationIntensity?: number | null;
  precipitationType?: number | null;
  pressureSurfaceLevel?: number | null;
  rainAccumulation?: number | null;
  rainAccumulationLwe?: number | null;
  rainIntensity?: number | null;
  sleetAccumulation?: number | null;
  sleetAccumulationLwe?: number | null;
  sleetIntensity?: number | null;
  snowAccumulation?: number | null;
  snowAccumulationLwe?: number | null;
  snowDepth?: number | null;
  snowIntensity?: number | null;
  temperature: number;
  temperatureApparent?: number | null;
  uvHealthConcern?: number | null;
  uvIndex?: number | null;
  visibility?: number | null;
  weatherCode: number;
  windDirection?: number | null;
  windGust?: number | null;
  windSpeed?: number | null;
}

export interface timelinesArrayInterface {
  time: string;
  values: hourForecastInterface;
}
export interface valuesInterface {
  date: string;
  values: Array<hourForecastInterface>;
}

export interface dayForecastTabInterface {
  dayForecast: valuesInterface;
}

export interface hourForecastIconInterface {
  weatherName?: string;
  weatherCode: number;
}
export interface horizontalScrollInterface {
  dayForecast: valuesInterface;
}

export interface hourForecastElementInterface {
  hourForecast: hourForecastInterface;
}

export interface hourForecastDialogInterface {
  hourForecast: hourForecastInterface;
  weatherName: string;
  children: ReactNode;
}

export interface DialogTableInterface {
  hourForecast: hourForecastInterface;
  variant: string;
}

export interface forecastTabsInterface {
  hourlyForecast: Array<timelinesArrayInterface>;
}

export interface temperatureChartInterface {
  chartData: Array<{
    id: string;
    data: Array<{ x: string; y: string }>;
  }>;
  temperaturesArray: Array<number>;
}

export interface compassInterface {
  windDirection?: number | null;
}

export interface autocompleteInterface {
  closeDialog?: () => void;
  location?: {
    text: string;
    parameters?: { latitude: number; longitude: number };
  };
}

export interface loaderInterface {
  size: 'sm' | 'lg';
  color: string;
}

export interface badgeInterface {
  tooltip: string;
  icon: ReactNode;
}

export interface humidityPillInterface {
  percentage: number;
}
