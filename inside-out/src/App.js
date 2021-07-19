import "./App.css";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NewExperience from "./Components/NewExperience";

function App() {
  return (
    <div>
      <div className="App">
        <Container>
          <Navbar />
          <main>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Pen to paper">
              <NewExperience />
            </Route>
          </main>
          <Footer />
        </Container>
      </div>
    </div>
  );
}

const Container = styled.div`
  background: #67bc98;
  height: 100vh;
`;

export default App;
