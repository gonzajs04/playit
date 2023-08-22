import {Meta,Links,Outlet,Scripts,LiveReload} from '@remix-run/react';
import styles from './styles/index.css'
import joystick from '../public/img/joystick.png'

export function meta(){
  return[
    {title:"PlayIT - Juega y disfruta"},
    { charset: "utf-8" },
    { viewport: "width=device-width, initial-scale=1" },
    {description:"Juega y disfruta los mejores juegos"},
   
   
  ]
}
export function links(){
  return[
    {rel:"stylesheet",href:styles},
    {rel:"stylesheet", href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"}
  ]
}

export default function App(){
  return(
    <Document>
        <Outlet/>
    </Document>
  )
}

 function Document({children}) {
  return (

    <html lang="es">
    <head>
        
        <Meta/>
        <Links/>
        
    </head>
    <body>
      {children}
      <LiveReload></LiveReload>
      <Scripts/>
    </body>
    </html>
  );
}
