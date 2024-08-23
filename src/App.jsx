import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import JadwalSholat from "./pages/JadwalSholat";
import Kitab from "./pages/Kitab";
import SurahKitab from "./pages/SurahKitab";
import Doa from "./pages/Doa";
import AsmaulHusna from "./pages/AsmaulHusna";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <BrowserRouter>
      <PageWrapper />
    </BrowserRouter>
  );
}

function PageWrapper() {
  const location = useLocation();
  
  // Check if the current path starts with "/surah/" to hide the MusicPlayer
  const shouldShowMusicPlayer = !location.pathname.startsWith("/surah/");

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sholat" element={<JadwalSholat />} />
        <Route path="/surah" element={<Kitab />} />
        <Route path="/surah/:nomor" element={<SurahKitab />} />
        <Route path="/doa" element={<Doa />} />
        <Route path="/asmaulhusna" element={<AsmaulHusna />} />
      </Routes>
      {shouldShowMusicPlayer && <MusicPlayer />}
    </>
  );
}

export default App;
