import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
} from "@remix-run/react";
import styles from "./styles/index.css";
import normalize from './styles/normalize.css'
import Mensaje from "./components/Mensaje";
import Volver from "./components/Volver";
import errorImg from "../public/img/error.png";
import errorImgw from "../public/img/compressed/errorw.webp";
import ico from '../public/img/ico/joystick.ico'


export function meta() {
  return [
    { title: "PlayIT - Juega y disfruta" },

    { name:"description", content: "Ponte a prueba con estos juegos" },

  ];
}
export function links() {
  return [
     {rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: ico,
      },
    { rel: "stylesheet", href: styles },
    {
      rel: "stylesheet",
      href:normalize,
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap",
    },
    

  ];
}


export function Head(){
  return(
    <head>
      <meta charSet="utf-8" /> {/*RECOMENDED BY REMIX RUN */}
        <meta name="viewport" content="width=device-width,initial-scale=1"/> {/*RECOMENDED BY REMIX RUN */}
        <Meta />
        <Links />
    </head>
  )
}
export default function App() {
  return (
 
      <Document>
        <Outlet />
      </Document>
    
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <Head/>

      <body>
        {children}
        <LiveReload></LiveReload>
        <Scripts />

      </body>

    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (error) {
    return (
      <Document>

        <Volver>/</Volver>
        <div className="container-img">
          <picture>
            <source srcSet={errorImgw}  type="image/webp"/>
            <img loading="lazy" src={errorImg} alt="Error img" />
          </picture>
        </div>

        <Mensaje>
          <p
            style={{
              color: "green",
              textTransform: "uppercase",
              fontSize: "3rem",
              textAlign: "center",
            }}
          >
       
            La Pagina buscada no existe
          </p>
          <p
            style={{
              color: "white",
              textTransform: "uppercase",
              margin: "0",
              fontSize: "1.7rem",
              textAlign: "center",
            }}
          >
            Error tipo {error.status}
          </p>
        </Mensaje>
      </Document>
    );
  }
}
