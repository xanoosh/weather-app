import { weatherCodes } from '../globals/weatherCodes';

interface weatherCodesInterface {
  [key: string]: string;
}
export const getWeatherNameFromCode = (code: number | null | undefined) => {
  if (!code) return 'Mixed conditions';
  const weatherCodesObject: weatherCodesInterface = weatherCodes;

  return weatherCodesObject[`${code}` as keyof typeof weatherCodesObject];
};
