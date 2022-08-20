import style from './App.module.css';
import Authentication from '../Components/Authentication/Authentication';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import Main from '../Components/Main';

const App = () => {
  return (
    <section className={style.mainContainer}>
      <Router>
        <Route exact path="/Simple-chat/" component={Authentication} />
        <Route exact path="/Simple-chat/main" component={Main} />
        <Route exact path="/Simple-chat/?/main" component={Main} />
      </Router>
    </section>
  );
}

export default App;