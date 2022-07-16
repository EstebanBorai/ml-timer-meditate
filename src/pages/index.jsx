import { useEffect, useState } from 'react';

const SECOND_IN_MS = 1000;

export default function Home() {
  const [soundBeforeFinishing, setSoundBeforeFinishing] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(10);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }
  }, []);

  useEffect(() => {
    if (seconds <= 0 && intervalId && isRunning) {
      setIsRunning(false);
      clearInterval(intervalId);
      setSeconds(0);
    }
  }, [seconds, intervalId, isRunning]);

  const start = () => {
    setIsRunning(true);

    const id = setInterval(() => {
      setSeconds((val) => val - 1);
    }, SECOND_IN_MS);

    setIntervalId(id);
  }

  const cancel = () => {
    setIsRunning(false);
    clearInterval(intervalId);
    setSeconds(10);
  }

  return (
    <>
      <div className="text-center h-screen">
        <h1 className="text-5xl text-left mt-10 ml-10">Timer To Meditate</h1>
        <p className="mt-24 text-9xl">{seconds === 0 ? '-' : seconds}</p>
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
          <button
            onClick={isRunning ? cancel : start}
            className={'py-2 px-7 text-3xl rounded-3xl border-2 border-green-600' + isRunning ? ' !border-rose-600' : ''}
          >
            {isRunning ? 'Cancel' : 'Start'}
          </button>
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
