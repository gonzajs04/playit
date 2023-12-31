import { Link } from "@remix-run/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import joystick from '../../public/img/joystick.png'
import joystickw from '../../public/img/compressed/joystickw.webp'


export function meta() {
  return [
    { title: "PlayIT - Inicio" },
    { name: "description", content: "Ponte a prueba con estos juegos" },
  ];
}

export default function Index() {
  return (
    <div className="contenedor centrado">
      <div className="index">
        <div className="container-index">
          <h1 className="title">PlayIT</h1>
          <p className="emoji">👾👾👾👾👾👾</p>
          <Link to={"/juegos"} className="buttonLink">
            Ver Juegos
          </Link>
        </div>

        <div className="imagen-index">
          <picture>
            <source srcSet={joystickw} />
            <LazyLoadImage
              src={joystick}
            
              alt="Image Alt"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
