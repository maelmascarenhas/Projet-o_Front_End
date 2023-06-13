import '../pages/Carro2detalhe.css';
import Header from '../components/header';
import carro2 from '../imgs/carro2.jpg';
function Carro2detalhe(){
    return(
        <div className="Carro2detalhe">
            <Header/>
        
            <div className="container2">
                <div className="nomecarro2"><h1>SKYLINE GT-R</h1></div>
                <img src={carro2} alt="Minha Imagem"  id='carro2'/>
                <p id='paragrafo2'>O skyline de Velozes e Furiosos é um dos elementos mais emblemáticos e reconhecíveis da franquia de filmes. Baseado no lendário Nissan Skyline GT-R, esse carro esportivo japonês se destaca por sua aparência impressionante e desempenho excepcional. Desde sua primeira aparição no filme original, o Skyline GT-R tornou-se inseparável do personagem Brian O'Conner, interpretado pelo saudoso ator Paul Walker.

Com seu design aerodinâmico e agressivo, combinado com um motor poderoso e tração nas quatro rodas, o skyline de Velozes e Furiosos personifica a perfeita combinação de velocidade, estilo e habilidade nas pistas de corrida. Ao longo da franquia, vimos o carro passar por várias modificações e atualizações, tornando-se cada vez mais impressionante e único.

O skyline de Velozes e Furiosos não é apenas um objeto de desejo para os fãs de automóveis, mas também um símbolo da cultura automotiva e da paixão pela velocidade. Sua presença nos filmes ajudou a popularizar ainda mais o Nissan Skyline GT-R, consolidando seu status como um dos carros mais icônicos e cobiçados do mundo automobilístico.</p>
        
        
            </div>


    </div>
);
}

export default Carro2detalhe;