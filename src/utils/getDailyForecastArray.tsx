import { timelinesArrayInterface, valuesInterface } from '../interfaces';

export const getDailyForecastArray = (
  timelinesArray: Array<timelinesArrayInterface>
) => {
  const dailyForcastArray: Array<valuesInterface> = [];

  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  //display data for at least 8 forecastelements (16-23) if hour is later than 16 to prevent UI issues
  //(1-3 datapoints in streamchart/barchart look weird)
  const hourToDisplay = currentHour >= 16 ? 16 : currentHour;

  timelinesArray.forEach((el) => {
    if (dailyForcastArray?.[4]?.values.length === 24) return;
    const index = dailyForcastArray.length;
    const hour = Number(el.time.split('T')[1].split(':')[0]);
    if (dailyForcastArray[dailyForcastArray.length - 1]) {
      if (
        el.time.split('T')[0] ===
        dailyForcastArray[dailyForcastArray.length - 1].date.split('T')[0]
      ) {
        dailyForcastArray[dailyForcastArray.length - 1].values.push({
          ...el.values,
          hour,
        });
      } else {
        dailyForcastArray.push({
          date: el.time,
          index,
          values: [{ ...el.values, hour }],
        });
      }
    } else {
      if (Number(hour) >= hourToDisplay) {
        dailyForcastArray.push({
          date: el.time,
          index,
          values: [
            {
              ...el.values,
              hour,
            },
          ],
        });
      }
    }
  });
  return dailyForcastArray;
};
