import { barChartInterface } from '../../../interfaces';
import { ResponsiveBar } from '@nivo/bar';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { chartCustomTheme } from '../../../globals/chartCustomTheme';
import { createBreakpoint } from 'react-use';

const useBreakpoint = createBreakpoint({
  '2xl': 1536,
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
});

export default function BarChart({
  chartData,
  min,
  max,
  yAxisLegend,
  unit,
}: barChartInterface) {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'md') {
    chartCustomTheme.axis.ticks.text.fontSize = 9;
    chartCustomTheme.text.fontSize = 9;
  }
  if (breakpoint === 'sm') {
    chartCustomTheme.axis.ticks.text.fontSize = 7;
    chartCustomTheme.text.fontSize = 7;
  }
  return (
    <div className="rounded">
      <AspectRatio.Root ratio={breakpoint === 'sm' ? 16 / 11 : 16 / 7}>
        <ResponsiveBar
          data={chartData}
          keys={['humidity']}
          indexBy="hour"
          padding={0.5}
          maxValue={max}
          minValue={min}
          theme={chartCustomTheme}
          enableLabel={false}
          enableTotals
          tooltip={({ data: { exactHumidity, hour } }) => {
            return (
              <div className="px-3 py-2 rounded-sm bg-sky-600 shadow-md flex flex-col gap-2">
                <p className="text-sm text-white">
                  humidity {exactHumidity}% at {hour}:00
                </p>
              </div>
            );
          }}
          margin={{
            left: 45,
            right: 10,
            bottom: 40,
            top: 20,
          }}
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
            legend: `${yAxisLegend} (${unit})`,
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0,
          }}
          colors={['#38bdf8']}
        />
      </AspectRatio.Root>
    </div>
  );
}
