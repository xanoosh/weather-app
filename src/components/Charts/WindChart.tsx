import { windChartInterface } from '../../interfaces';
import { ResponsiveLine } from '@nivo/line';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { chartCustomTheme } from '../../globals/chartCustomTheme';
import { createBreakpoint } from 'react-use';
// import { getMinMaxValue } from '../../utils/getMinMaxValue';

const useBreakpoint = createBreakpoint({
  '2xl': 1536,
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
});

export default function WindChart({ chartData }: windChartInterface) {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'md') {
    chartCustomTheme.axis.ticks.text.fontSize = 9;
  }
  if (breakpoint === 'sm') {
    chartCustomTheme.axis.ticks.text.fontSize = 7;
  }
  return (
    <div className="rounded">
      <AspectRatio.Root ratio={breakpoint === 'sm' ? 16 / 11 : 16 / 7}>
        <ResponsiveLine
          data={chartData}
          theme={chartCustomTheme}
          tooltip={({ point }) => {
            const speed = String(point.data.y) + ' m/s';
            const hour = String(point.data.x) + ':00';
            return (
              <div className="px-3 py-2 rounded-sm bg-sky-600 shadow-md flex flex-col gap-2">
                <p className="text-sm text-white">
                  {speed} at {hour}
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
            // min: getMinMaxValue(temperaturesArray, 'min'),
            // max: getMinMaxValue(temperaturesArray, 'max'),
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
            legend: 'Wind speed (m/s)',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0,
          }}
          pointSize={4}
          pointColor={'#0ea5e9'}
          pointBorderWidth={1}
          colors={['#fff', '#f43f5e']}
          pointBorderColor={['#fff']}
          pointLabelYOffset={-12}
          enableTouchCrosshair={true}
          useMesh={true}
        />
      </AspectRatio.Root>
    </div>
  );
}
