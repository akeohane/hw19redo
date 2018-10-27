import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
      </ul>
    </div>
    <span onClick={() => props.onTheClick(props.id,props.points,props.clicked)} className="remove">
      𝘅
    </span>
    {/* <span onClick={() => props.addScore(props.points)} className="remove">
      𝘅
    </span>
    <span onClick={() => props.stateToTrue(props.id)} className="remove">
      𝘅
    </span> */}
    {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */}
  </div>
);

export default FriendCard;
