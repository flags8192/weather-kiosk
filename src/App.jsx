import React, { useCallback, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import CurrentDescriptionBlock from "./Components/CurrentDescriptionBlock/CurrentDescriptionBlock";
import CurrentOtherBlock from "./Components/CurrentOtherBlock/CurrentOtherBlock";
import CurrentWeatherBlock from "./Components/CurrentWeatherBlock/CurrentWeatherBlock";
import DateTimeBlock from "./Components/DateTimeBlock/DateTimeBlock";
import ForecastBlock from "./Components/ForecastBlock/ForecastBlock";
import LoadingIndicator from "./Components/Loader/Loader";
import SiteInfoBlock from "./Components/SiteInfoBlock/SiteInfoBlock";
import { fetchOtherTemp, fetchWeather } from "./redux/reducers/weather";

function App() {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state);

  const getGeoLoc = useCallback(() => {
    dispatch(
      fetchWeather({
        lat: process.env.REACT_APP_LAT,
        lng: process.env.REACT_APP_LNG,
      })
    );
    dispatch(fetchOtherTemp());

    const intervalFetchWeather = setInterval(() => {
      dispatch(
        fetchWeather({
          lat: process.env.REACT_APP_LAT,
          lng: process.env.REACT_APP_LNG,
        })
      );
    }, 30 * 60 * 1000);

    const intervalFetchOtherTemp = setInterval(() => {
      dispatch(fetchOtherTemp());
    }, 65 * 1000);

    return () => {
      clearInterval(intervalFetchWeather);
      clearInterval(intervalFetchOtherTemp);
    };
  }, [dispatch]);

  useEffect(() => {
    getGeoLoc();
  }, [getGeoLoc, dispatch]);

  const param = document.location.search.split("?")[1];

  return (
    <Container>
      {myState.weather.isWeatherLoaded && myState.weather.isOtherLoaded ? (
        <div className="grid-container">
          <DateTimeBlock />
          <CurrentWeatherBlock data={myState.weather} />
          <CurrentDescriptionBlock param={param} />
          <CurrentOtherBlock param={param} />
          <ForecastBlock />
          {param === 'local' ? '' : <SiteInfoBlock data={myState.weather.fetchDataTime} param={param} />}
        </div>
      ) : (
        <LoadingIndicator />
      )}
    </Container>
  );
}

export default App;
