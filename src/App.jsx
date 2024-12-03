import React, { useState, useEffect } from 'react'
import chillGuy from "./assets/chill_guy.png";

export default function App() {
  const [day, setDay] = useState("Sunday");
  const [status, setStatus] = useState(false);
  useEffect(() => {
    // Get the current path
    const root = window.location.pathname;

    // Map paths to days
    const dayMap = {
      '/yakshanba': 'Yakshanba',
      '/dushanba': 'Dushanba',
      '/seshanba': 'Seshanba',
      '/chorshanba': 'Chorshanba',
      '/payshanba': 'Payshanba',
      '/juma': 'Juma',
      '/shanba': 'Shanba',
    };

    // Set the day based on the path or default to Sunday
    setDay(dayMap[root] || 'Yakshanba');
  }, []); // Runs once on component mount

  function EscapeFnc() {
    // Get random positions within the container
    const containerRect = document.querySelector(".container").getBoundingClientRect();
    const buttonRect = document.querySelector("#escape-btn").getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Move the button to a random position
    document.querySelector("#escape-btn").style.left = `${randomX}px`;
    document.querySelector("#escape-btn").style.top = `${randomY}px`;
    document.querySelector("#escape-btn").style.position = "absolute";
  }
  return (
    <>
      <div class="container">
        {
          status == false ?
            <div class="card">
              <h1>Salom! {day} kuni ko'rishsak nima deysan?</h1>
              <button id='ok-btn' onClick={() => setStatus(true)}>Ha, albatta!</button>
              <button id="escape-btn" onMouseOver={EscapeFnc}>Yo'q, ishlarim bor</button>
            </div>
            :
            <>
              <img src={chillGuy} alt="image" className='image' />
              <h2>Rozi bo'lishingni bilardim. Unda {day} kuni ko'rishguncha!</h2>
            </>
        }
      </div>
      <div className='devices'>
        Open in your PC or laptop.
      </div>
    </>
  )
}
