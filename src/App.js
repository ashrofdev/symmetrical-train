import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="pattern_top">
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
      </div>
      <header>
        <div className="logo">logo</div>
        <h1 className="brand_name">Brand Name</h1>
      </header>
      <form>
        <input className="input" placeholder="Username or Email"/>
        <input className="input" placeholder="Password"/>

        <div className="cta">
          <button className="btn btn_login">Login</button>
          <button className="btn">Forgot Password ?</button>
        </div>
      </form>
      <div className="pattern_bottom">
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
      </div>
      
    </div>
  );
}

export default App;
