import '../pages/Carro1detalhe.css';
import Header from '../components/header';
import carro1 from '../imgs/carro1.jpg';
function Carro1detalhe(){
    return(
        <div className="Carro1detalhe">
            <Header/>
        
            <div className="container">
                <div className="nomecarro"><h1>ROCKET BUNNY</h1></div>
                <img src={carro1} alt="Minha Imagem"  id='carro1'/>
                <p id='paragrafo'>O Rocket Bunny Toyota GT86 - Suki Edition é um carro modificado inspirado no Toyota GT86, um coupé esportivo lançado em 2012.
A história por trás deste carro começa com a personagem Suki, interpretada pela atriz Devon Aoki, no filme "Velozes e Furiosos" (2001), onde ela dirige um Honda S2000 rosa modificado. O carro de Suki se tornou um ícone na cultura automotiva e inspirou muitos entusiastas a personalizarem seus próprios carros.
Em 2015, a loja de personalização de carros MV Designz criou o Rocket Bunny Toyota GT86 - Suki Edition como uma homenagem a Suki e seu icônico Honda S2000 rosa. O carro apresenta uma carroceria Rocket Bunny com para-choques personalizados, um kit de saia lateral e um spoiler traseiro grande, todos em rosa. O interior foi personalizado com estofamento rosa e preto e detalhes em fibra de carbono.</p>
        
        
            </div>


        </div>
);
}

export default Carro1detalhe;