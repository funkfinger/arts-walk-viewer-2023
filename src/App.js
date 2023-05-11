import Container from "react-bootstrap/Container";
import ArtCarousel from "./components/ArtCarousel";

function App() {
  return (
    <Container>
      <header className="App-header">
        <h1>Welcome to PCDS Arts Walk 2023</h1>
      </header>
      <ArtCarousel />
    </Container>
  );
}

export default App;
