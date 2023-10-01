import { useEffect } from "react";
import ground from "../background.json"
export default function Home() {
  useEffect(() => {
    const element = ground.find((e) => e["name"] == "home");
    for (const [key, value] of Object.entries(element)) {
      document.documentElement.style.setProperty(key, value);
    }
  }, []);
  return (
    <section className="home">
      <header>
        <p>SO, YOU WANT TO TRAVEL TO</p>
        <h1>SPACE</h1>
        <p className="description">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </header>
      <button className="explore">EXPLORE</button>
    </section>
  );
}
