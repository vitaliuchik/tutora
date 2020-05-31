import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import TutorsPageContainer from './components/TutorsPageContainer/TutorsPageContainer';
import MainPageContainer from './components/MainPageContainer/MainPageContainer';
import ContactPageContainer from './components/ContactPageContainer/ContactPageContainer';
import JoinPageContainer from './components/JoinPageContainer/JoinPageContainer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="wrapper">

      <Router>
      <Header></Header>

      <Switch>
        <Route path="/contact">
          <ContactPageContainer></ContactPageContainer>
        </Route>
        <Route path="/join">
          <JoinPageContainer></JoinPageContainer>
        </Route>
        <Route path="/tutors">
          <TutorsPageContainer></TutorsPageContainer>
        </Route>
        <Route path="/">
          <MainPageContainer></MainPageContainer>
        </Route>
      </Switch>

      <Footer></Footer>
      </Router>


    </div>
  )
}

export default App;
