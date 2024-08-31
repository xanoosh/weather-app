import { timelinesArrayInterface, valuesInterface } from '../interfaces';

export const getDailyForecastArray = (
  timelinesArray: Array<timelinesArrayInterface>
) => {
  const dailyForcastArray: Array<valuesInterface> = [];

  timelinesArray.forEach((el, i) => {
    if (i > 0) {
      if (
        el.time.split('T')[0] ===
        dailyForcastArray[dailyForcastArray.length - 1].date.split('T')[0]
      ) {
        dailyForcastArray[dailyForcastArray.length - 1].values.push(el.values);
      } else {
        dailyForcastArray.push({ date: el.time, values: [el.values] });
      }
    } else {
      dailyForcastArray.push({ date: el.time, values: [el.values] });
    }
  });
  // console.log(dailyForcastArray);
  return dailyForcastArray;
};
