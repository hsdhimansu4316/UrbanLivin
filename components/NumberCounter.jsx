"use client";
import React, { useState, useEffect, memo } from "react";

const Counter = memo(({ value }) => {
  return <span className="odometer">{value}</span>;
});

function NumberCounter() {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    team: 0,
    clients: 0,
  });

  useEffect(() => {
    const targetValues = {
      experience: 20.99,
      projects: 100,
      team: 3000,
      clients: 100,
    };

    const totalDuration = 2000; // Total duration for the animation in ms
    const steps = 100; // Total number of steps
    const intervalTime = totalDuration / steps;

    const increments = {
      experience: targetValues.experience / steps,
      projects: targetValues.projects / steps,
      team: targetValues.team / steps,
      clients: targetValues.clients / steps,
    };

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setCounters((prevCounters) => {
        const updatedCounters = { ...prevCounters };

        for (const key in prevCounters) {
          updatedCounters[key] = Math.min(
            prevCounters[key] + increments[key],
            targetValues[key]
          );
        }

        return updatedCounters;
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="experience">
      <div className="container">
        <div className="experience__item-wrapper">
          <div className="experience__item">
            <div className="experience__item-content">
              <div className="experience__item-content-icon">
                <img
                  src="./assets/imgs/experience/1.png"
                  alt="Years Of Experience"
                />
              </div>
              <div className="experience__item-content-text">
                <h6 className="title-animation">Years Of Experience</h6>
                <h2>
                  <Counter value={Math.floor(counters.experience)} />+
                </h2>
              </div>
            </div>
          </div>
          <div className="experience__item">
            <div className="experience__item-content">
              <div className="experience__item-content-icon">
                <img
                  src="./assets/imgs/experience/2.png"
                  alt="Sq ft. delivered"
                />
              </div>
              <div className="experience__item-content-text">
                <h6 className="title-animation">Sq ft. delivered</h6>
                <h2>
                  <Counter value={Math.floor(counters.projects)} />M+
                </h2>
              </div>
            </div>
          </div>
          <div className="experience__item">
            <div className="experience__item-content">
              <div className="experience__item-content-icon">
                <img
                  src="./assets/imgs/experience/3.png"
                  alt="Clients"
                />
              </div>
              <div className="experience__item-content-text">
                <h6 className="title-animation">Clients</h6>
                <h2>
                  <Counter value={Math.floor(counters.team)} />+
                </h2>
              </div>
            </div>
          </div>
          <div className="experience__item">
            <div className="experience__item-content">
              <div className="experience__item-content-icon">
                <img
                  src="./assets/imgs/experience/4.png"
                  alt="Team"
                />
              </div>
              <div className="experience__item-content-text">
                <h6 className="title-animation">Team</h6>
                <h2>
                  <Counter value={Math.floor(counters.clients)} />+
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NumberCounter;
