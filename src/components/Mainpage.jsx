import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "../actions";
import Landing from "./mainpage/Landing";
import Intro from "./mainpage/Intro";
import Map from "./mainpage/Map";
import Navigation from "./mainpage/Navigation";
import Studies from "./mainpage/Studies";
import FirstSteps from "./mainpage/FirstSteps";
import ContactPoints from "./mainpage/ContactPoints";
import FAQ from "./mainpage/FAQ";
import Discover from "./mainpage/MapDescription";
import Footer from "./mainpage/Footer";
import { useCookies } from "react-cookie";

function Mainpage() {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["language"]);

  useEffect(() => {
    // eslint-disable-next-line no-lone-blocks
    {
      cookies.language !== undefined
        ? dispatch(setLanguage(cookies.language))
        : dispatch(setLanguage("german"));
    }
  }, []);

  return (
    <>
      <Navigation />
      <Landing />
      <Intro />
      <Studies />
      <ContactPoints />
      <FirstSteps />
      <FAQ />
      <Discover />
      <Map />
      <Footer />
    </>
  );
}

export default Mainpage;
