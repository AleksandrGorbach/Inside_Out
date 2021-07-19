import './App.css';
import styled from "styled-components";
import { Route } from "react-router-dom";
import Home from './Components/Home';
import Navbar from "./Components/Navbar";
import NewExperience from './Components/NewExperience';

function App() {
  return (
  <div>
    <div className="App">
        <Container>
        <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Pen to paper">
        <NewExperience />
      </Route>
      </Container>
      </div>
    </div>
  );
}

const Container = styled.div`
  background: #67bc98;
  height: 100%;
`

export default App;
