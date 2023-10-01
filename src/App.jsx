import { Routes, Route } from "react-router-dom";
import Crew from "./pages/Crew";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Header from "./Header";
import Destination from "./pages/Destination";
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destination/*" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
    </>
  );
}
