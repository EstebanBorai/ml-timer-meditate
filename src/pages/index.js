import { useState } from 'react';

export default function Home() {
  const [soundBeforeFinishing, setSoundBeforeFinishing] = useState(true);
  const [startTimer, setStartTime] = useState(false);
  const [time, setTime] = useState(2000);

  function beginTimer() {
    setStartTime(true);
    const timer = setInterval(() => {
      setTime(time - 1000);
      console.log(time);
      if (time === 0) {
        clearInterval(timer);
        setTime(2000);
      }
    }, 1000);
  }

  function cancelTimer() {
    setStartTime(false);
  }

  return (
    <>
      <div className="text-center h-screen">
        <h1 className="text-5xl text-left mt-10 ml-10">Timer To Meditate</h1>
        <p className="mt-24 text-9xl">{time / 1000}</p>
        <p className="text-xs">Make a sound a minute before finishing</p>
        <div className="mt-2">
          {soundBeforeFinishing ? (
            <button
              className="py-2 px-7 rounded-3xl border-2 border-teal-600"
              onClick={() => setSoundBeforeFinishing(false)}
            >
              Yes
            </button>
          ) : (
            <button
              className="py-2 px-8 rounded-3xl border-2 border-rose-600"
              onClick={() => setSoundBeforeFinishing(true)}
            >
              No
            </button>
          )}
        </div>
        <div className="mt-20">
          {startTimer ? (
            <button
              onClick={cancelTimer}
              className="py-2 px-7 text-3xl rounded-3xl border-2 border-rose-600"
            >
              Cancel
            </button>
          ) : (
            <button
              onClick={beginTimer}
              className="py-2 px-7 text-3xl rounded-3xl border-2 border-green-600"
            >
              Begin
            </button>
          )}
        </div>
        <div className="mt-48"></div>
      </div>
      <p className="text-center">
        Build by{' '}
        <a className="text-blue-500" href="https://michaelliendo.com">
          Michael Liendo
        </a>
      </p>
    </>
  );
}
