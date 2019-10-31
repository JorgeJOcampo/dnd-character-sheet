import React from 'react';
import './Stats.css';

export default (props) => (
  <div className="stats-container">
    {props.stats.map((stat) => (
      <div className="stat">
        <div>
          {stat.value}
        </div>
        <div className="stat-name">
          {stat.name}
        </div>
      </div>
    ))}
  </div>
);
