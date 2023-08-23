
import { Link } from "@remix-run/react";
export default function Juego({juego}){
    return(
        <div className="container-juego">
            <div className="imagen-juego">
                <picture>
                  <source srcSet={juego.imgw} type="image/webp" />
                  <img loading="lazy" src={juego.img} alt={`imagen juego ${juego.nombre}`} />
                </picture>
              </div>
            <div className="titulo-juego">{juego.nombre}</div>
            
            <Link to={`/juegoss/${juego.abreviacion}`} className="buttonLink">
              Ver Juegos
            </Link>
          </div>
    )
}