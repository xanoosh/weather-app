import { streamChartInterface } from '../../../interfaces';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { chartCustomTheme } from '../../../globals/chartCustomTheme';
import { createBreakpoint } from 'react-use';
import { ResponsiveStream } from '@nivo/stream';

const useBreakpoint = createBreakpoint({
  '2xl': 1536,
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
});

export default function StreamChart({
  chartData,
  yAxisLegend,
  unit,
}: streamChartInterface) {
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
        <ResponsiveStream
          data={chartData}
          keys={['Wind speed', 'Wind gust']}
          enableGridX={true}
          fillOpacity={0.6}
          animate={true}
          motionConfig="wobbly"
          theme={chartCustomTheme}
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
            format: (index) => chartData[index].hour,
          }}
          axisLeft={{
            renderTick: () => <></>,
            legend: `${yAxisLegend} (${unit})`,
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0,
          }}
          colors={['#38bdf8', '#fb7185']}
        />
      </AspectRatio.Root>
    </div>
  );
}
