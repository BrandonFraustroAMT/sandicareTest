import "./Footer.css";
import logo from '/src/assets/logos/logo.svg'
import Button from "../button/Button";

const Footer = () => {
  return (
    <div>
      <footer className="Footer__Wrapper-sc-10ye0cu-1 eoSKp">
        <div className="Footer__Inner-sc-10ye0cu-2 iBYMzF">
          <div className="Footer__Top-sc-10ye0cu-3 lfkvfh">
            <div className="Footer__LogoWrapper-sc-10ye0cu-4 kdxuVr">
              <a href="#" className="Link__Wrapper-sc-ct3g9f-1 chXumO">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="Footer__LinksButton-sc-10ye0cu-6 dAoYJu">
              <div className="Footer__Links-sc-10ye0cu-7 iuPTND">
              </div>
              <a
                className="Primary__Wrapper-sc-ijcvrf-3 ixydcB"
                href="#"
              >
                <Button textInside={"Cotiza tu Check-Up"}/>
              </a>
            </div>
          </div>
          <div className="Footer__LinesWrapper-sc-10ye0cu-8 eLJPQk">
            <div className="Lines__Wrapper-sc-m4y88g-0 cHprFt">
              <div className="Lines__Canvas-sc-m4y88g-1 dmznxe">
                <canvas
                  width="3080"
                  height="930"
                  style={{width: "1540px", height: "465px", touchAction: "none", cursor: "inherit;"}}
                ></canvas>
              </div>
            </div>
            <div
              className="Pill__Wrapper-sc-1tqyxfy-0 gtAMbc Lines__WhitePill-sc-m4y88g-2 jLCIUO"
              style={{translate: "none", rotate: "none", scale: "none", transform: "translate(-50%, -50%) translate(586px, -59.5px) scale(0, 0)", pointerEvents: "none"}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 212 104"
                className="Pill__Logo-sc-1tqyxfy-1 CFbaF"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M103.229 17.834 106.57.793l3.34 16.938 14.97 77.333h10.769l21.342-29.694 19.286 28.052 11.518-9.873 10.555 11.515h9.548a3.398 3.398 0 1 1 0 6.796H195.36l-8.133-8.873-12.268 10.515-18.091-26.316-17.735 24.674h-19.812l-12.455-64.888-11.63 64.888H69.418L56.542 84.439l-14.39 17.421H4.021a3.398 3.398 0 0 1 0-6.796h34.927l17.89-21.656 16.006 21.656H89.5l13.729-77.23Z"
                  clipRule="evenodd"
                  style={{clipPath: "none"}}
                ></path>
              </svg>
            </div>
          </div>
          <div className="Footer__Info-sc-10ye0cu-9 dBrGFf">
            <span
              style={{gridArea:"address"}}
              className="Footer__Address-sc-10ye0cu-11 glLHje"
            >
              Dirección
            </span>
            <a style={{gridArea:"privacy"}} href="#">
              Política de privacidad
            </a>
            <a style={{gridArea:"terms"}} href="#">
              Términos y condiciones
            </a>
            <a
              href="https://www.linkedin.com/company/impilo-inc/"
              style={{gridArea:"linkedin"}}
            >
              Linkedin
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
