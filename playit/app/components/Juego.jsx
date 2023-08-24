
import { Link } from "@remix-run/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Juego({juego}){
    return(
        <div className="container-juego">
            <div className="imagen-juego">
                <picture>
                  <source srcSet={juego.imgw} type="image/webp" />
                  <LazyLoadImage src={juego.img} alt={`Imagen del juego ${juego.nombre}`}/>

              
                </picture>
              </div>
            <div className="titulo-juego">{juego.nombre}</div>
            
            <Link to={`/juegoss/${juego.abreviacion}`} className="buttonLink">
              Ver Juegos
            </Link>
          </div>
    )
}