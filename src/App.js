import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
  <BrowserRouter>
  
  <Navbar/>
  <div>
        <Switch>
          <Route exact path={"/"}>
            <Home/>
            </Route>

            <Route exact path={"/Contact"}>
            <Contact/>
            </Route>

            <Route exact path={"/Portfolio"}>
            <Portfolio/>
            </Route>
        </Switch>
       
      </div>

  
  </BrowserRouter>
     
  );
}

export default App;
