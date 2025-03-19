import { useState } from "react";
import kasutajadFailist from "../../data/kasutajad.json";

function Kasutajad() {
  const [kasutajad, setKasutajad] = useState(kasutajadFailist.slice());

  const sorteeriAZ = () => {
    kasutajad.sort((a,b) => a.email.localeCompare(b.email));
    setKasutajad(kasutajad.slice());
  }

  const sorteeriTahedKasv = () => {
    kasutajad.sort((a, b) => a.email.length - b.email.length);
    setKasutajad(kasutajad.slice());
  }

  // Uncaught Error: Objects are not valid as a React child (found: object with keys {email, parool}).
  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriTahedKasv}>Sorteeri tähemärgid kasvavalt</button>
      {kasutajad.map(kasutaja => <div key={kasutaja.email}>{kasutaja.email}</div>)}
    </div>
  )
}

export default Kasutajad