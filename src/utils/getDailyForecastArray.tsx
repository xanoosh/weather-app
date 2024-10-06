import { timelinesArrayInterface, valuesInterface } from '../interfaces';

export const getDailyForecastArray = (
  timelinesArray: Array<timelinesArrayInterface>
) => {
  const dailyForcastArray: Array<valuesInterface> = [];

  const currentDate = new Date();
  const currentHour = currentDate.getHours();

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
      if (Number(hour) >= currentHour) {
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
