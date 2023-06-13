import painel from '../imgs/container.jpg';
import './Telainicial.css';
import Header from '../components/header';
import Carro1 from '../imgs/carro1.jpg';
import Carro2 from '../imgs/carro2.jpg';
import Carro3 from '../imgs/carro3.jpg';
import Carro4 from '../imgs/carro4.jpg';
import Carro5 from '../imgs/carro5.jpg';
import Carro6 from '../imgs/carro6.jpg';
import { Link } from 'react-router-dom';
function Telainicial() {
    return (
      <div className="Telainicial">
       <Header/>
         
        <img src={painel} alt="painel de carro" className="painel"/>

        <div className="containercars">
        
      <img src={Carro1} alt="Minha Imagem" className="carro" />
      <img src={Carro2} alt="Minha Imagem" className="carro" />
      <img src={Carro3} alt="Minha Imagem" className="carro" />
      <img src={Carro4} alt="Minha Imagem" className="carro" />
      <img src={Carro5} alt="Minha Imagem" className="carro" />
      <img src={Carro6} alt="Minha Imagem" className="carro" />
    </div>
        
        
    

   
        </div>
    );
  }

export default Telainicial;