import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import JadwalSholat from "./pages/JadwalSholat";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sholat" element={<JadwalSholat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
