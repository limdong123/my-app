import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;