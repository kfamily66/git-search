import React from "react";

import Item from "./Item";

const ItemsList = props => (
  <React.Fragment>
    <h2>{props.label}</h2>
    <div>
      {props.items.map((item, index) => (
        <Item item={item} index={index + 1} key={item.id} liked={props.liked} />
      ))}
    </div>
  </React.Fragment>
);

export default ItemsList;
