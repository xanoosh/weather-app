import { temperatureChartInterface } from '../interfaces';
import { ResponsiveLine } from '@nivo/line';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { chartCustomTheme } from '../globals/chartCustomTheme';
import { createBreakpoint } from 'react-use';

const useBreakpoint = createBreakpoint({
  '2xl': 1536,
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
});

export const TemperatureChart = ({
  chartData,
  temperaturesArray,
}: temperatureChartInterface) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'md') {
    chartCustomTheme.axis.ticks.text.fontSize = 9;
  }
  if (breakpoint === 'sm') {
    chartCustomTheme.axis.ticks.text.fontSize = 7;
  }
  return (
    <div className="rounded">
      <AspectRatio.Root ratio={breakpoint === 'sm' ? 16 / 12 : 16 / 9}>
        <ResponsiveLine
          data={chartData}
          theme={chartCustomTheme}
          tooltip={({ point }) => {
            const temp = String(point.data.y) + '°C';
            const hour = String(point.data.x) + ':00';
            return (
              <div className="border px-3 py-2 border-white rounded-sm bg-sky-500 flex flex-col gap-2">
                <p className="text-sm text-white">
                  {temp} at {hour}
                </p>
              </div>
            );
          }}
          // onClick={(point) => console.log('clicked point:', point.data)}
          margin={{
            left: 45,
            right: 10,
            bottom: 40,
            top: 20,
          }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 0,
            max: temperaturesArray.sort()[temperaturesArray.length - 1] + 10,
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
          pointSize={4}
          pointColor={'#0ea5e9'}
          pointBorderWidth={1}
          colors={['#fff']}
          pointBorderColor={'#fff'}
          pointLabelYOffset={-12}
          enableTouchCrosshair={true}
          useMesh={true}
        />
      </AspectRatio.Root>
    </div>
  );
};
