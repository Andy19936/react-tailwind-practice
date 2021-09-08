import "./App.css";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import { Switch, Route } from "react-router-dom";
import About from "./pages/about";
import Logs from "./pages/logs";
import DropDown from "./components/DropDown";
import { Login } from "./pages/login";
import { AddLog } from "./pages/addlog";
import { Contact } from "./pages/contact";
import WorkOut from "./pages/workout";
import NotLoggedIn from "./components/NotLoggedIn";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resizeddd");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <NavBar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/notloggedin" component={NotLoggedIn} />
        <Route path="/about" component={About} />
        <Route path="/logs" component={Logs} />
        <Route path="/login" component={Login} />
        <Route path="/addlog" component={AddLog} />
        <Route path="/contact" component={Contact} />
        <Route path="/workout" component={WorkOut} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
