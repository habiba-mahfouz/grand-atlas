import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import Units from "./Pages/Units/Units.jsx";
import Developers from "./Pages/Developers/Developers.jsx";
import Zones from "./Pages/Zones/Zones.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import DisplayUnit from "./Pages/Units/DisplayUnit.jsx";
import ProjectsZones from "./Pages/Zones/ProjectsZones.jsx";
import Projects from "./Components/Projects.jsx";
import DisplayDeveloper from "./Pages/Developers/ProjectsDevelopers.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/units" element={<Units />} />
          <Route path="/units/:id" element={<DisplayUnit/>}></Route>
          <Route path="/developers" element={<Developers />} />
          <Route path="/developers/:id" element={<DisplayDeveloper/>}></Route>
          <Route path="/contact_us" element={<Contact />} />
          <Route path="/zones" element={<Zones />} />
          <Route path="/zones/:id" element={<ProjectsZones />} />
          <Route path="/projects/:id" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
