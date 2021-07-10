import Perfil1 from '../../assets/patricia.png'
import Perfil2 from '../../assets/dandara.png'
import './styles.css'


const Equipe = () =>{

    return (
     <div className="container">
         <h1>Nossa Equipe</h1>

         <div className="perfil">
            <img src={Perfil1} alt="Foto de Patricia Pinheiro" />
             <h2>Patrícia Pinheiro</h2>
             <p>Atendimento | Proprietária</p>
         </div>

         <div className="perfil">
            <img src={Perfil2} alt="Foto de Dandara Sousa"/>
             <h2>Dandara Sousa</h2>
             <p>Diretora de Arte</p>
         </div>
     </div>
    )
        
 }
 
 export default Equipe