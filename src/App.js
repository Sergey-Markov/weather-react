import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "./utils/weatherApi";
import { fetchWeatherAction } from "./Redux/slices/weatherSlices";
import Container from "./Components/Container/Container";
import ContainerForCards from "./Components/ContainerForCards/ContainerForCards";
import Form from "./Components/Form/Form";
import Spiner from "./Components/Spiner/Spiner";
import SunCard from "./Components/SunCard/SunCard";
import s from "./App.module.css";

// display icon https://openweathermap.org/img/wn/${icon}.png
function App() {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchWeatherAction(query));
  // }, []);

  const state = useSelector((state) => state);
  const { weather, loading, error } = state.weatherReducer;
  function inputChange(e) {
    setQuery(e.target.value);
  }
  async function search(e) {
    if (e.key === "Enter" || e.target.tagName === "BUTTON") {
      await dispatch(fetchWeatherAction(query));
      console.log("weather in search:", state);
      setQuery("");
    }
  }

  return (
    <Container>
      <div>
        <Form onChange={inputChange} query={query} search={search} />
        {loading ? (
          <Spiner />
        ) : error ? (
          <h1 className={s.err}>{error?.message} </h1>
        ) : (
          <ContainerForCards>
            <SunCard weather={weather} />
            <SunCard weather={weather} />
            <SunCard weather={weather} />
            <SunCard weather={weather} />
            <SunCard weather={weather} />
          </ContainerForCards>
        )}
      </div>
    </Container>
  );
}

export default App;
