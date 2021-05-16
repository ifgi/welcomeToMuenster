import Landing from "./Landing";
import Intro from "./Intro";
import Selection from "./Selection";
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
      <Selection />
      <Map />
      <Footer />
    </>
  );
}

export default Mainpage;
