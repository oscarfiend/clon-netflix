import React, { useEffect, useState } from 'react'
import css from "../../styles/navbar.scss"; 
import Link from 'next/link'

const Navbar = () => {

    const [shownavbar, setShowNavbar] = useState(false)

    const changeBackground=()=>{
        if(window.scrollY>=2){
            setShowNavbar(true)
        }else{
            setShowNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeBackground)
    }, [])

    return (
        <div className={`${css.navbar} ${shownavbar?css.active:null}`}>
            <div>
            <img src="/assets/img/logo_transparente.png" alt=""/>
            <Link href="/" activeClassName="active">Inicio</Link>
            <Link href="/">Series</Link>
            <Link href="/">Peliculas</Link>
            <Link href="/">Novedades Populares</Link>
            <Link href="/">Mi lista</Link>
            <Link href="/">Ver de nuevo</Link>
            </div>
            <div>
            <img className={css.userLogo} src="/assets/img/user.png" alt=""/>
            </div>
        </div>
    )
}

export default Navbar
