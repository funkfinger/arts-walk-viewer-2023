import Container from "react-bootstrap/Container";
import ArtCarousel from "./components/ArtCarousel";

function App() {
  return (
    <Container>
      <header className="App-header">
        <h1 className="head">
          <img
            src="/images/pcds-arts-walk-water-bottle.png"
            alt="PCDS Arts Walk water bottle logo"
            className="pcds-arts-walk-logo"
          />
          PCDS Arts Walk 2023 - Coding As Art
        </h1>
      </header>
      <ArtCarousel />
    </Container>
  );
}

export default App;
