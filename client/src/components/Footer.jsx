import React from 'react'
import Linkedin from '../assets/icons8-linkedin.svg'
import Instagram from '../assets/icons8-instagram.svg'

const Footer = () => {
    return (
        <footer className='flex flex-col py-3 px-5 gap-2 items-center align-center bg-black text-white text-sm sm:flex-row sm:justify-between'>
            <div className="flex gap-5">
                <a href="https://newvalue.es/politica-privacidad" className="politica">política de cookies </a>
                <a href="https://newvalue.es/politica-privacidad" className="aviso"> aviso legal</a>
            </div>
            <div className="flex gap-3 place-items-center">
                <p className='self-center flex gap-2 mr-2'>
                    <a href="mailto:info@newvalue.es?subject=" className="underline">info@newvalue.es</a>
                    |
                    <a href="tel:+34611135293" className="underline">+34 611 135 293</a>
                </p>
                <a href="https://www.linkedin.com/company/new-value-generation/">
                    <img src={Linkedin} alt="icon-linkedin" className="h-6" /> </a>
                <a href="https://www.instagram.com/newvaluegeneration/">
                    <img src={Instagram} alt="icon-instagram" className="h-7" /> </a>

            </div>
        </footer>
    )
}

export default Footer