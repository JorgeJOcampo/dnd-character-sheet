import React from 'react';
import './CharacterInfo.css';

export default (props) => <div className="character-info">
    <div className="name">
      <h2>{props.name}</h2>
    </div>
    <div className="description">
      <div>
        {props.class} Lv{props.level}
      </div>
      <div>
        {props.exp} exp
      </div>
    </div>
</div>

