import React from 'react';
import '../App.css';

const Card = props => {
  return (
    <div className="main-card">
      <img alt="avatar" className="card-image" src={props.avatar_url}/>
      <div>
        <div className="card-name">{props.name}</div>
        <div>{props.bio}</div>
        <div>{props.public_repos} Repositories</div>
      </div>
    </div>
  )
};

export default Card;
