import componentImage from "../../assets/Images/Seitenverhältnis (1).png";
import btnImage from "../../assets/Images/Vector.png";

import "./ThirdModule.scss";

export const ThirdModule = () => {
  return (
    <div className="third-module">
      <div className="left-side">
        <h1 className="title">Ich habe nur ein wenig <h1 className="bordered-title">Hilfe gebraucht</h1></h1>
        
        <p className="description">
          Sie beobachten an Ihrer Mitarbeiterin, Ihrem Mitarbeiter schon länger
          Auffälligkeiten. Oder das Verhalten erscheint Ihnen in letzter Zeit
          verändert.
        </p>
        <div className="button-conatiner">
          <img src={btnImage}/>
          <p>Mehr erfahren</p> 
        </div>
      </div>
      <div className="right-side">
        <img src={componentImage} />
      </div>
    </div>
  );
};
