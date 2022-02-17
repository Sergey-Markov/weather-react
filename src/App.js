import { useState } from "react";
import { useSelector } from "react-redux";
import Container from "./Components/Container/Container";
import ContainerForCards from "./Components/ContainerForCards/ContainerForCards";
import Form from "./Components/Form/Form";
import Spiner from "./Components/Spiner/Spiner";
import s from "./App.module.css";

// display icon https://openweathermap.org/img/wn/${icon}.png
function App() {
  const [query, setQuery] = useState("");

  const state = useSelector((state) => state);
  const { loading, error } = state.weatherReducer;
  function inputChange(e) {
    setQuery(e.target.value.trim());
  }
  function clearInput() {
    setQuery("");
  }

  return (
    <Container>
      <div>
        <Form onChange={inputChange} query={query} clearInput={clearInput} />
        {loading ? (
          <Spiner />
        ) : error ? (
          <h1 className={s.err}>{error?.message} </h1>
        ) : (
          <ContainerForCards />
        )}
      </div>
    </Container>
  );
}

export default App;
