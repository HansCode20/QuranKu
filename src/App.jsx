import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import JadwalSholat from "./pages/JadwalSholat";
import Kitab from "./pages/Kitab";
import SurahKitab from "./pages/SurahKitab";
import Doa from "./pages/Doa";
import AsmaulHusna from "./pages/AsmaulHusna";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sholat" element={<JadwalSholat />} />
          <Route path="/surah" element={<Kitab />} />
          <Route path="/surah/:nomor" element={<SurahKitab />} />
          <Route path="/doa" element={<Doa />} />
          <Route path="/asmaulhusna" element={<AsmaulHusna />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
