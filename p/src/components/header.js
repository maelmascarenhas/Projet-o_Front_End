import '../components/header.css';

function header (){
return(

<header className="header">
        <div className="logo">
           <span className="logo-title">Tokyo</span>
           <span className="logo-subtitle">Drift</span>
       </div>
       <div className="linksHeader">
    <h1 className= "link registrar">Cadastro de carros</h1>    
    <h1 className="link contato">Contato</h1>
    <h1 className="link sobrenos">Sobre nós</h1>
    <h1 className="link login">Login</h1>
  </div>
</header>



);


}

export default header;