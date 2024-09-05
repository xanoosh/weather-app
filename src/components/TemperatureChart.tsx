import { temperatureChartInterface } from '../interfaces';
import { ResponsiveLine } from '@nivo/line';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { chartCustomTheme } from '../globals/chartCustomTheme';
import { createBreakpoint } from 'react-use';

const useBreakpoint = createBreakpoint({ XL: 1280, L: 768, S: 400 });

export const TemperatureChart = ({ chartData }: temperatureChartInterface) => {
  const breakpoint = useBreakpoint();
  return (
    <div className="rounded">
      <AspectRatio.Root ratio={breakpoint == 'S' ? 16 / 12 : 16 / 9}>
        <ResponsiveLine
          data={chartData}
          theme={chartCustomTheme}
          tooltip={({ point }) => {
            const temp = String(point.data.y) + '°C';
            const hour = String(point.data.x) + ':00';
            return (
              <div className="border px-3 py-2 border-slate-200 rounded-sm bg-white flex flex-col gap-2">
                <p className="text-sm text-slate-600">
                  {temp} at {hour}
                </p>
              </div>
            );
          }}
          // onClick={(point) => console.log('clicked point:', point.data)}
          margin={{ left: 45, right: 30, bottom: 40, top: 20 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 0,
            max: 60,
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          curve="natural"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'hour',
            legendOffset: 35,
            legendPosition: 'middle',
            truncateTickAt: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'temperature °C',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0,
          }}
          pointSize={3}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={1}
          colors={['#fff', '#000000']}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          enableTouchCrosshair={true}
          useMesh={true}
        />
      </AspectRatio.Root>
    </div>
  );
};
