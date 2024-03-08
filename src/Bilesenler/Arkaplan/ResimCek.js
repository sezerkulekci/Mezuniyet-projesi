import yagmurlu from "../../Resimler/rainy.jpg";
import karli from "../../Resimler/karli.jpeg";
import gunesli from "../../Resimler/sunny.webp";
import bulutlu from "../../Resimler/cloud.jpg";
import sisli from "../../Resimler/foggy.webp";
import gokkusagi from "../../Resimler/rainbow.webp";
import firtinali from "../../Resimler/Storm.jpg";

function ResimCek({ durum }) {
  switch (durum) {
    case "Rain":
      return <img className="arkaplan-resim" src={yagmurlu} alt="yagmurlu" />;
    case "Drizzle":
      return <img className="arkaplan-resim" src={yagmurlu} alt="yagmurlu" />;
    case "Clear":
      return <img className="arkaplan-resim" src={gunesli} alt="gunesli" />;
    case "Snow":
      return <img className="arkaplan-resim" src={karli} alt="karli" />;
    case "Mist":
      return <img className="arkaplan-resim" src={sisli} alt="sisli" />;
    case "Storm":
      return <img className="arkaplan-resim" src={firtinali} alt="firtinali" />;
    case "Clouds":
      return <img className="arkaplan-resim" src={bulutlu} alt="bulutlu" />;
    default:
      return <img className="arkaplan-resim" src={gokkusagi} alt="gokkusagi" />;
  }
}

export default ResimCek;
