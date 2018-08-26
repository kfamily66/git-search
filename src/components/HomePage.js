import React from "react";
import { connect } from "react-redux";

import SearchBox from "./SearchBox";
import ItemsList from "./ItemsList";

const HomePage = props => (
  <React.Fragment>
    <SearchBox />
    {props.results.length > 0 && <ItemsList label="Results" items={props.results} />}
    {props.likes.length > 0 && <ItemsList label="My likes" items={props.likes} liked={true} />}
  </React.Fragment>
);

const mapStateToProps = (state, props) => ({ results: state.results, likes: state.likes });

export default connect(mapStateToProps)(HomePage);
