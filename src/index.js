import React from "react";
import ReactDOM from "react-dom";
import HemisphereDisplay from "./HemisphereDisplay";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => {
//       console.log(position);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
//   return (
//     <>
//       <h1>Hello World</h1>
//     </>
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   latitude: null,
      //   longitude: null,
      //   errorMessage: null,
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          errorMessage: null,
        });
      },
      (error) => {
        this.setState({
          errorMessage: error.message,
        });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          {/* Latitude: {this.state.latitude}
          <br />
          Longitude: {this.state.longitude} */}
          <HemisphereDisplay latitude={this.state.latitude} />
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
