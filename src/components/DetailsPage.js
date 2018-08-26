import React from "react";
import LikeButton from "../components/LikeButton";

const DetailsPage = props => (
  <div>
    <h2>Repo name: {props.location.state.item.name}</h2>
    <p>Forks: {props.location.state.item.forks_count}</p>
    <LikeButton item={props.location.state.item} />
  </div>
);

export default DetailsPage;
