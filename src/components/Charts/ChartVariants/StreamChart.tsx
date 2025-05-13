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
  colors,
  gradient,
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
  const keys = Object.keys(chartData[0]).filter(
    (key): key is 'Temperature (°C)' | 'Wind speed (m/s)' | 'Wind gust (m/s)' =>
      key !== 'hour'
  );
  return (
    <div className="rounded">
      <AspectRatio.Root ratio={breakpoint === 'sm' ? 16 / 11 : 16 / 7}>
        <ResponsiveStream
          data={chartData}
          keys={keys}
          enableGridX={breakpoint === 'sm' ? false : true}
          enableGridY={breakpoint === 'sm' ? false : true}
          fillOpacity={0.6}
          animate={true}
          motionConfig="stiff"
          theme={chartCustomTheme}
          margin={{
            left: breakpoint === 'sm' ? 5 : 45,
            right: breakpoint === 'sm' ? 5 : 10,
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
          offsetType="diverging"
          axisLeft={
            breakpoint === 'sm'
              ? {}
              : {
                  renderTick: () => <></>,
                  legend: `${yAxisLegend} (${unit})`,
                  legendOffset: -40,
                  legendPosition: 'middle',
                  truncateTickAt: 0,
                }
          }
          // stackTooltip={(el:{stack}) => {
          //   // console.log('stack', stack);
          //   // const val = `${String(el.data.y)}${unit}`;
          //   // const hour = `${String(el.data.x)}:00`;
          //   return (
          //     <div className="px-3 py-2 rounded-sm bg-blue-900 shadow-md flex flex-col gap-2">
          //       {el.layer.map(({ id: layerLabel, value }, i) => (
          //         <p
          //           key={i}
          //           className="text-xs text-slate-200"
          //         >{`${layerLabel}: ${value}${unit}`}</p>
          //       ))}
          //     </div>
          //   );
          // }}
          colors={colors ? colors : ['#8C9FE0', '#3758C7']}
          defs={
            gradient
              ? [
                  {
                    id: 'gradient',
                    type: 'linearGradient',
                    colors: [
                      { offset: 0, color: colors?.[1] || 'inherit' },
                      { offset: 80, color: colors?.[0] || 'inherit' },
                    ],
                  },
                ]
              : undefined
          }
          fill={
            gradient ? [{ match: { id: keys[0] }, id: 'gradient' }] : undefined
          }
        />
      </AspectRatio.Root>
    </div>
  );
}
