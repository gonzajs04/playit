import { Link } from "@remix-run/react";
import joystick from "../../public/img/joystick.png";
import joystickw from "../../public/img/compressed/joystickw.webp";
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
          <source srcSet={joystickw} type="image/webp" />
          <img loading="lazy" src={joystick} alt="Imagen Joystick" />
        </picture>
        </div>
      </div>
    </div>
  );
}
