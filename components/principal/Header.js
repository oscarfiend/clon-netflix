import React from 'react'
import css from '../../styles/principal.scss'
import Contenido from './Contenido'

const Header = () => {
    return (
        <div className={css.contenido}>
         <img className={css.imgpelicula} src="/assets/img/pelicula2.webp" alt="peliculas"/>
         <div className={css.cover}></div>
         <div className={css.principal}>
           <img className={css.imglogopelicula} src="/assets/img/logopelicula.webp" alt=""/>
           <p>Una guerra origina una rebelion despiadada, en la que un nombre intenta retomar el poder y reescribir la historia</p>
           <div className={css.buttons}>
            <button><i className="fas fa-play"></i> Reproducir</button>
            <button className={css.secundary}>Mas información</button>
           </div>
         </div>
         <div className={css.coverfooter}>
         </div>
         <Contenido/>
       </div>
    )
}

export default Header
