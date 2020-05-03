import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import TutorsPageContainer from './components/TutorsPageContainer/TutorsPageContainer';
import MainPageContainer from './components/MainPageContainer/MainPageContainer';

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <TutorsPageContainer></TutorsPageContainer>
      <MainPageContainer></MainPageContainer>
      <Footer></Footer>
    </div>
  )
}

export default App;
