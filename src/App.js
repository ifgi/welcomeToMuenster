import React from "react";
import Mainpage from "./components/mainpage/Mainpage";
import Error from "./components/Error";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Error />;
    } else {
      return <Mainpage />;
    }
  }
}

export default App;
