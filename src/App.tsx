// import { useGeolocation } from 'react-use';
// import { useWeatherData } from './hooks/useWeatherData.tsx';
import data from './globals';

function App() {
  // const { latitude, longitude } = useGeolocation();
  // const { data, isLoading } = useWeatherData({
  //   latitude,
  //   longitude
  // });
  return (
    <>
      <h1 className="text-3xl font-bold underline">Weather app</h1>
      <div className="card">
        {/* {isLoading ? <p>Loading...</p> : null} */}
        {data ? <pre> {JSON.stringify(data, null, 2)}</pre> : null}
      </div>
    </>
  );
}

export default App;
