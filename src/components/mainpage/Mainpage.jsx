import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../actions";
import Landing from "./Landing";
import Intro from "./Intro";
import Map from "./Map";
import Navigation from "./Navigation";
import FAQ from "./FAQ";
import Discover from "./MapDescription";
import Footer from "./Footer";
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
      <FAQ />
      <Discover />
      <Map />
      <Footer />
    </>
  );
}

export default Mainpage;
