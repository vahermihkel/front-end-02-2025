import { useRef, useState } from "react"

function Kinkekaart() {
  const [summa, setSumma] = useState(20);
  const [kogus, setKogus] = useState(1);
  const emailRef = useRef();
  const [sonum, setSonum] = useState("");

  const sisesta = () => {
    if (emailRef.current.value.includes("@") === false) {
      setSonum("Email pole korrektne");
      return; // lõpetab funktsiooni
    }
    
    if (emailRef.current.value.length < 6) {
      setSonum("Email on liiga lühike");
      return; // lõpetab funktsiooni
    }
      
    setSonum("Email edukalt lisatud");
    
  }

  return (
    <div>
      {/* <button onClick={setSumma(5)}>20€</button> ilma () => tuleb infinite loop */}
      <button className={summa === 20 ? "aktiivne" : undefined} onClick={() => setSumma(20)}>20€</button>
      <button className={summa === 50 ? "aktiivne" : undefined} onClick={() => setSumma(50)}>50€</button>
      <button className={summa === 100 ? "aktiivne" : undefined} onClick={() => setSumma(100)}>100€</button>
      <div>Kinkekaart {summa} €</div>

      <br /><br />

{/* Too many re-renders. React limits the number of renders to prevent an infinite loop. */}
      <button disabled={kogus === 1} onClick={() => setKogus(kogus - 1)}>-</button>
      <span>{kogus}</span>
      <button onClick={() => setKogus(kogus + 1)}>+</button>

      <br /><br />

      <div>{sonum}</div>
      <label>Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <button onClick={sisesta}>Sisesta</button>      
    </div>
  )
}

export default Kinkekaart