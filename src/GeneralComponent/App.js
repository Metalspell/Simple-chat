import style from './App.module.css';
import Authentication from '../Components/Authentication/Authentication';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import Main from '../Components/Main';

const App = () => {
  return (
    <section className={style.mainContainer}>
      <Router>
        <Route exact path="/" component={Authentication} />
        <Route exact path="/main" component={Main} />
      </Router>
    </section>
  );
}

export default App;