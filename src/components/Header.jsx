import { useState } from "react"; 


export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-green-400 py-8">
     <a href="logo"><img src= {'../img/logo.jpg'} alt="perro" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} 
          >
            <span className="block h-0.5 w-8 animate-pulse bg-green-700"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-green-700"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-green-700"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} 
            >
              <svg
                className="h-8 w-8 text-green-600 "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] ">
              
            {/*<Link to="/inicio">*/}
            <li >
              <a href="#inicio">Inicio</a>
          </li>
          <li >
              <a href="#productos">Productos</a>
          </li>
          <li >
              <a href="#nosotros">Nosotros</a>
          </li>
          <li >
              <a href="#contacto">Contáctanos</a>
          </li>
          <li >
              <a href="#carrito"><img src= {'../img/carrito.png'} alt="comprar" /></a>
          </li>
          
          {/*</Link>*/}
          
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-4xl font-tipo1">
        <li >
              <a href="#inicio">Inicio</a>
          </li>
          <li >
              <a href="#productos">Productos</a>
          </li>
          <li >
              <a href="#nosotros">Nosotros</a>
          </li>
          <li >
              <a href="#contacto">Contáctanos</a>
          </li>
          <li >
              <a href="#carrito"><img src= {'../img/carrito.png'} alt="comprar" /></a>
          </li>
        </ul>
      </nav>
      
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}