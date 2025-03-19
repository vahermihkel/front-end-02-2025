import { useRef, useState } from "react"
import autodFailist from "../../data/autod.json";
// import autodJSON from "../../data/autod.json";


function Autod() {
  const [autod, setAutod] = useState(autodFailist.slice());
  const otsingRef = useRef();

  const reset = () => {
    setAutod(autodFailist.slice());
  }

  const sorteeriAZ = () => {
    autod.sort((a, b) => a.localeCompare(b, "et"));
    setAutod(autod.slice());
  }

  const sorteeriZA = () => {
    autod.sort((a, b) => b.localeCompare(a, "et"));
    setAutod(autod.slice());
  }

  const sorteeriKolmasTahtAZ = () => {              // 01234
    autod.sort((a, b) => a[2].localeCompare(b[2])); // Volvo
    setAutod(autod.slice());
  }

  const sorteeriKasvavalt = () => {
    autod.sort((a, b) => a.length - b.length);
    setAutod(autod.slice());
  }

  const sorteeriKahanevalt = () => {
    autod.sort((a, b) => b.length - a.length);
    setAutod(autod.slice());
  }

  const filtreeriTeineTahtO = () => {
    const vastus = autodFailist.filter(auto => auto[1] === "o");
    setAutod(vastus);
  }

  const filtreeriSisaldabA = () => {
    const vastus = autodFailist.filter(auto => auto.includes("a"));
    setAutod(vastus);
  }

  const filtreeriTahemarke4 = () => {
    const vastus = autodFailist.filter(auto => auto.length === 4);
    setAutod(vastus);
  }

  const filtreeriTahemarkeVah5 = () => {
    const vastus = autodFailist.filter(auto => auto.length >= 5);
    setAutod(vastus);
  }

  const filtreeriLoppebTahegaI = () => {
    const vastus = autodFailist.filter(auto => auto.endsWith("i"));
    setAutod(vastus);
  }

  const otsi = () => {
    const vastus = autodFailist.filter(auto => auto
      .toLowerCase().includes(otsingRef.current.value.toLowerCase())
    );
    setAutod(vastus);
  }

  return (
    <div>
      <label>Otsi:</label>
      <input ref={otsingRef} onChange={otsi} type="text" /> <br />
      <div>{autod.length} tk</div>
      <button onClick={reset}>Reset</button>
      <br /><br />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>
      <button onClick={sorteeriKasvavalt}>Sorteeri tähemärgid kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri tähemärgid kahanevalt</button>
      <br /><br />
      <button onClick={filtreeriTeineTahtO}>Jäta alles kellel teine täht on o-täht</button>
      <button onClick={filtreeriSisaldabA}>Jäta alles kellel on sõnas väike a-täht</button>
      <button onClick={filtreeriTahemarke4}>Jäta alles kellel tähemärke täpselt 4</button>
      <button onClick={filtreeriTahemarkeVah5}>Jäta alles kellel tähemärke vähemalt 5</button>
      <button onClick={filtreeriLoppebTahegaI}>Jäta alles kes lõppeb i-tähega</button>


      {autod.map(auto => <div key={auto}>{auto}</div>)}
    </div>
  )
}

// key --> siia tuleb panna, mis teeb selle ühe elemendi unikaalseks. praegu tema nimetus.
// muidu läheb sinna kas ID või nimi (kui see on unikaalne)

// React soovib tsükli sisu mällu jätta, et ta ei peaks seda korduvalt tegema. iga kord kui
// läheb käima funktsioon, mis uuendab muutujat (praegusel juhul setAutod()), siis tehake
// re-renderdus ja iga re-renderdus kuvab HTMLi uuesti, aga kõik on mälus peale tsüklite HTMLs.
// selle jaoks, et tsükkel oleks mälus, peab lisama key={}

export default Autod