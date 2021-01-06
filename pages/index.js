import React from "react";
import Footer from "../components/login/Footer";
import FormLogin from "../components/login/FormLogin";
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
       <FormLogin/>
        
      </div>
      <Footer/>
    </div>
  );
};

export default login;
