import React, { useState } from "react";

function AramaCubugu({ setHavaDurumu }) {
  const api = {
    base: "http://weather.emrekucuk.com.tr/WeatherForecast?cityName",
    key: "8ef4036aff7ca93866c5cea003854060",
  };

  const [araParametre, setAraParametre] = useState("");

  const ara = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}=${araParametre}`)
        .then((veri) => veri.json())
        .then((sonuc) => {
          setAraParametre("");
          setHavaDurumu(sonuc);
        });
    }
  };

  return (
    <div className="arama">
      <input
        className="arama-input"
        type="text"
        placeholder="Şehir"
        onChange={(e) => setAraParametre(e.target.value)}
        value={araParametre}
        onKeyPress={ara}
      />
    </div>
  );
}

export default AramaCubugu;
