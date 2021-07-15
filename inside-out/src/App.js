// import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import Modal from "./Components/Modal/Modal";
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import NewExperience from './Components/NewExperience';
import index from "./Services/index";
// import Data from './Components/Data';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <hr /> */}
      <Modal />
      <Navbar />
      <hr />
      <Route exact path="/">
        <Home />
      </Route>
      <hr />
      <Route path="/Pen to paper">
        <NewExperience />
      </Route>
      <hr />
      <Footer />
      {/* <Data /> */}
    </div>
  );
}

export default App;
