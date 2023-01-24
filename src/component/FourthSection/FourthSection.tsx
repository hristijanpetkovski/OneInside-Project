import componentImage from "../../assets/Images/Seitenverhältnis (2).png";
import btnImage from "../../assets/Images/Vector.png";


import "./FourthSection.scss"

export const FourthSection = () => {

    return <div className="fourth-module">
    <div className="left-side">
    <img src={componentImage} />
    </div>
    <div className="right-side">
    
      <h1 className="title"> Viele waren bereit, <h1 className="bordered-title">mir zu helfen</h1></h1>
      
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
  </div>
}