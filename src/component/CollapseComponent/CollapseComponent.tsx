import { useState } from "react";

import ButtonImg from "../../assets/Images/Button.png";

import "./CollapseComponent.scss";

export const CollapseComponent = () => {
  const [indexOfCollapse, setIndexOfCollapse] = useState(0);

  const listForItems = [
    {
      title: "Weiss nicht, was ich werden möchte",
      descrription: "Ich bin planlos und tu mich schwer.",
      content: {
        title: "Suche das Gespräch mit deinem Vorgesetzten",
      },
      index: 0,
    },
    {
      title: "Ich bekomme nur absagen",
      descrription: "Bewerbungen sind nicht erfolgreich",
      content: {
        title: "Suche das Gespräch mit deinem Vorgesetzten - 2",
      },
      index: 1,
    },
    {
      title: "Ich weiss nicht wie ich vorgehen muss",
      descrription: "Ich kann mich nicht selber bewerben.",
      content: {
        title: "Suche das Gespräch mit deinem Vorgesetzten - 3",
      },
      index: 2,
    },
    {
      title: "Ich erfülle die Erwartungen nicht",
      descrription: "Achten Sie auf die ersten anzeichen.",
      content: {
        title: "Suche das Gespräch mit deinem Vorgesetzten - 4",
      },
      index: 3,
    },
  ];

  return (
    <div className="collapse-component">
      <div className="content">
        <h1 className="collapse-title">Häufige Probleme und wie </h1>
        <h2 className="bordered-title">wir helfen</h2>
        <div className="container">
          <div className="item-container">
            {listForItems.map((item, index) => (
              <div
                className={
                  item.index == indexOfCollapse
                    ? "item-collapse"
                    : "item-collapse-active"
                }
                key={index}
                onClick={() => setIndexOfCollapse(item.index)}
              >
                <div>
                  <p>{item.title}</p>
                  <p>{item.descrription}</p>
                </div>

                {/* <input type="checkbox"  onClick={() => handleClick(index)}/> */}
                <img src={ButtonImg} width="20px" height="20px" />
              </div>
            ))}
          </div>

          <div className="content-container">
            {listForItems.map(
              (item) =>
                item.index == indexOfCollapse && (
                  <div>
                    <h1 className="content-title">{item.content.title}</h1>
                    <p className="content-description">
                      Es ist nicht einfach, sich in einem Betrieb
                      zurechtzufinden, in dem die unterschiedlichsten Leute
                      zusammen arbeiten. Probleme entstehen häufig, wenn
                      Menschen auf absolut anderen Wellenlängen sind. Du kommst
                      mit der Art deines Berufsbildners oder deiner
                      Berufsbildnerin überhaupt nicht klar?
                    </p>
                    <h1 className="content-title">Suche das Gespräch mit deinem Vorgesetzten</h1>
                    <ul>
                      <li>
                        Die Jugendlichen entwickeln konkrete
                        Berufsvorstellungen.
                      </li>
                      <li>
                        Sie wählen eine Anschlusslösung, die je nach
                        Herkunftsschultyp variiert.{" "}
                      </li>
                      <li>
                        Für Jugendliche aus dem 9. und 10. Schuljahr ist dies
                        vor allem die Entscheidung für eine Berufslehre, eine
                        Mittelschule oder ein Zwischenjahr
                      </li>
                      <li>
                        Die Phase endet mit einer konkreten beruflichen
                        Entscheidung.
                      </li>
                      <li>
                        Die Phase endet mit einer konkreten beruflichen
                        Entscheidung.
                      </li>
                    </ul>
                    <button className="btn">Mehr erfahren</button>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
