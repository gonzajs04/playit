import arrow from "../../public/img/arrow.png";
import { Link } from "@remix-run/react";

export default function Volver({children}){
   return(
    <div className="container-arrow"   style={{ backgroundColor: "#8427A9", borderRadius: "50%"   }}>
    <Link
      to={`${children}`}
    >
      <picture>
        <img loading="lazy" src={arrow} alt="flecha volver" />
      </picture>
    </Link>
  </div>
   )
}