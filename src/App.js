import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar1 from "./components/Navbar1";
import Overlay from "./components/Overlay";
import Navbar2 from "./components/Navbar2";
import Cards from "./components/Cards";
import Create from "./components/Create";

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Create />
      <Overlay />
      <Navbar2 />
      <Cards />
    </div>
  );
}

export default App;
