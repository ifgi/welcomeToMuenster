import Landing from "./Landing";
import Intro from "./Intro";
import Map from "./Map";
import Navigation from "./Navigation";
import FAQ from "./FAQ";
import Footer from "./Footer";
function Mainpage() {
  return (
    <>
      <Navigation />
      <Landing />
      <Intro />
      <FAQ />
      <Map />
      <Footer />
    </>
  );
}

export default Mainpage;
