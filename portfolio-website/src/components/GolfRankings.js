import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';

function GolfRankings() {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const headers = {"Access-Control-Allow-Origin": "*"}
    fetch("https://api.sportradar.com/golf/trial/v3/en/players/wgr/2024/rankings.json?api_key={iS30RLvmdw3dZ5rPWbbauadvNh7D3WH74J3op6CS}", {headers})
      .then(response => response.json())
      .then(data => {
        const topTenGolfers = data.players.slice(0, 10);
        setRankings(topTenGolfers);
      })
      .catch(error => console.error('Error fetching golf rankings:', error));
  }, []);

  return (
    <><Navigation /><div className="header-container">
          <header className="page-header">Top 10 World Golf Rankings
              <div style={{ fontSize: 'small' }}>Keeping track of the best golfers for fun</div>
          </header>
          <ul>
              {rankings.map((golfer, index) => (
                  <li key={index}>{`${index + 1}. ${golfer.name} - ${golfer.country}`}</li>
              ))}
          </ul>
      </div></>
  );
}

export default GolfRankings;