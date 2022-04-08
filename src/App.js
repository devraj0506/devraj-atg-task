import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import './App.css'
import Hero from "./components/hero/Hero";
import PageSelect from "./components/pageSelect/PageSelect";
import HomeP from "./pages/homeP/HomeP.jsx"
import penIcon from './images/penIcon.png'

function App() {
  return (
    <>
      <Router>
        <Topbar cassName="topbar" />
        <Hero className="hero" />
        <PageSelect className="pageselect" />
        <Switch>
          <Route path='/' component={HomeP} />
        </Switch>
      </Router>

      <img src={penIcon} id="pen" alt="" />
    </>
  );
}

export default App;
