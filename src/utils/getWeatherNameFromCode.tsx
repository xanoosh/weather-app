export const getWeatherNameFromCode = (code: number | null | undefined) => {
  switch (code) {
    case null:
      return 'clear';
    case undefined:
      return 'clear';
    case 1000:
      return 'clear';

    //cloudy weather options, intensity low to high
    case 1100:
      return 'cloudy';
    case 1101:
      return 'cloudy';
    case 1102:
      return 'cloudy';
    case 1001:
      return 'cloudy';
    case 1003:
      return 'cloudy';

    // fog weather options, intensity low to high
    case 2100:
      return 'fog';
    case 2000:
      return 'fog';

    // fog + clouds options, intensity low to high
    case 2102:
      return 'fog';
    case 2103:
      return 'fog';
    case 2107:
      return 'fog';
    case 2108:
      return 'fog';

    // fog + clear
    case 2106:
      return 'fog';

    //rain options, intensity low to high
    case 4000:
      return 'rain';
    case 4200:
      return 'rain';
    case 4001:
      return 'rain';
    case 4201:
      return 'rain';

    //continue writing at code 4213, website:
    //https://docs.tomorrow.io/reference/data-layers-weather-codes

    default:
      return 'clear';
  }
};
