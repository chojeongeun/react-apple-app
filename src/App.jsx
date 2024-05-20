import styled from "styled-components";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <Container>
      <Nav />
      App
    </Container>
  );
}

const Container = styled.main`
  position: realative;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
`;

export default App;
