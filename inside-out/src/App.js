// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import NewExperience from './Components/NewExperience';
import index from "./Services/index";
// import Data from './Components/Data';

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <Home />
      <hr />
      <NewExperience />
      {/* <Data /> */}
    </div>
  );
}

export default App;
