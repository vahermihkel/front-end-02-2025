import { useRef, useState } from "react";
import hinnadFailist from "../../data/hinnad.json";

function HaldaHinnad() {
  // muutuja      muutja                algväärtus
  const [hinnad, setHinnad] = useState(hinnadFailist.slice());
  const hindRef = useRef();


  const kustuta = (index) => {
    hinnadFailist.splice(index, 1);   
    setHinnad(hinnadFailist.slice()); 
  }

  const sisesta = () => {
    hinnadFailist.push(Number(hindRef.current.value));
    setHinnad(hinnadFailist.slice()); 
    hindRef.current.value = "";
  }

  const arvutaKokku = () => {
    let summa = 0;
    // hinnad.forEach(hind => summa += hind)
    hinnad.forEach(hind => summa = summa + hind);
    // summa = summa + 1500;
    // summa = summa + 899;
    return summa;
  }

  return (
    <div>
      <label htmlFor="hind">Uus hind</label> <br />
      <input id="hind" ref={hindRef} type="number" /> <br />
      <button onClick={sisesta}>Sisesta</button> <br />

      <div>{hinnad.length} tk</div>
      <table>
        <thead>
          <tr>
            <th>Järjekorranumber: al 1-st</th>
            <th>Index: al 0-st</th>
            <th>Hind</th>
            <th>Kustuta nupp</th>
          </tr>
        </thead>
        <tbody>
          {hinnad.map((auto, index) => 
            <tr key={auto}>
              <td>{index+1}</td>
              <td>{index}</td>
              <td>{auto}</td>
              <td><button onClick={() => kustuta(index)}>x</button></td>
            </tr>
          )}
        </tbody>
      </table>
      <div>Hinnad kokku: {arvutaKokku()}€</div>
    </div>
  )
}

export default HaldaHinnad

//kui saadan midagi kaasa:   onClick={() => kustuta(index)}
//kui ei saada midagi kaasa: onClick={sisesta}
//kui ei saada midagi kaasa: onClick={() => sisesta()}

// EI TOHI TEHA sellist varianti: onClick={sisesta()}
//                                onClick={kustuta(index)}
// infinite loop ---> käivitab ilma klikita

// HTMLs:    <div>Tähemärgid kokku: {arvutaKokku()}</div>