import React from "react";
import css from "../styles/login.scss";

const login = () => {
  return (
    <div className={css.contenedor}>
      <div className={css.contenido}>
        <header>
          <div className={css.logo}>
            <img src="/assets/img/logo_transparente.png" alt="logotipo" />
          </div>
        </header>
        <main className={css.main}>
          <form autoComplete="off">
            <legend>Iniciar sesion</legend>
            <div className={css.campo}>
              <input type="text" id="usuario" placeholder="Email o numero de telefono"/>
              
            </div>
            <div className={css.campo}>
              <input type="password" id="password" placeholder="Contraseña"/>
              
            </div>
            <div className={css.campo}>
              <input className={css.submit} type="submit" value="Iniciar Sesion" />
            </div>
            <div className={css.acciones}>
              <div>
                <input type="checkbox" />
                <label> Recuerdame</label>
              </div>
              <div>
                <a href="#">Necesitas ayuda?</a>
              </div>
            </div>
          </form>
          {/* contenifo depues del form */}
          <div className={css.enlaces}>
            <a href="#"><img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" alt="facebook"/> <span>  Iniciar sesion con facebook</span></a>
            <div className={css.subscribe}>

            <span href="#">Primera vez en netflix? </span><a> Suscribete ya</a>
            </div>
          </div>
        </main>
        
      </div>
      <footer>
                <p>Preguntas? llama al 018000-265-0161</p>
                
                <nav>
                    <a href="#">Preguntas frecuentes</a>
                    <a href="#">Terminos de uso</a>
                    <a href="#">Declaracion de privacidad</a>
                    <a href="#">Centro de ayuda</a>
                    <a href="#">Privacidad</a>
                    <a href="#">Preferencias de cookies</a>
                </nav>
                <select name="idioma" id="">
                    <option value="eng">English</option>
                    <option value="esp">Espanol</option>
                </select>
                
        </footer>
    </div>
  );
};

export default login;
