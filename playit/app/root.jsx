import {Meta,Links,Outlet,Scripts,LiveReload} from '@remix-run/react';
import styles from './styles/index.css'

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
    {rel:"stylesheet", href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"},
    {rel:"preconnect", href:"https://fonts.googleapis.com"},
    {rel:"preconnect", href:"https://fonts.gstatic.com", crossOrigin:"true"},
    {rel:"stylesheet", href: "https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"}
    
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
