import { Link } from "react-router-dom"

function Menu() {
  return (
    <div>
       <Link to="/">
          <img className="pilt" src="https://i0.wp.com/accelerista.com/wp-content/uploads/2018/06/nobe.jpg" alt="" />
        </Link>
        
        {/* <span className="tekst">Osta meie tooteid</span> */}

        <Link to="/ostukorv">
          <button>Ostukorvi</button>
        </Link>

        <Link to="/seaded">
          <button>Seaded</button>
        </Link>

        <Link to="/lisa-toode">
          <button>Lisa toode</button>
        </Link>

        <Link to="/esindused">
          <button>Esindused</button>
        </Link>
    </div>
  )
}

export default Menu