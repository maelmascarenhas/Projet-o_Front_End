import './Cadastro.css';
import Header from '../components/header';
import react from 'react';

function Cadastro() {
    return (
        <div className="Cadastro">
          <Header/>
        
          <div className="form-container">
             <div className="title">
               <h1>Cadastro</h1>
          </div>
          <form className="form">
            <label>
            Email:
            <div className="form-field"></div>
            <input
              type="text"
            />
           </label>
           <br />
          <label>
          Senha:
          <div className="form-field"></div>
          <input
            type="password"
         />
         </label>
         <br />
         <label>
         Confirme a senha:
         <div className="form-field"></div>
         <input
            type="password"
        />
        </label>
        <br />
        <button type="submit" className="submit-button">
         Enviar
       </button>
      </form>
       </div>
      <div className="linkLogin">
        <h1>Já possui conta?</h1>
        <h1>Entre agora!</h1>
      </div>
      </div>


    );
  }
  
  export default Cadastro;
  