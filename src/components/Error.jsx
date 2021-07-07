import { useSelector } from "react-redux";
//import the pictures
import errorPicPrimary from "../img/error_primary.svg";
import errorPicMaster from "../img/error_master.svg";

function Error({ center, zoom }) {
  const language = useSelector((state) => state.language);
  return (
    <div className='error-window'>
      {language === "englisch" ? (
        <>
          <h1>Ups! Something went wrong.</h1>
          <p>Please refresh the page to go on or try it again later.</p>
          <img src={errorPicMaster} width='75%' height='auto' alt='Error' />
        </>
      ) : language === "german" ? (
        <>
          <h1>Ups! Da ist etwas schief gelaufen.</h1>
          <p>
            Bitte lade die Seite neu, um fortzufahren oder versuche es zu einem
            späteren Zeitpunkt erneut.
          </p>
          <img src={errorPicPrimary} width='75%' height='auto' alt='Error' />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Error;
