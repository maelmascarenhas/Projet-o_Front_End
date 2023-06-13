import '../pages/Sobrenos.css';
import Header from '../components/header';
import React from 'react';
function Sobrenos(){
    return(
        <div className="Sobrenos">
            <Header/>
        
        <div className="containerSobreNos">
        <div className="tituloSobreNos"><h1>SOBRE NÓS</h1></div>
            
            <p id='paragrafoSobreNos'>O projeto "Website de Carros Tunados" é uma plataforma online dedicada a entusiastas e apaixonados por carros tunados. Nosso objetivo é fornecer um espaço dinâmico e empolgante para explorar e compartilhar informações sobre essa fascinante cultura automotiva.

Em nosso website, você encontrará uma ampla variedade de recursos e conteúdos exclusivos relacionados a carros tunados. Apresentamos uma extensa galeria de imagens e vídeos, destacando os veículos modificados mais impressionantes e inspiradores. Seja você um fã de carros rebaixados, veículos com alterações aerodinâmicas, motores potentes ou designs personalizados, temos algo para todos os gostos.</p> 
        
</div>


        </div>
);
}

export default Sobrenos;