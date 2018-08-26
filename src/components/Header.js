import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = props => (
  <header>
    <Link to="/" className="link">
      <div>Home page</div>
    </Link>
    <div>Likes ({props.likeCounter})</div>
  </header>
);

const mapStateToProps = (state, props) => ({ likeCounter: state.likes.length });

export default connect(mapStateToProps)(Header);
