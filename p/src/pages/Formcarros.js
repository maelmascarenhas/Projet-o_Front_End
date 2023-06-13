import React from "react";
import '../pages/Formcarros.css';
import Header from '../components/header';

function Formcarros(){
return(
  <div className="Formcarros">
  <Header/>

  <div className="form-container">
    <h1 className="Titulo">Cadastro do Carro</h1>
    <form>
    <div className="form-group">
        <label htmlFor="modelo">Modelo:</label>
        <input
          type="text"
          id="modelo"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="marca">Marca:</label>
        <input
          type="text"
          id="marca"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="descricao">Descrição:</label>
        <textarea
          id="descricao"
          rows="4"
          cols="50"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="foto">Foto:</label>
        <input
          type="file"
          id="foto"
          className="input-field"
        />
      </div>
      <button type="submit" className="submit-button">Cadastrar</button>
    </form>
  </div>
  </div>
);
}

export default Formcarros;





