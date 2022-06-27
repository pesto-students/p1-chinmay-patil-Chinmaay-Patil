import React from "react";
import "./index.css";
import { connect } from "react-redux";
import flipChange from "./Redux/dispatcher";

function mapStateToProps(props) {
  return {
    change: props.flip
  };
}

function mapDispatchToProps(dispatch) {
  return {
    flipLight: () => dispatch(flipChange())
  };
}

class App extends React.Component {
  render() {
    const lightedness = this.props.change ? "lit" : "dark";
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={() => this.props.flipLight()}>flip</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
