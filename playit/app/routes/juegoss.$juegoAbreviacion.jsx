import { useLoaderData } from "@remix-run/react";
import {getPalabras} from '../models/palabras.server.js';
import styles from "../styles/juegos.css";

import { ABR } from '../helpers/helpers.js'
import Typing from "../components/Typing.jsx";
import Tateti from "../components/Tateti.jsx";

export function meta({params}) {

    return [
      { title: `PlayIT -  ${params.juegoAbreviacion}` },
      { name:"description", content: "Ponte a prueba con estos juegos" },
      { viewport: "width=device-width, initial-scale=1" },
    ];
  }


export async function loader({ params }) {
    const words = await getPalabras();
    const ABREVIACION = params;
    return [ABREVIACION.juegoAbreviacion,words];
}

export function links() {
    return [{ rel: "stylesheet", href: styles }];
  }
export default function Juego() {
  
    const data = useLoaderData();

    if(data?.length>0){
        return (
            <>
                {data[0] === ABR.TY ? (
                    <Typing
                         data={data}
                    />
                ):(
                    <Tateti/>
                )}
            </>
        );
    }
   
}