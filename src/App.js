import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
// import CharacterPage from "./pages/CharacterPage";
import { Navbar } from "./components/NavigationBar/NavigationBar";
import { NavLink, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <h1> The Sorting Hat App</h1>
        <Routes>
          {/* more pages to be added here later */}
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/characters" element={<CharacterPage />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
