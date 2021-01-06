import React from "react";
import css from "../../styles/login.scss"; 
import { useRouter } from 'next/router'

const FormLogin = () => {
  const router = useRouter()

  const handleSubmit=e=>{
    e.preventDefault();
    router.push("/home")

  }

  return (
    <main className={css.main}>
    <form autoComplete="off" onSubmit={handleSubmit}>
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
  );
};

export default FormLogin;
