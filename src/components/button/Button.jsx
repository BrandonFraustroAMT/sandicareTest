import './Button.css'
const Button = ({ textInside, buttonMoved }) => {
    return (
        <div className="button-container">
          <a href="#" className="wrapper-link">
            <div className="button-wrapper">
              <div className="button-wrapper__div">
                <span className="button-wrapper__span">
                  {textInside}
                </span>
              </div>
            </div>
          </a>
        </div>
    )
}

export default Button