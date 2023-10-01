import { useEffect, useState } from "react";
import obj from "./data.json";
import ground from "../background.json";
import CrewPanel from "./crew-child/CrewPanel";
export default function Crew() {
  const [crew, setCrew] = useState(obj["crew"][0]);
  function updateCrew(item) {
    const element = obj["crew"].find((e) => e["name"] == item);
    setCrew(element);
  }

  useEffect(() => {
    const element = ground.find((e) => e["name"] == "crew");
    for (const [key, value] of Object.entries(element)) {
      document.documentElement.style.setProperty(key, value);
    }
  }, []);
  return (
    <section className="crew">
      <header>
        <h2>
          <span>02</span>MEET YOUR CREW
        </h2>
      </header>
      <div className="crew-content">
        <div className="sub-crew-content">
          <p>{crew["role"]}</p>
          <h3>{crew["name"]}</h3>
          <p className="description">{crew["bio"]}</p>
          <CrewPanel func={updateCrew} />
        </div>
        <div>
          <img src={crew["images"]["png"]} alt={`Picture of ${crew["name"]}`} />
        </div>
      </div>
    </section>
  );
}
