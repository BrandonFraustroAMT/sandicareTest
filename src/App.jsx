import Navbar from "./components/navbar/Navbar"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import './App.css'

function App() {

  return (
    <>
      <div className="container-background">
        {/* CIRCULO ROJO */}
        <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 3000 3000" className="svg-left ">
          <defs>
            <radialGradient id="Degradado_sin_nombre_38" data-name="Degradado sin nombre 38" cx="1500" cy="1500" fx="1500" fy="1500" r="2000" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#f1d6dc"/>
              <stop offset="1" stopColor="#f8f8f8" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <circle className="circuloRojo" cx="1500" cy="1500" r="2000" fill="url(#Degradado_sin_nombre_38)"/>
        </svg>

        {/* CIRCULO AZUL */}
        <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 3000 3000" className="svg-right">
          <defs>
            <radialGradient id="Degradado_sin_nombre_39" data-name="Degradado sin nombre 39" cx="1500" cy="1500" fx="1500" fy="1500" r="2000" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#cfd5dd"/>
              <stop offset="1" stopColor="#f8f8f8" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <circle className="circuloAzul" cx="1500" cy="1500" r="2000"/>
        </svg>
      </div>
        <Navbar />
        <Main /> 
        {/* <Footer /> */}
    </>
  )
}

export default App
