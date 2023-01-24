import "./SecondModule.scss";

import componentImage from "../../assets/Images/Seitenverhältnis.png";
import btnImage from "../../assets/Images/Vector.png";

export const SecondModule = () => {
  return (
    <div className="second-module">
      <div className="left-side">
        <img src={componentImage} width="100%" />
      </div>
      <div className="right-side">
        <h1 className="title">Nach dem 9.Schuljar hat's  <h1 className="bordered-title">geklappt</h1></h1>
       
        <p className="description">
          Wenn am Ende der obligatorischen Schulzeit der Übertritt in eine
          Berufsbildung (noch) nicht möglich ist, gibt es im Rahmen der
          Sonderschulung oder eines Brückenangebotes verschiedene Möglichkeiten
          für die vertiefte Berufswahlvorbereitung.
        </p>
        <div className="button-conatiner">
          <img src={btnImage}/>
          <p>Mehr erfahren</p> 
        </div>
      </div>
    </div>
  );
};
