export interface timelinesArrayInterface {
  time: string;
  values: {
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
    temperature?: number | null;
    temperatureApparent?: number | null;
    uvHealthConcern?: number | null;
    uvIndex?: number | null;
    visibility?: number | null;
    weatherCode: number;
    windDirection?: number | null;
    windGust?: number | null;
    windSpeed?: number | null;
  };
}
export interface valuesInterface {
  date: string;
  values: Array<{
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
    temperature?: number | null;
    temperatureApparent?: number | null;
    uvHealthConcern?: number | null;
    uvIndex?: number | null;
    visibility?: number | null;
    weatherCode: number;
    windDirection?: number | null;
    windGust?: number | null;
    windSpeed?: number | null;
  }>;
}

export interface dayForecastCardInterface {
  dayForecast: valuesInterface;
}

export interface hourForecastIconInterface {
  weatherName: string;
  weatherCode: number;
}
export interface horizontalScrollInterface {
  dayForecast: valuesInterface;
}

export interface hourForecastElementInterface {
  hourForecast: {
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
    temperature?: number | null;
    temperatureApparent?: number | null;
    uvHealthConcern?: number | null;
    uvIndex?: number | null;
    visibility?: number | null;
    weatherCode: number;
    windDirection?: number | null;
    windGust?: number | null;
    windSpeed?: number | null;
  };
}

export interface forecastTabsInterface {
  // data: Array<valuesInterface>;
  hourlyForecast: Array<timelinesArrayInterface>;
}

export interface temperatureChartInterface {
  chartData: Array<{
    id: string;
    data: Array<{ x: string; y: string }>;
  }>;
}
