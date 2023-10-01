import { useState } from "react";

export default function PanelDestination({ func }) {
  const [active, setActive] = useState(1);
  return (
    <ul className="panel-distination">
      <li>
        <button
          className={active == 1 ? "destination-active" : ""}
          onClick={() => {
            setActive(1);
            func("Moon");
          }}>
          MOON
        </button>
      </li>
      <li>
        <button
          className={active == 2 ? "destination-active" : ""}
          onClick={() => {
            setActive(2);
            func("Mars");
          }}>
          MARS
        </button>
      </li>
      <li>
        <button
          className={active == 3 ? "destination-active" : ""}
          onClick={() => {
            setActive(3);
            func("Europa");
          }}>
          EUROPA
        </button>
      </li>
      <li>
        <button
          className={active == 4 ? "destination-active" : ""}
          onClick={() => {
            setActive(4);
            func("Titan");
          }}>
          TITAN
        </button>
      </li>
    </ul>
  );
}
