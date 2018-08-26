import React from "react";
import { connect } from "react-redux";
import { requestRepos } from "../actions/repos";

class SearchBox extends React.Component {
  onInputChange = e => {
    const value = e.target.value;
    this.props.requestRepos(value);
  };
  render() {
    return (
      <div className="search-box">
        <input type="text" placeholder="Search..." onChange={this.onInputChange} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  requestRepos: value => dispatch(requestRepos(value))
});

export default connect(
  undefined,
  mapDispatchToProps
)(SearchBox);
