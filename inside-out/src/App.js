import './App.css';
import styled from "styled-components";
import { Route } from "react-router-dom";
import Modal from "./Components/Modal/Modal";
import Home from './Components/Home';
import Card from "./Components/Card/Card"
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
        {/* <Card /> */}
       {/* <Navbar /> */}
      
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Pen to paper">
        <NewExperience />
      </Route>
      <Footer />
      </Container>
    </div>
  );
}

const Container = styled.div`
  background: #67bc98;
  height: 100vh;
`

export default App;
