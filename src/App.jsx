import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Recommend from "./pages/Recommend";

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/food" element={<Recommend />} />
    </Routes>
  );
}

export default App;
