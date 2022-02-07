import Container from "./Components/Container/Container";
import ContainerForCards from "./Components/ContainerForCards/ContainerForCards";
import Form from "./Components/Form/Form";
import SunCard from "./Components/SunCard/SunCard";

function App() {
  return (
    <Container>
      <div>
        <Form />
        <ContainerForCards>
          <SunCard />
          <SunCard />
          <SunCard />
          <SunCard />
          <SunCard />
        </ContainerForCards>
      </div>
    </Container>
  );
}

export default App;
