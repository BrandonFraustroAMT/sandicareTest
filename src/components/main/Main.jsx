import { useState, useEffect, useRef } from 'react';
import './Main.css';

import Scroll from '../scrolls/Scroll';
import WhitePage from '../white-page/WhitePage'
import Button from '../button/Button';

const words = [
  'Check-Up Personalizado',
  'Monitoreo Remoto',
  'Seguimiento Personalizado',
  'Telemedicina 24 / 7'
];

//Función lerp para un efecto más fluido
function lerp(start, end, t) {
  return start + (end - start) * t;
}
//posicion inicial para desplazamiento del botón
const thresholdX = 2503;
const thresholdY = 2891;

const Main = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  let translateFinal  = 0;

  let rightInitial = 60;
  let widthInitial = 852;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  /* SCROLL DEL VIDEO */
  const [scaleVideo, setScaleVideo] = useState(1);
  const [translateVideoX, setTranslateVideoX] = useState(0);
  const [translateVideoFinal, setTranslateVideoFinal] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let video = document.getElementById('scalable-video');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;

      // Definir el tamaño máximo del video
      const maxScale = 20;
      const targetScale = 1 + scrollFraction * (maxScale - 0.9);

      // Calcular translateX basado en la escala
      let targetTranslateX = targetScale * 100;

      // Interpolar los valores para un efecto más suave
      const newScale = lerp(scaleVideo, targetScale, 0.05);
      const newTranslateX = lerp(translateVideoX, targetTranslateX, 0.05);

      setScaleVideo(newScale);
      setTranslateVideoX(newTranslateX);

      if (newScale <= 1.15) {
        targetTranslateX = 0;
        video.style.right = `${rightInitial}px`;
        video.style.width = `${widthInitial}px`;
      }

      if (newScale >= 1.40) {
        if (video.paused) {
          video.play();
        }
      } else {
        if (!video.paused) {
          video.pause();
          video.currentTime = 0;
        }
      }

      if (newScale < 1.5) {
        // El video se va posicionando hacia la izquierda mientras va creciendo
        video.style.transform = `scale(${newScale}) translate(-${newTranslateX}px, 0px)`;
        video.style.borderRadius = "25px";
        setTranslateVideoFinal(newTranslateX);
      } else {
        // El video se mantiene en el eje x mientras va creciendo
        video.style.right = "12px";
        video.style.width = "1000px";
        video.style.borderRadius = "25px";
        video.style.transform = `scale(${newScale}) translate(-${translateVideoFinal}px, 0px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scaleVideo, translateVideoX, translateVideoFinal]);

  /* EFECTO SIGUE DESLIZANDO */
  const marqueeRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const handleKeppScrolling = () => {
      const marquee = marqueeRef.current;
      const items = itemsRef.current;
      const rect = marquee.getBoundingClientRect();

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        items.forEach((item, index) => {
          let translateX = (window.pageYOffset + rect.top + index * 100) % 800;
          item.style.transform = `translate(${translateX}px, 0)`;
        });
      }
    };

    window.addEventListener('scroll', handleKeppScrolling);

    return () => {
      window.removeEventListener('scroll', handleKeppScrolling);
    };
  }, []);

  /* DESPLAZAMIENTO DEL BOTÓN */
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      let buttonCheck = document.getElementById('buttonCheck');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;


      const maxScale = 20;
      const scale = 1 + scrollFraction * (maxScale - 0.9);

      const additionalOffsetX = (scrollTop - thresholdX);
      const additionalOffsetY = (scrollTop - thresholdY);
      
      let newTranslateX = translateX;
      let newTranslateY = translateY;
      if(scale >= 4.87 && scrollTop <= 7721) {
        if(scrollTop >= 2872 && scrollTop <= 7721) {
          newTranslateY = lerp(translateY, additionalOffsetY, 1);
          setTranslateY(newTranslateY);
          buttonCheck.style.transform = `translate(590.4px, ${newTranslateY}px)`;
        }else {
          newTranslateX = lerp(translateX, additionalOffsetX, 1.6);
          setTranslateX(newTranslateX);
          buttonCheck.style.transform = `translate(${newTranslateX}px, 0px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div>
        <main className="container-main">
          <div>
            {/* MAIN HEADER */}
            <div className="container-main__animated">
              <div className='sc-01-Hero__Content-video'>
                <img src="/src/assets/video/gif-hero.gif" alt="Hero gif" />
                {/* <video autoPlay muted loop>
                  <source src="src/assets/video/video-hero.mp4" type="video/mp4" />
                </video> */}
              </div>
              {/* <!-- ANIMATION --> */}
              <div className="sc-01-Hero__Content-text">
                <div className="sc-01-Hero__Title">
                  Check-amos la salud
                  <br />
                  de tu equipo con
                  {/* WORDS */}
                  <div className="auto-animate-wrapper">
                    {words.map((word, index) => (
                      <div
                        key={index}
                        className={`word-container ${index === currentWordIndex ? 'active' : 'inactive'}`}
                      >
                        <div className="word">{word}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="sc-01-Hero__Description">
                  Con CheckA Tu Salud de SandiCare, brindas a tus
                  colaboradores un escaneo de salud personalizado, sin
                  importar si son uno o más de un millón
                </div>
              </div>
            </div>
            {/* VIDEO  hacer scroll */} 
            <div className='video-container'>
              <div className='video-wrapper'>
                <video id="scalable-video"  muted loop>
                  <source src="/src/assets/video/video-ilustracion.mov" type="video/mp4" />
                </video>
              </div>
            </div>
            <section className="sc-02-03-Focus__Wrapper-sc-qcljt5-0 enpaAV">
              <div className={"sc-02-03-Focus__Inner-sc-qcljt5-1 euIDBC"} >
                  <div  className="sc-02-03-Focus__Top-sc-qcljt5-2 iWNRYx">
                      <h2 className="sc-02-03-Focus__Title-sc-qcljt5-3 coFkqK">
                          <div className="TextAnimation__Wrapper-sc-1lgmgk9-0 gbyhsy" style={{opacity: 1}}>
                              <div className="line-wrapper" style={{display: "block", textAlign: "center", position: "relative"}}>
                                  <div className="line-inne" style={{display: "block", textAlign: "center", position: "relative", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)"}}>Para una organización</div>
                              </div>
                              <div className="line-wrapper" style={{display: "block", textAlign: "center", position: "relative"}}>
                                  <div className="line-inner" style={{display: "block", textAlign: "center", position: "relative", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)"}}>saludable y productiva.</div>
                              </div>
                          </div>
                      </h2>
                      <div className="sc-02-03-Focus__MarqueeWrapper-sc-qcljt5-4 irVAaY" ref={marqueeRef}>
                      <div className="ConstantMarquee__StyledMarquee-sc-1f8xnjx-0 jvJbDf">
                        {Array.from({ length: 4 }).map((_, index) => (
                          <div
                            key={index}
                            ref={(el) => (itemsRef.current[index] = el)}
                            className="marquee-item"
                            style={{ transform: "translate(237.684px, 0px)" }}
                          >
                            <span className="sc-02-03-Focus__Scroll-sc-qcljt5-5 bpursF">Sigue Deslizando</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 107 21" className="sc-02-03-Focus__Logo-sc-qcljt5-6 ipwwro">
                              <path fill="#F8F8F8" fillRule="evenodd" d="M51.329 3.484 52.035 0l.705 3.463 3.163 15.812h2.275l4.509-6.071 4.074 5.735 2.434-2.018 2.23 2.354h34.357c.397 0 .718.31.718.695a.706.706 0 0 1-.718.694H70.793l-1.718-1.814L66.483 21l-3.822-5.38-3.747 5.044h-4.186L52.097 7.397 49.64 20.664h-5.455l-2.72-3.562-3.04 3.562H1.218A.707.707 0 0 1 .5 19.97c0-.383.321-.694.718-.694h36.53l3.78-4.428 3.382 4.428h3.518l2.9-15.79Z" clipRule="evenodd" style={{ fill: "color(#F8F8F8)", fillOpacity: "1" }}></path>
                            </svg>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
              </div>
              <div className="sc-02-03-Focus__BottomInner-sc-qcljt5-7 jfGDAf" style={{height: "73.9738%"}}>
                <div className="sc-02-03-Focus__BottomContent-sc-qcljt5-8 knqvBf">
                  <div className="sc-02-03-Focus__BottomTitle-sc-qcljt5-11 bupTNh">
                    <span>Te mostraremos</span>
                    
                    <div id='buttonCheck' className="pin-spacer">
                      <Button textInside={"Cotiza tu Check-Up"}/>
                    </div>
                    <span>como lo hacemos</span>
                  </div>
                </div>
              </div>
            </section>
            {/* SCROLLS */}
            <Scroll />
            {/* WHITE PAGE */}
            <WhitePage />
          </div>
        </main>
      </div>
  )
}

export default Main