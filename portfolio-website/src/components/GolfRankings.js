import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';

function GolfRankings() {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const proxyUrlFly = "https://cors-server.fly.dev/";
    const apiUrl = 'https://api.sportradar.com/golf/trial/v3/en/players/wgr/2024/rankings.json?api_key=iS30RLvmdw3dZ5rPWbbauadvNh7D3WH74J3op6CS';
    fetch(proxyUrlFly + apiUrl)
      .then(response => response.json())
      .then(data => {
        const topTenGolfers = data.players.slice(0, 10);
        setRankings(topTenGolfers);
      })
      .catch(error => console.error('Error fetching golf rankings:', error));
  }, []);

  return (
    <>
      <Navigation />
      <div className="header-container">
        <header className="page-header">Top 10 World Golf Rankings
            <div style={{ fontSize: 'small' }}>Keeping track of the best golfers for fun</div>
        </header>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Country</th>
              <th>Average Points</th>
              <th>Total Points</th>
              <th>Events Played</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((golfer, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{golfer.first_name}</td>
                <td>{golfer.last_name}</td>
                <td>{golfer.country}</td>
                <td>{golfer.statistics.avg_points}</td>
                <td>{golfer.statistics.points}</td>
                <td>{golfer.statistics.events_played}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default GolfRankings;
