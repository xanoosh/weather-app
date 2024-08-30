import { useWeatherData } from './hooks/useWeatherData.tsx';

function App() {
  const { isLoading } = useWeatherData({
    latitude: 1,
    longitude: 2,
  });
  return (
    <>
      <h1>Weather app</h1>
      <div className="card">
        <p>{isLoading ? 'Loading...' : 'weatherData loaded!'}</p>
      </div>
    </>
  );
}

export default App;
