import './Navbar.css';
import logo from '../../assets/logos/logo.svg'

import Button from '../button/Button';

const Navbar = () => {
  return (
    <div>
      <div className="breakpointUtils__DesktopTabletOnly-sc-90pxmk-3 navbar">
        <header className="DesktopTablet__Wrapper-sc-x1rrkn-0 iXruOj navbar-header">
          <div className="DesktopTablet__Inner-sc-x1rrkn-1 ihApXk">
            <a href="#" className="Link__Wrapper-sc-ct3g9f-1 chXumO">
              <img src={logo} alt="logo" />
            </a>
            <Button textInside={"Cotiza tu Check-Up"}/>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar