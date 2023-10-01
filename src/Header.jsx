import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function update() {
  return window.innerWidth > 655 ? false : true;
}

if (!localStorage.getItem("tab")) {
  localStorage.setItem("tab", "home");
}
export default function Header() {
  const [activeLink, setActiveLink] = useState(localStorage.getItem("tab"));
  const [openMenu, setOpenMenu] = useState(update());

  function check() {
    setOpenMenu(update());
  }

  useEffect(() => {
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("resize", check);
    };
  });

  return (
    <header className="navigation-case">
      <img className="logo" src="assets/shared/logo.svg" alt="Logo" />
      {openMenu && (
        <button onClick={() => setOpenMenu(false)} className="hamburger">
          <img src="assets/shared/icon-hamburger.svg" alt="open menu button" />
        </button>
      )}
      <hr className="decoration" />
      <nav className={`navigation ${openMenu ? "vanish" : ""}`}>
        <button className="menu-close" onClick={() => setOpenMenu(true)}>
          <img src="assets/shared/icon-close.svg" alt="close menu button" />
        </button>
        <ul>
          <li
            className={activeLink == "home" ? "active-link" : ""}
            onClick={() => setActiveLink("home")}>
            <Link onClick={() => localStorage.setItem("tab", "home")} to="/">
              <span className="num">00</span>Home
            </Link>
          </li>
          <li
            className={activeLink == "destination" ? "active-link" : ""}
            onClick={() => setActiveLink("destination")}>
            <Link
              onClick={() => localStorage.setItem("tab", "destination")}
              to="destination">
              <span className="num">01</span>Destination
            </Link>
          </li>
          <li
            className={activeLink == "crew" ? "active-link" : ""}
            onClick={() => setActiveLink("crew")}>
            <Link onClick={() => localStorage.setItem("tab", "crew")} to="crew">
              <span className="num">02</span>Crew
            </Link>
          </li>
          <li
            className={activeLink == "technology" ? "active-link" : ""}
            onClick={() => setActiveLink("technology")}>
            <Link
              onClick={() => localStorage.setItem("tab", "technology")}
              to="technology">
              <span className="num">03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
