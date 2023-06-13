import '../pages/Carro3detalhe.css';
import Header from '../components/header';
import carro3 from '../imgs/carro3.jpg';
function Carro3detalhe(){
    return(
        <div className="Carro3detalhe">
            <Header/>
        
            <div className="container3">
                <div className="nomecarro3"><h1>TOYOTA AE86</h1></div>
                <img src={carro3} alt="Minha Imagem"  id='carro1'/>
                <p id='paragrafo3'>O Toyota AE86, também conhecido como Toyota Corolla Levin ou Toyota Sprinter Trueno, é um carro compacto japonês que ganhou destaque na cultura automotiva e, especialmente, na franquia de filmes "Velozes e Furiosos". O AE86 foi amplamente tunado e modificado, tornando-se um ícone dos carros esportivos de tração traseira.

O AE86 é conhecido por sua leveza, equilíbrio e agilidade, características que o tornaram popular entre os entusiastas de carros esportivos. Ele possui um motor de quatro cilindros e tração traseira, o que proporciona uma experiência de condução envolvente e divertida.

Na franquia "Velozes e Furiosos", o AE86 se tornou o carro característico do personagem Takumi Fujiwara, protagonista da série de anime e mangá "Initial D". O carro é mostrado sendo tunado e personalizado para competir em corridas de drift, demonstrando suas habilidades de derrapagem controlada em curvas fechadas.</p>
        
        
        </div>


    </div>
);
}

export default Carro3detalhe;