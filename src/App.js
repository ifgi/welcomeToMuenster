import React from "react";
import Mainpage from "./components/Mainpage";
import Error from "./components/Error";
import CookieConsent from "react-cookie-consent";

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
      // If there is an error appearing while rendering, the application will render an error component
      return <Error />;
    } else {
      return (
        <>
          <Mainpage />
          <CookieConsent
            location='bottom'
            buttonText='Einverstanden / I understand'
            cookieName='cookieAcceptBox'
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}>
            Diese Website verwendet Cookies, um die Benutzerfreundlichkeit zu
            verbessern. / This website uses cookies to enhance the user
            experience.
          </CookieConsent>
        </>
      );
    }
  }
}

export default App;
