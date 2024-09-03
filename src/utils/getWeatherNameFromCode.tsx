import { weatherCodes } from '../globals/weatherCodes';

interface weatherCodesInterface {
  [key: string]: string;
}
export const getWeatherNameFromCode = (code: number | null | undefined) => {
  //no code means mixed conditions
  if (!code) return 'Unknown';
  const weatherCodesObject: weatherCodesInterface = weatherCodes;

  return weatherCodesObject[`${code}` as keyof typeof weatherCodesObject];
};
