import { useEffect, useState } from "react";
import obj from "./data.json";
import ground from "../background.json";
import TechPanel from "./technology-child/TechPanel";
export default function Technology() {
  const [technology, setTechnology] = useState(obj["technology"][0]);

  function update(item) {
    const element = obj["technology"].find((e) => e["name"] == item);
    setTechnology(element);
  }

  useEffect(() => {
    const element = ground.find((e) => e["name"] == "technology");
    for (const [key, value] of Object.entries(element)) {
      document.documentElement.style.setProperty(key, value);
    }
  }, []);
  return (
    <section className="technology">
      <header className="tech-title">
        <h2>
          <span className="num">03</span> SPACE LAUNCH 101
        </h2>
      </header>
      <div className="tech-content">
        <div className="sub-tech-content">
          <TechPanel func={update} />
          <div className="tech-info">
            <p>THE TECHNOLOGY...</p>
            <h3>{technology["name"]}</h3>
            <p className="description">{technology["description"]}</p>
          </div>
        </div>
        <picture>
          <source
            media="(max-width: 980px)"
            srcSet={technology["images"]["landscape"]}
          />
          <img src={technology["images"]["portrait"]} alt="space technology" />
        </picture>
      </div>
    </section>
  );
}
