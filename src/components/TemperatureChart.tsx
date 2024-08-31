import { ResponsiveLine } from '@nivo/line';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

export const TemperatureChart = ({ chartData }) => (
  <AspectRatio.Root ratio={18 / 6}>
    <ResponsiveLine
      data={chartData}
      margin={{ left: 60, right: 20, bottom: 20 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'temperature',
        legendOffset: -50,
        legendPosition: 'middle',
        truncateTickAt: 0,
      }}
      pointSize={4}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
    />
  </AspectRatio.Root>
);
