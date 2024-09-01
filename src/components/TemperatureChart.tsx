import { temperatureChartInterface } from '../interfaces';
import { ResponsiveLine } from '@nivo/line';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

export const TemperatureChart = ({ chartData }: temperatureChartInterface) => (
  <AspectRatio.Root ratio={16 / 9}>
    <ResponsiveLine
      data={chartData}
      tooltip={({ point }) => {
        const temp = String(point.data.y) + '°C';
        const hour = String(point.data.x) + ':00';
        return (
          <div className="border px-2 py-1 border-slate-200 rounded-sm bg-white">
            <p className="text-sm text-slate-600">
              {temp} at {hour}
            </p>
          </div>
        );
      }}
      margin={{ left: 70, right: 30, bottom: 50, top: 50 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
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
        legendOffset: 30,
        legendPosition: 'middle',
        truncateTickAt: 0,
      }}
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
      colors={{ scheme: 'category10' }}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
    />
  </AspectRatio.Root>
);
