import { useEffect, useState } from "react";
import "./Scroll.css";

import landingImage1 from '../../assets/img/Mockups_Landing-02.png'
import landingImage2 from '../../assets/img/Mockups_Landing-03.png'
import landingImage3 from '../../assets/img/Mockups_Landing-04.png'
import landingImage4 from '../../assets/img/Mockups_Landing-05.png'
import landingImage5 from '../../assets/img/Mockups_Landing-06.png'
import landingImage6 from '../../assets/img/Mockups_Landing-07.png'
import landingImage7 from '../../assets/img/Mockups_Landing-08.png'

function lerp(start, end, t) {
  return start + (end - start) * t;
}
const threshold = 3330;

const Scroll = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const boxMirror = document.querySelector(".boxMirror");
      const boxMirrorChild = document.querySelector(".kCSdCn");

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;

      const maxScale = 20;
      const scale = 1 + scrollFraction * (maxScale - 0.9);

      const additionalOffset = (scrollTop - threshold);
      
      let newTranslateY = translateY;

      const maxWidthMirror = window.innerWidth - 1440;
      if (scrollTop >= 3333 && scrollTop <= 7748) {
        // Calcula la nueva posición de translateY usando interpolación lineal
        newTranslateY = lerp(translateY, additionalOffset, 0.7);
        setTranslateY(newTranslateY);
        boxMirror.style.transform = `translate(${maxWidthMirror}px, ${newTranslateY}px)`;
        boxMirrorChild.style.height = "974px";
        boxMirrorChild.style.borderBottom = "90px solid #F8F8F8";
      } else {
        boxMirrorChild.style.height = "937px";
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [translateY]);

  return (
    <div>
      <div className="pages__WorksWrap-sc-12y80si-0 hKULn">
        <div className="grid-container">
          {/* GRID 1 */}
          <div className="grid-item text">
            <div className="TextParts__Wrapper-sc-1j2eo1t-0 yrtrU">
              <div className="TextParts__TopBar-sc-1j2eo1t-1 dGbIGI">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 46 46"
                >
                  <rect
                    width="46"
                    height="46"
                    fill="#232265"
                    rx="7"
                    style={{
                      fill: "color(display-p3 0.1373 0.1333 0.3961)",
                      fillopacity: "1",
                    }}
                  ></rect>
                  <path
                    stroke="#3FAEFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M24 26.5h-4.5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C14 29.907 14 30.604 14 32m14-3 2 2 4-4m-7.5-8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
                    style={{
                      stroke: "color(display-p3 0.2482 0.6843 1)",
                      strokeOpacity: "1",
                    }}
                  ></path>
                </svg>
                01.
              </div>
              <div className="TextParts__BlueTitle-sc-1j2eo1t-3 bjwia-D">
                Primero, Sandi y tú establecen las <span>fechas</span> para el{" "}
                <span>Check-Up</span>
              </div>
              <div className="TextParts__Description-sc-1j2eo1t-5 eEsxam">
                Los expertos en salud de Sandi realizan la toma de muestras en
                los lugares de trabajo o en la red de laboratorios asociados con
                nosotros
              </div>
            </div>
          </div>
          {/* IMAGEN */}
          <div className="grid-item image">
              
            <div className="sc-04-HowItWorks__ImageBox-sc-iepctg-4 HuTbH">
              <div
                className="ScaledContent__Outer-sc-mvrs02-0 tiXzS"
                style={{ width: "650px", height: "615px" }}
              >
                <div
                  scale="1"
                  className="ScaledContent__Inner-sc-mvrs02-1 eOUgPq"
                >
                  <div className="IllustrationOne__Graphic-sc-myfi4b-1 lnklTH">
                    <img src={landingImage1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GRID 2 */}
          <div className="grid-item text">
            <div className="TextParts__Wrapper-sc-1j2eo1t-0 yrtrU">
              <div className="TextParts__TopBar-sc-1j2eo1t-1 TextParts__GreenTopBar-sc-1j2eo1t-2 dGbIGI hYayKB">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 46 46"
                >
                  <rect
                    width="46"
                    height="46"
                    fill="#232265"
                    rx="7"
                    style={{
                      fill: "color(display-p3 0.1373 0.1333 0.3961)",
                      fillopacity: "1",
                    }}
                  ></rect>
                  <path
                    stroke="#5CFFB1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M30.5 18.134 22 22.856m0 0-8.5-4.722m8.5 4.722v9.5m2-.611-1.223.68c-.284.157-.425.236-.576.267-.133.027-.27.027-.402 0-.15-.031-.292-.11-.576-.268l-7.4-4.11c-.3-.167-.45-.25-.558-.369a1 1 0 0 1-.215-.364c-.05-.152-.05-.324-.05-.666v-8.117c0-.343 0-.514.05-.667a1 1 0 0 1 .215-.364c.109-.119.258-.202.558-.368l7.4-4.111c.284-.158.425-.237.576-.268.133-.027.27-.027.402 0 .15.031.292.11.576.268l7.4 4.11c.3.167.45.25.558.369a1 1 0 0 1 .215.364c.05.152.05.324.05.666v4.559m-13.5-8 9 5m-.5 8.5 2 2 4-4"
                    style={{
                      stroke: "color(display-p3 0.3595 1 0.6926)",
                      strokeOpacity: "1",
                    }}
                  ></path>
                </svg>
                02.
              </div>
              <div className="TextParts__BlueTitle-sc-1j2eo1t-3 TextParts__GreenTitle-sc-1j2eo1t-4 bjwia-D SHqEf">
                Nos <span>indicas</span> a quienes <span>cuidaremos</span> con
                Check A Tu Salud
              </div>
              <div className="TextParts__Description-sc-1j2eo1t-5 eEsxam">
                Es momento de proporcionarnos la lista de colaboradores a
                incluir en el check-up, permitiéndonos programar y brindar una
                atención de calidad y personalizada para cada uno.
              </div>
            </div>
          </div>
          {/* IMAGEN */}
          <div className="grid-item image">
            <div className="sc-04-HowItWorks__ImageBox-sc-iepctg-4 HuTbH">
              <div
                className="ScaledContent__Outer-sc-mvrs02-0 tiXzS"
                style={{ width: "650px", height: "615px" }}
              >
                <div
                  scale="1"
                  className="ScaledContent__Inner-sc-mvrs02-1 eOUgPq"
                >
                  <div className="IllustrationOne__Graphic-sc-myfi4b-1 lnklTH">
                    <img src={landingImage2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* GRID 3 */}
          <div className="grid-item text">
            <div className="TextParts__Wrapper-sc-1j2eo1t-0 yrtrU">
              <div className="TextParts__TopBar-sc-1j2eo1t-1 dGbIGI">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 46 46"
                >
                  <rect
                    width="46"
                    height="46"
                    fill="#232265"
                    rx="7"
                    style={{
                      fill: "color(display-p3 0.1373 0.1333 0.3961)",
                      fillopacity: "1",
                    }}
                  ></rect>
                  <path
                    stroke="#3FAEFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m28 20-5.434 5.434c-.198.198-.297.297-.412.334a.499.499 0 0 1-.308 0c-.115-.037-.214-.136-.412-.334l-1.868-1.868c-.198-.198-.297-.297-.412-.334a.499.499 0 0 0-.308 0c-.115.037-.214.136-.412.334L14 28m14-8h-4m4 0v4m-9.2 8h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C32 29.72 32 28.88 32 27.2v-8.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C29.72 14 28.88 14 27.2 14h-8.4c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C14 16.28 14 17.12 14 18.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C16.28 32 17.12 32 18.8 32Z"
                    style={{
                      stroke: "color(display-p3 0.2482 0.6843 1)",
                      strokeOpacity: "1",
                    }}
                  ></path>
                </svg>
                03.
              </div>
              <div className="TextParts__BlueTitle-sc-1j2eo1t-3 bjwia-D">
                Agenda de <span>citas</span> para la toma de{" "}
                <span>muestras</span>
              </div>
              <div className="TextParts__Description-sc-1j2eo1t-5 eEsxam">
                Se envía un cuestionario por correo electrónico a los
                colaboradores, junto con el enlace para agendar su cita para la
                toma de muestras.
              </div>
            </div>
          </div>
          {/* IMAGEN */}
          <div className="grid-item image">
            <div className="sc-04-HowItWorks__ImageBox-sc-iepctg-4 HuTbH">
              <div
                className="ScaledContent__Outer-sc-mvrs02-0 tiXzS"
                style={{ width: "650px", height: "615px" }}
              >
                <div
                  scale="1"
                  className="ScaledContent__Inner-sc-mvrs02-1 eOUgPq"
                >
                  <div className="IllustrationOne__Graphic-sc-myfi4b-1 lnklTH">
                    <img src={landingImage3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* GRID 4 */}
          <div className="grid-item text">
            <div className="TextParts__Wrapper-sc-1j2eo1t-0 yrtrU">
              <div className="TextParts__TopBar-sc-1j2eo1t-1 TextParts__GreenTopBar-sc-1j2eo1t-2 dGbIGI hYayKB">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 46 46"
                >
                  <rect
                    width="46"
                    height="46"
                    fill="#232265"
                    rx="7"
                    style={{
                      fill: "color(display-p3 0.1373 0.1333 0.3961)",
                      fillopacity: "1",
                    }}
                  ></rect>
                  <path
                    stroke="#5CFFB1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 15h-3.2c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C14 17.28 14 18.12 14 19.8v7.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C16.28 32 17.12 32 18.8 32h7.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C31 29.72 31 28.88 31 27.2V24m-7 4h-6m8-4h-8m13.121-9.121a3 3 0 1 1-4.242 4.242 3 3 0 0 1 4.242-4.242Z"
                    style={{
                      stroke: "color(display-p3 0.3595 1 0.6926)",
                      strokeOpacity: "1",
                    }}
                  ></path>
                </svg>
                04.
              </div>
              <div className="TextParts__BlueTitle-sc-1j2eo1t-3 TextParts__GreenTitle-sc-1j2eo1t-4 bjwia-D SHqEf">
                Toma de Muestras <span>Programada</span>{" "}
              </div>
              <div className="TextParts__Description-sc-1j2eo1t-5 eEsxam">
                Las muestras son tomadas en las fechas establecidas, ya sea en
                el lugar de trabajo o en nuestra red de laboratorios de Sandi.
              </div>
            </div>
          </div>
          {/* IMAGEN */}
          <div className="grid-item image">
            <div className="sc-04-HowItWorks__ImageBox-sc-iepctg-4 HuTbH">
              <div
                className="ScaledContent__Outer-sc-mvrs02-0 tiXzS"
                style={{ width: "650px", height: "615px" }}
              >
                <div
                  scale="1"
                  className="ScaledContent__Inner-sc-mvrs02-1 eOUgPq"
                >
                  <div className="IllustrationOne__Graphic-sc-myfi4b-1 lnklTH">
                    <img src={landingImage4} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* GRID 5 */}
          <div className="grid-item text">
            <div className="TextParts__Wrapper-sc-1j2eo1t-0 yrtrU">
              <div className="TextParts__TopBar-sc-1j2eo1t-1 dGbIGI">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 46 46"
                >
                  <rect
                    width="46"
                    height="46"
                    fill="#232265"
                    rx="7"
                    style={{
                      fill: "color(display-p3 0.1373 0.1333 0.3961)",
                      fillopacity: "1",
                    }}
                  ></rect>
                  <path
                    stroke="#3FAEFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 15h-3.2c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C14 17.28 14 18.12 14 19.8v7.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C16.28 32 17.12 32 18.8 32h7.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C31 29.72 31 28.88 31 27.2V24m-7 4h-6m8-4h-8m13.121-9.121a3 3 0 1 1-4.242 4.242 3 3 0 0 1 4.242-4.242Z"
                    style={{
                      stroke: "color(display-p3 0.2482 0.6843 1)",
                      strokeOpacity: "1",
                    }}
                  ></path>
                </svg>
                05.
              </div>
              <div className="TextParts__BlueTitle-sc-1j2eo1t-3 TextParts__GreenTitle-sc-1j2eo1t-4 bjwia-D">
                Envio de <span>Resultados Interpretados</span>{" "}
              </div>
              <div className="TextParts__Description-sc-1j2eo1t-5 eEsxam">
                Los resultados se envían por correo electrónico, asegurando que
                cada colaborador reciba información detallada y personalizada
                sobre su estado de salud.
              </div>
            </div>
          </div>
          {/* IMAGEN */}
          <div className="grid-item image">
            <div className="sc-04-HowItWorks__ImageBox-sc-iepctg-4 HuTbH">
              <div
                className="ScaledContent__Outer-sc-mvrs02-0 tiXzS"
                style={{ width: "650px", height: "615px" }}
              >
                <div
                  scale="1"
                  className="ScaledContent__Inner-sc-mvrs02-1 eOUgPq"
                >
                  <div className="IllustrationOne__Graphic-sc-myfi4b-1 lnklTH">
                    <img src={landingImage5} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* GRID 6 */}
          <div className="grid-item text">
            <div className="TextParts__Wrapper-sc-1j2eo1t-0 yrtrU">
              <div className="TextParts__TopBar-sc-1j2eo1t-1 TextParts__GreenTopBar-sc-1j2eo1t-2 dGbIGI hYayKB">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 46 46"
                >
                  <rect
                    width="46"
                    height="46"
                    fill="#232265"
                    rx="7"
                    style={{
                      fill: "color(display-p3 0.1373 0.1333 0.3961)",
                      fillopacity: "1",
                    }}
                  ></rect>
                  <path
                    stroke="#5CFFB1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 15h-3.2c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C14 17.28 14 18.12 14 19.8v7.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C16.28 32 17.12 32 18.8 32h7.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C31 29.72 31 28.88 31 27.2V24m-7 4h-6m8-4h-8m13.121-9.121a3 3 0 1 1-4.242 4.242 3 3 0 0 1 4.242-4.242Z"
                    style={{
                      stroke: "color(display-p3 0.2482 1 0.6926)",
                      strokeOpacity: "1",
                    }}
                  ></path>
                </svg>
                06.
              </div>
              <div className="TextParts__BlueTitle-sc-1j2eo1t-3 TextParts__GreenTitle-sc-1j2eo1t-4 bjwia-D SHqEf">
                Evaluación de grupos de <span>Riesgo</span>{" "}
              </div>
              <div className="TextParts__Description-sc-1j2eo1t-5 eEsxam">
                Nuestros expertos en salud utilizan tecnología avanzada para
                evaluar los grupos de riesgo según parámetros personalizados,
                identificando colaboradores en grupos de riesgo para un cuidado
                más preciso.
              </div>
            </div>
          </div>
          {/* IMAGEN */}
          <div className="grid-item image">
            <div className="sc-04-HowItWorks__ImageBox-sc-iepctg-4 HuTbH">
              <div
                className="ScaledContent__Outer-sc-mvrs02-0 tiXzS"
                style={{ width: "650px", height: "615px" }}
              >
                <div
                  scale="1"
                  className="ScaledContent__Inner-sc-mvrs02-1 eOUgPq"
                >
                  <div className="IllustrationOne__Graphic-sc-myfi4b-1 lnklTH">
                    <img src={landingImage6} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* GRID 7 */}
          <div className="grid-item text">
            <div className="TextParts__Wrapper-sc-1j2eo1t-0 yrtrU">
              <div className="TextParts__TopBar-sc-1j2eo1t-1 dGbIGI">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 46 46"
                >
                  <rect
                    width="46"
                    height="46"
                    fill="#232265"
                    rx="7"
                    style={{
                      fill: "color(display-p3 0.1373 0.1333 0.3961)",
                      fillopacity: "1",
                    }}
                  ></rect>
                  <path
                    stroke="#3FAEFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 15h-3.2c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C14 17.28 14 18.12 14 19.8v7.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C16.28 32 17.12 32 18.8 32h7.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C31 29.72 31 28.88 31 27.2V24m-7 4h-6m8-4h-8m13.121-9.121a3 3 0 1 1-4.242 4.242 3 3 0 0 1 4.242-4.242Z"
                    style={{
                      stroke: "color(display-p3 0.2482 0.6843 1)",
                      strokeOpacity: "1",
                    }}
                  ></path>
                </svg>
                07.
              </div>
              <div className="TextParts__BlueTitle-sc-1j2eo1t-3 TextParts__GreenTitle-sc-1j2eo1t-4 bjwia-D">
                Interpretación y <span>Seguimiento</span>{" "}
              </div>
              <div className="TextParts__Description-sc-1j2eo1t-5 eEsxam">
                Damos un seguimiento personalizado con asistencia en línea de
                médicos generales, médicos internistas, nutricionistas,
                psicoterapeutas y/o estudios de laboratorio correspondientes con
                nuestro servicio de Seguimiento y monitoreo Sandi Check
              </div>
            </div>
          </div>
          {/* IMAGEN*/}
          <div className="grid-item image">
            <div className="sc-04-HowItWorks__ImageBox-sc-iepctg-4 HuTbH">
              <div
                className="ScaledContent__Outer-sc-mvrs02-0 tiXzS"
                style={{ width: "650px", height: "615px" }}
              >
                <div
                  scale="1"
                  className="ScaledContent__Inner-sc-mvrs02-1 eOUgPq"
                >
                  <div className="IllustrationOne__Graphic-sc-myfi4b-1 lnklTH">
                    <img src={landingImage7} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="background-box"></div>
          <div className="background-boxFront"></div> */}
          <div className="pin-spacerScroll boxMirror" style={{order: "0", placeSelf: "auto", gridArea: "auto", zIndex: "4", float: "none", flexShrink: "1", marginTop: "3213px", inset: "-200px 0px 2843.24px 720px", position: "absolute", flexBasis: "auto", overflow: "visible", boxSizing: "border-box", width: "720px", height: "981px", padding: "0px 0px 2000px", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)"}}>
            <div className="sc-04-HowItWorks__PseudoBox-sc-iepctg-0 kCSdCn" style={{translate: "none", rotate: "none", scale: "none", inset: "0px auto auto 0px", margin: "0px", maxWidth: "720px", width: "720px", maxHeight: "1109px", height: "907px", padding: "0px", transform: "translate(0px, 0px)"}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
