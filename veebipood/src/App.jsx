import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import LisaToode from './pages/LisaToode';
import Esindused from './pages/arrays/Esindused';
import Menu from './components/Menu';
import Kinkekaart from './pages/Kinkekaart';
import NotFound from './pages/NotFound';
import Kalkulaator from './pages/Kalkulaator';
import Autod from './pages/arrays/Autod';
import Hinnad from './pages/arrays/Hinnad';
import Kasutajad from './pages/arrays/Kasutajad';
import Tootajad from './pages/arrays/Tootajad';
import Tooted from './pages/arrays/Tooted';
import ArraysHome from './pages/arrays/ArraysHome';
import HaldaHome from './pages/halda/HaldaHome';
import HaldaAutod from './pages/halda/HaldaAutod';
import HaldaEsindused from './pages/halda/HaldaEsindused';
import HaldaHinnad from './pages/halda/HaldaHinnad';
import HaldaKasutajad from './pages/halda/HaldaKasutajad';
import HaldaTootajad from './pages/halda/HaldaTootajad';
import HaldaTooted from './pages/halda/HaldaTooted';

function App() {
  // vasakpoolne --> välja näitamiseks
  // parempoolne --> muutmiseks
  // useState sulgude sees on algväärtus
  const [count, setCount] = useState(0)
  // const --> keelab muutuja võrdusmärgiga muutmise

  return (
    <>
       <Menu />

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <Routes>
          <Route path='/' element={ <Avaleht /> } />
          <Route path='/ostukorv' element={ <Ostukorv /> } />
          <Route path='/seaded' element={ <Seaded /> } />
          <Route path='/lisa-toode' element={ <LisaToode /> } />
          <Route path='/osta-kinkekaart' element={ <Kinkekaart /> } />
          <Route path='/kalkulaator' element={ <Kalkulaator /> } />

          <Route path='/arrays-home' element={ <ArraysHome /> } />
          <Route path='/autod' element={ <Autod /> } />
          <Route path='/esindused' element={ <Esindused /> } />
          <Route path='/hinnad' element={ <Hinnad /> } />
          <Route path='/kasutajad' element={ <Kasutajad /> } />
          <Route path='/tootajad' element={ <Tootajad /> } />
          <Route path='/tooted' element={ <Tooted /> } />

          <Route path='/halda-home' element={ <HaldaHome /> } />
          <Route path='/halda-autod' element={ <HaldaAutod /> } />
          <Route path='/halda-esindused' element={ <HaldaEsindused /> } />
          <Route path='/halda-hinnad' element={ <HaldaHinnad /> } />
          <Route path='/halda-kasutajad' element={ <HaldaKasutajad /> } />
          <Route path='/halda-tootajad' element={ <HaldaTootajad /> } />
          <Route path='/halda-tooted' element={ <HaldaTooted /> } />

          <Route path='/*' element={ <NotFound /> } />
        </Routes>
        
    </>
  )
}

export default App

// 1. react-router-dom (navigeerimine: BrowserRouter, Link, Routes), HTML, CSS
// 2. useState algus. Dünaamiline CSS. Dünaamiline väljakuvamine &&
// 3. useRef, function, kontrollid (if/else, return)
// 4. kalkulaator (useRef, kontrollid, useState), firebase, favicon, font, tabi nimi, toastify
// 5. arrays/listid: väljakuvamine, sorteerimine, filtreerimine, kustutamine, tabel
// 6.E 19.03 array'sse lisamine. faili tõstmine. kui filtreerida, siis võtab originaalist, mitte ei jäta.
//           kokkuarvutus, otsing
// 7.T 25.03  objektid. URL muutuja
// 8.E 31.03
// 9.K 02.04

