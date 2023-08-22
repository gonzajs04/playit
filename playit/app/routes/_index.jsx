import { Link } from "@remix-run/react";
import joystick from "../../public/img/joystick.png";
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
          <img src={joystick} alt="Imagen Joystick" />
        </picture>
        </div>
      </div>
    </div>
  );
}