import React from "react";
import "./Card.css";
import food from "../images/food.jpg"; 
import heartOutline from "../images/heart-outline.png"; 
import heartFill from "../images/heart-fill.png"; 

export default function Card(props) {
   
   
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{props.author[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{props.recipeItem.title}</h5>
          <div className="card-date">{props.recipeItem.date}</div>
        </div>
      </div>
      <img className="card-image" src={food} alt="Logo" />
      <div className="card-text">{props.recipeItem.description}</div>
      <div className="card-like-bar" >
        {props.isLiked ? (
          <img className="card-like-icon" src={heartFill} alt="Logo" />
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" />
        )}
        <div className="like-text">
          <b>{props.likeCount}</b> kişi bu tarifi beğendi.
        </div>
      </div>
    </div>
  );
}