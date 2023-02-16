import React, {useState, useEffect} from 'react'
import Clock from './Components/Clock'
import "./App.css";

function App() {

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();



useEffect(() =>{


  const startTimer = () =>{
  const countDownDate = new Date("02, 19, 2023 ").getTime();
  
  const interval = setInterval ( () =>{
  
  const now = new Date().getTime();
  
  const commingdays  = countDownDate-now;
  
  const Days = Math.floor(commingdays / (24 * 60 * 60 * 1000));
  
  const Hours = Math.floor(
    (commingdays % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
    
    );
  
    const Minutes = Math.floor(
      (commingdays % (60 * 60 * 1000)) / (1000 * 60 )
      
      );
  
      const Seconds = Math.floor(
        (commingdays % ( 60 * 1000)) / (1000 )
        
        );
      
    if (commingdays<0){
  
      clearInterval(interval.current)
  
    }  else {
      setTimerDays(Days);
      setTimerHours(Hours);
      setTimerMinutes(Minutes);
      setTimerSeconds(Seconds);
    }
  
  
  } );
  
  
  
  };

  startTimer();
});

  return (
    <div className='App'>
<Clock 
timerDays = {timerDays}
timerHours = {timerHours}
timerMinutes =  {timerMinutes}
timerSeconds = {timerSeconds}

/>
    </div>
  )
}

export default App

