import React from 'react';
import {
  Header,
  Footer,
  Possibility,
  Features,
  Blog,
  WhatGPT3,
} from './containers';
import {
  CTA,
  Brand,
  NavBar,
} from './components';
import './app.css';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
