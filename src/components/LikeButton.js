import React from "react";
import { connect } from "react-redux";
import { toggleLike } from "../actions/likes";

class LikeButton extends React.Component {
  onClick = e => {
    this.props.toggleLike(this.props.item);
  };
  render() {
    return (
      <button onClick={this.onClick}>
        {this.props.liked.filter(id => id === this.props.item.id).length > 0 ? "Unlike" : "Like"}
      </button>
    );
  }
}

const mapStateToProps = (state, props) => ({ liked: state.likes.map(item => item.id) });
const mapDispatchToProps = dispatch => ({ toggleLike: item => dispatch(toggleLike(item)) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeButton);
