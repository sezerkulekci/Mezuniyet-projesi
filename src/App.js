import React, { useState } from "react";
import "./index.css";

import Arkaplan from "./Bilesenler/Arkaplan";
import Arama from "./Bilesenler/Arama/AramaCubugu";
import Sonuc from "./Bilesenler/Sonuc";

function App() {
  const [havaDurumu, setHavaDurumu] = useState({});

  return (
    <section className="uygulama">
      <div id="baslik">Hava Durumu</div>
      <Arkaplan arkaplan={havaDurumu.weather && havaDurumu.weather[0].main} />
      <Arama setHavaDurumu={setHavaDurumu} />
      <Sonuc hava={havaDurumu} />
    </section>
  );
}

export default App;
