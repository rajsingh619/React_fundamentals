import { useState, useEffect } from "react";
import pomodoroImg from '../assets/pomodoro-technique.png'

export default function Timer({ targetTime }) {
  //targettime is received in seconds

  const [time, setTime] = useState(targetTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  function handleStartPauseTimer() {
    setIsTimeRunning(!isTimeRunning);
  }


  useEffect(() => {
    let interval;
    if (isTimeRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    if (time === 0 && isTimeRunning) {
      setIsTimeRunning(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isTimeRunning, time]);

  function handleReset() {
    setIsTimeRunning(false);
    setTime(targetTime);
  }

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
    //This function is to format time in our format that is 00:00 the padstart function which is used on string ensures this behavior by adding 0 in front if the time is not a two digit number which is passed as the first argument in the string
  };

  return (
    <div className="bg-white h-fit w-80 shadow-2xl rounded-2xl mx-auto mt-12 items-center flex flex-col">
      <div className="h-16 flex w-full bg-linear-to-r from-red-400 to-red-300 rounded-t-2xl justify-center items-center">
        <img className="overflow-hidden h-8 w-8" src={pomodoroImg} alt="pomodoro image header" />
        <h1 className="font-bold text-2xl text-white">Pomodoro Timer</h1>
      </div>
      <div className="h-48 w-48 mt-12 rounded-full bg-slate-200 flex justify-center items-center">
         <p className="text-center font-bold text-5xl">{formatTime(time)}</p>
      </div>
      <div className="flex gap-4 mt-12 mb-12">
        <button
          onClick={handleStartPauseTimer}
          className="bg-blue-500  h-12 w-24 font-semibold text-white cursor-pointer rounded-xl "
        >
          {isTimeRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={handleReset}
          className="bg-slate-400 h-12 w-24 font-semibold text-white cursor-pointer rounded-xl"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
