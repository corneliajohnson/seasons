import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errorMesaage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMesaage && !this.state.lat) {
      return <div>Error: {this.state.errorMesaage}</div>;
    }

    if (!this.state.errorMesaage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
