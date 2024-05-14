import React from 'react'
import Linkedin from '../../assets/icon-linkedin.svg'
import Instagram from '../../assets/icon-instagram.svg'
import "../footer/Footer.css"


const Footer = () => {
  return (
    <div>
        <footer>
            <div className="footer">
            <span className="privacidad">
                <a href="https://newvalue.es/politica-privacidad" className="politica">política de cookies </a>
                <a href="https://newvalue.es/politica-privacidad" className="aviso"> aviso legal</a>
            </span>
            </div>
            <div className="footer-container2">
            <span className="footer-text2 Content">
                <a href="mailto:info@newvalue.es?subject=" className="footer-link">info@newvalue.es |</a>
                <a href="tel:+34611135293" className="footer-link1">+34 611 135 293</a>
            </span>
            </div>
            <div className="logosFooter">
                <a href="https://www.linkedin.com/company/new-value-generation/">
                    <img src={Linkedin} alt="icon-linkedin" className="icon-linkedin"/> </a>
                <a href="https://www.instagram.com/newvaluegeneration/">
                    <img src={Instagram} alt="icon-instagram" className="icon-instagram"/> </a> 
            </div>
            </footer>
    </div>
  )
}

export default Footer