import React, { useState, useEffect } from 'react';

function GolfRankings() {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    fetch('https://api.sportradar.com/golf/trial/v3/en/players/wgr/2024/rankings.json') // Replace 'API_ENDPOINT' with the actual API endpoint
      .then(response => response.json())
      .then(data => {
        // Assuming the API returns an array of golfers sorted by their rankings
        const topTenGolfers = data.slice(0, 10);
        setRankings(topTenGolfers);
      })
      .catch(error => console.error('Error fetching golf rankings:', error));
  }, []);

  return (
    <div>
      <h2>Top 10 Golf World Rankings</h2>
      <ul>
        {rankings.map((golfer, index) => (
          <li key={index}>{`${index + 1}. ${golfer.name} - ${golfer.country}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default GolfRankings;