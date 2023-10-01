import PanelDestination from "./destination-child/PanelDestination";
import obj from "./data.json";
import ground from "../background.json";
import { useEffect, useState } from "react";
export default function Destination() {
  const [planet, setPlanet] = useState(obj["destinations"][0]);
  function update(item) {
    const element = obj["destinations"].find((e) => e["name"] == item);
    setPlanet(element);
  }
  useEffect(() => {
    const element = ground.find((e) => e["name"] == "destination");
    for (const [key, value] of Object.entries(element)) {
      document.documentElement.style.setProperty(key, value);
    }
  }, []);
  return (
    <section className="destination">
      <header>
        <h2>
          <span>01</span>PICK YOUR DESTINATION
        </h2>
      </header>
      <div className="dest-content">
        <img src={planet["images"]["png"]} alt="" />
        <div className="sub-dest-content">
          <PanelDestination func={update} />
          <h3>{planet["name"]}</h3>
          <p className="description">{planet["description"]}</p>
          <hr />
          <div className="planet-info">
            <div>
              <p className="info">ANG. DISTANCE</p>
              <p className="num">{planet["distance"]}</p>
            </div>
            <div>
              <p className="info">EST. TRAVEL TIME</p>
              <p className="num">{planet["travel"]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
