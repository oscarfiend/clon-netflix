import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
            <footer>
                <p>Preguntas? llama al 018000-265-0161</p>
                
                <nav>
                    <Link href="/">Preguntas frecuentes</Link>
                    <Link href="#">Terminos de uso</Link>
                    <Link href="#">Declaracion de privacidad</Link>
                    <Link href="#">Centro de ayuda</Link>
                    <Link href="#">Privacidad</Link>
                    <Link href="#">Preferencias de cookies</Link>
                </nav>
                <select name="idioma" id="">
                    <option value="eng">English</option>
                    <option value="esp">Espanol</option>
                </select>
                
        </footer>
    )
}

export default Footer
