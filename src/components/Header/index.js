import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import 'reactjs-popup/dist/index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {BsInfoCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import './index.css'

const overlayStyle = {
  backgroundColor: '#ffffff',
}

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <div className="popup-container">
        <Popup
          modal
          closeOnDocumentClick={false}
          overlayStyle={overlayStyle}
          contentStyle={{
            // Custom styles for the popup content
            width: '100%',
            maxWidth: '1100px',
            padding: '20px',
            height: '100vh',
            border: 'none',
          }}
          trigger={
            <button
              type="button"
              data-testid="hamburgerIconButton"
              className="HamburgerMenu-button"
            >
              <GiHamburgerMenu className="HamburgerMenu-icon" />
            </button>
          }
        >
          {close => (
            <div className="menu-pop-container">
              <button
                type="button"
                className="close-button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose className="close-icon" />
              </button>
              <ul className="content">
                <li>
                  <Link
                    to="/"
                    className="popup-item-container"
                    onClick={() => close()}
                  >
                    <AiFillHome className="popup-item-icon" />
                    <h1 className="item-name">Home</h1>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="popup-item-container"
                    onClick={() => close()}
                  >
                    <BsInfoCircleFill className="popup-item-icon" />
                    <h1 className="item-name">About</h1>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>
    </div>
  </nav>
)
export default Header
