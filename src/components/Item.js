import React from "react";
import { Link } from "react-router-dom";
import LikeButton from "../components/LikeButton";

const Item = props => (
  <div className="item">
    {`${props.index}. `}
    <Link to={{ pathname: "/details", state: { item: props.item } }} className="link">
      {props.item.name}
    </Link>
    {` (`}
    <LikeButton item={props.item} />
    {`)`}
  </div>
);

export default Item;
