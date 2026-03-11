import React, { useEffect, useState } from "react";
import "./countdown.css";

const Countdown = () => {
  const targetDate = new Date("March 27, 2026 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTime());

  function getTime() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">
      <div className="countdown-container">

        <div className="timer-box">

          <div className="time-card">
            <h1>{timeLeft.days}</h1>
            <p>DAYS</p>
          </div>

          <div className="time-card">
            <h1>{timeLeft.hours}</h1>
            <p>HOURS</p>
          </div>

          <div className="time-card">
            <h1>{timeLeft.minutes}</h1>
            <p>MINUTES</p>
          </div>

          <div className="time-cards">
            <h1>{timeLeft.seconds}</h1>
            <p>SECONDS</p>
          </div>

        </div>

        <div className="conference-date">
          <h4>• 5 International Speakers • 15 National Speakers</h4>
          <h4>• 2-Day Conference • 200+ Delegates Expected</h4>
        </div>

      </div>
    </section>
  );
};

export default Countdown;