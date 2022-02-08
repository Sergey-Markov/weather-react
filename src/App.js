import { useState } from "react";
import Container from "./Components/Container/Container";
import ContainerForCards from "./Components/ContainerForCards/ContainerForCards";
import Form from "./Components/Form/Form";
import SunCard from "./Components/SunCard/SunCard";
import { API } from "./utils/weatherApi";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState();

  function inputChange(e) {
    setQuery(e.target.value);
  }
  async function search(e) {
    if (e.key === "Enter" || e.target.tagName === "BUTTON") {
      console.log(e.target.tagName);
      await fetch(
        `${API.baseURL}weather?q=${query}&units=metric&APPID=${API.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  }

  return (
    <Container>
      <div>
        <Form onChange={inputChange} query={query} search={search} />
        <ContainerForCards>
          <SunCard weather={weather} />
          <SunCard weather={weather} />
          <SunCard weather={weather} />
          <SunCard weather={weather} />
          <SunCard weather={weather} />
        </ContainerForCards>
      </div>
    </Container>
  );
}

export default App;
