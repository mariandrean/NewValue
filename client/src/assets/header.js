import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import SolidButtonWhite from './solid-button-white'
import './header.css'

const Header = (props) => {
  return (
    <header
      data-role="Header"
      className={`header-header header-animation ${props.rootClassName} `}
    >
      <header data-thq="thq-navbar" className="header-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="header-desktop-menu"></div>
        <div data-thq="thq-burger-menu" className="header-burger-menu">
          <svg viewBox="0 0 1024 1024" className="header-icon invert-animation">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <Link to="/" className="header-navlink">
          <div className="header-container invert-animation"></div>
        </Link>
        <div data-thq="thq-mobile-menu" className="header-mobile-menu">
          <div className="header-container1">
            <div className="header-nav">
              <div className="header-top">
                <Link to="/" className="header-navlink01">
                  <img
                    alt="logo"
                    src="/vectorial/newvaluelogogris-titulo.svg"
                    className="header-image"
                  />
                </Link>
                <div data-thq="thq-close-menu" className="header-close-menu">
                  <svg viewBox="0 0 1024 1024" className="header-icon2">
                    <path
                      d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                      className=""
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="header-container2"></div>
              <div className="header-nav-item">
                <Link to="/" className="header-navlink02 text-green-trans">
                  Impulsa el cambio
                </Link>
              </div>
              <div className="header-nav-item1">
                <Link
                  to="/desarrollo-proyectos"
                  className="header-navlink03 text-green-trans"
                >
                  Desarrollo de proyectos
                </Link>
                <div className="header-options">
                  <Link
                    to="/aws-getit"
                    className="header-navlink04 text-green-trans"
                  >
                    AWS GetIT
                  </Link>
                  <Link
                    to="/teoria-cambio"
                    className="header-navlink05 text-green-trans"
                  >
                    Teoría del cambio
                  </Link>
                  <Link
                    to="/marketing-impacto"
                    className="header-navlink06 text-green-trans"
                  >
                    Marketing de Impacto
                  </Link>
                  <Link
                    to="/voluntariado-corporativo"
                    className="header-navlink07 text-green-trans"
                  >
                    <span className="">Voluntariado Corporativo</span>
                    <br className=""></br>
                  </Link>
                </div>
              </div>
              <Link to="/consultoria-esg" className="header-navlink08">
                <div className="header-nav-item2 text-green-trans">
                  <span className="header-text2">Consultoría ESG</span>
                </div>
              </Link>
              <Link to="/por-que-new-value" className="header-navlink09">
                <div className="header-nav-item3 text-green-trans">
                  <span className="header-text3">Conócenos</span>
                </div>
              </Link>
              <Link to="/contactanos" className="header-navlink10">
                <div className="header-nav-item4 text-green-trans">
                  <span className="header-text4">Contáctanos</span>
                </div>
              </Link>
              <div className="header-container3"></div>
              <div className="header-container4">
                <a
                  href="https://www.instagram.com/newvaluegeneration/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="header-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="header-icon4"
                  >
                    <path
                      d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                      className=""
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/new-value-generation/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="header-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="header-icon6"
                  >
                    <path
                      d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"
                      className=""
                    ></path>
                  </svg>
                </a>
                <select className="header-select lang-select">
                  <option value="ESP" selected className="">
                    ESP
                  </option>
                  <option value="ENG" className="">
                    ENG
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="header-icon-group">
          <select className="header-select1 lang-select">
            <option value="ESP" selected className="">
              ESP
            </option>
            <option value="ENG" className="">
              ENG
            </option>
          </select>
          <Link to="/contactanos" className="header-navlink11">
            <SolidButtonWhite
              button="contacto"
              rootClassName="solid-button-white-root-class-name"
              className="header-component"
            ></SolidButtonWhite>
          </Link>
        </div>
      </header>
    </header>
  )
}

Header.defaultProps = {
  rootClassName: '',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
}

export default Header
