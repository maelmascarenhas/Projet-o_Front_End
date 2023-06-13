import Header from '../components/header';
import './Login.css';


function Login() {
    return (
      <div className="Login">
       <Header/>
         
    
    <div className="form-container">
        <div className="title">
            <h1>Login</h1>
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
      <label >
        Senha:
        <div className="form-field"></div>
        <input
          type="password"
          
          
        />
      </label>
      <br />
      
      <button  type="submit" className="button">
          Enviar
        </button>
    </form>
    

        </div>
      <div className="links">
      <div className="linkEsqueceuSenha">
      <h1>Esqueceu a senha?</h1>
      </div>
      <h1> ou </h1>
      <div className="linkCadastro">
      <h1>Não possui conta?</h1>
      </div>
      </div>
      </div>
    );
  }
  
  export default Login;