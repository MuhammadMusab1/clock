import { useState } from 'react';
import './App.css';

function App() {
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);
  const [ampm, setAMPM] = useState(null)

  const updateTime = () => {
  }
  setInterval(() => {
    let hourInitial = new Date().getHours();
    setMinutes(new Date().getMinutes());
    setSeconds(new Date().getSeconds());
    setAMPM(hours >= 12 ? "PM" : "AM")

    console.log(hours, minutes, seconds, ampm)
    //convert 24 hour clock to 12hour clock
    if( hourInitial > 12) {
      setHours(new Date().getHours())
      setHours(prevHour => prevHour - 12)
      setHours(prevHour => prevHour < 10 ? "0" + prevHour : prevHour)
    } else {
      setHours(prevHour => prevHour < 10 ? "0" + prevHour : prevHour)
    }
    // add zero before single digit number
    //setHours(prevHour => prevHour < 10 ? "0" + prevHour : prevHour)
    setMinutes(prevMinutes => prevMinutes < 10 ? "0" + prevMinutes : prevMinutes)
    setSeconds(prevSeconds => prevSeconds < 10 ? "0" + prevSeconds : prevSeconds)
    
  }, 1000);
  return (
    <div id='time'>
      <div className='circle'>
        <svg>
          <circle cx={"70"} cy={"70"} r={"70"}></circle>
          <circle cx={"70"} cy={70} r={"70"} style={{stroke: "#ff2972", strokeDashoffset: `${440 - (440 * hours) / 12}`}}></circle>
        </svg>
        <div id='hours'>{hours}</div>
      </div>
      <div className='circle'>
      <svg>
          <circle cx={"70"} cy={"70"} r={"70"}></circle>
          <circle cx={"70"} cy={70} r={"70"} style={{stroke: "#fee800", strokeDashoffset: `${440 - (440 * minutes) / 60}`}}></circle>
        </svg>
        <div id='minutes'>{minutes}</div>
      </div>
      <div className='circle'>
      <svg>
          <circle cx={"70"} cy={"70"} r={"70"}></circle>
          <circle cx={"70"} cy={70} r={"70"} style={{stroke: "#04fc43", strokeDashoffset: `${440 - (440 * seconds) / 60}`}}></circle>
        </svg>
        <div id='seconds'>{seconds}</div>
      </div>
      <div className='ap'>
        <div className='ampm'>
          {ampm}
        </div>
      </div>
    </div>
  )
}

export default App;
