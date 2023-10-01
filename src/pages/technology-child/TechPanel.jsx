import { useState } from "react";

export default function TechPanel({ func }) {
  const [active, setActive] = useState(1);
  return (
    <ul className="tech-panel">
      <li>
        <button
          className={active == 1 ? "active-panel":""}
          onClick={(e) => {
            setActive(e.target.textContent);
            func("Launch vehicle");
          }}>
          1
        </button>
      </li>
      <li>
        <button
          className={active == 2 ? "active-panel":""}
          onClick={(e) => {
            setActive(e.target.textContent);
            func("Spaceport");
          }}>
          2
        </button>
      </li>
      <li>
        <button
          className={active == 3 ? "active-panel":""}
          onClick={(e) => {
            setActive(e.target.textContent);
            func("Space capsule");
          }}>
          3
        </button>
      </li>
    </ul>
  );
}
