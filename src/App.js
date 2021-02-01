import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
  <BrowserRouter>
  
  <Navbar/>
  <Route exact path= "/" component = {Home} />
  <Route path= "/contact" component = {Contact} />
  <Route path= "/portfolio" component = {Portfolio} />

  
  </BrowserRouter>
     
  );
}

export default App;
