import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [date, setDate] = useState(new Date());

  useEffect(()=> {
    setInterval(() => setDate(new Date()),1000)
  },[date]);

  let num1 = "";
  let num2 = "";
  let num3 = "";
  let num4 = "";
  if (date.getHours() < 10) {
    num1 =  "0";
    num2 = date.getHours();
  } else {
    num1 = date.getHours().toString()[0];
    num2 = date.getHours().toString()[1];
  }
  if (date.getMinutes() < 10) {
    num3 = "0";
    num4 = date.getMinutes();
  } else {
    num3 = date.getMinutes().toString()[0];
    num4 = date.getMinutes().toString()[1];
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="clock">
          <div className="mainbody">
            <div className="backbody">
              <div className="colont"></div>
              <div className="colonb"></div>
              <div className="digit1">
                <div className="num1">{num1}</div>
                <div className="brace"></div>
              </div>
              <div className="digit2">
                <div className="num2">{num2}</div>
                <div className="brace"></div>
              </div>
              <div className="digit3">
                <div className="num3">{num3}</div>
                <div className="brace"></div>
              </div>
              <div className="digit4">
                <div className="num4">{num4}</div>
                <div className="brace"></div>
              </div>
            </div>
          </div>
          <div className="footl">
            <div className="inner"></div>
          </div>
          <div className="footr">
            <div className="inner"></div>
          </div>
          <div className="shadow"></div>
        </div>

      </header>
    </div>
  );
}

export default App;
