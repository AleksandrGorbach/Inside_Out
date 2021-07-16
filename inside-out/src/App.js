import './App.css';
import styled from "styled-components";
import { Route } from "react-router-dom";
import Modal from "./Components/Modal/Modal";
import Home from './Components/Home';
// import Navbar from './Components/Navbar/Navbar';
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';
import NewExperience from './Components/NewExperience';
import index from "./Services/index";
import { BrowserRouter as Router } from "react-router-dom";
// import Data from './Components/Data';

function App() {
  return (
    <div className="App">
      <Container>
      <Navbar />
       {/* <Navbar /> */}
      {/* <hr /> */}
      <Route exact path="/">
        <Home />
      </Route>
      <hr />
      <Route path="/Pen to paper">
        <NewExperience />
      </Route>
      {/* <hr /> */}
      <Footer />
        {/* <Data /> */}
      </Container>
    </div>
  );
}

const Container = styled.div`
  background: #67bc98;
  height: 100vh;
`

export default App;
