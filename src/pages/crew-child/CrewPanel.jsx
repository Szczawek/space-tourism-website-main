import { useState } from "react";

export default function CrewPanel({ func }) {
  const [active, setActive] = useState(1);
  return (
    <ul className="crew-panel">
      <li>
        <button
          className={active == 1 ? "crew-active" : ""}
          onClick={() => {
            setActive(1);
            func("Douglas Hurley");
          }}></button>
      </li>
      <li>
        <button
          className={active == 2 ? "crew-active" : ""}
          onClick={() => {
            setActive(2);
            func("Mark Shuttleworth");
          }}></button>
      </li>
      <li>
        <button
          className={active == 3 ? "crew-active" : ""}
          onClick={() => {
            setActive(3);
            func("Victor Glover");
          }}></button>
      </li>
      <li>
        <button
          className={active == 4 ? "crew-active" : ""}
          onClick={() => {
            setActive(4);
            func("Anousheh Ansari");
          }}></button>
      </li>
    </ul>
  );
}
