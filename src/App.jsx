import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Lab from "./components/Lab";
import Error from "./components/Error";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="bg-blue-400">
      <nav className="flex gap-3 py-3 bg-red-100 w-full justify-center">
        <NavLink to="/">
          <h4>Home</h4>
        </NavLink>
        <NavLink to="/about">
          <h4>About</h4>
        </NavLink>
        <NavLink to="/contact">
          <h4>Contact</h4>
        </NavLink>
        <NavLink to="/lab">
          <h4>Lab</h4>
        </NavLink>
      </nav>

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
