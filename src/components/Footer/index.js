import Img1 from '../../assets/facebook.png'
import Img2 from '../../assets/instagram.png'
import Img3 from "../../assets/linkedin.png"
import "./styles.css"


const Footer = () => {
    return (
    
    <div className="footer">
        <div className="social-media">
            
        <a href="https://www.facebook.com/brasilisagencia/" target="_blank" rel="noreferrer">     
            <img className="imgs" src={Img1} alt="Imagem do logo do Facebook" width="25px" height="25px"/>

        </a>

        <a href="https://www.instagram.com/agenciabrasilis/" target="_blank" rel="noreferrer">     
            <img className="imgs"src={Img2} alt="Imagem do logo do Instagram" width="25px" height="25px"/>

        </a>

        <a href="https://www.linkedin.com/in/agência-brasilis-comunicação-805565150/" target="_blank" rel="noreferrer">       
            <img className="imgs"src={Img3} alt="Imagem do logo do Linkedin" width="25px" height="25px"/>
        
        </a>
        
        </div>

        <div className="autora">
        <p>Desenvolvido por <a href="https://www.linkedin.com/in/dandarasousa/" target="_blank" rel="noreferrer"><strong>Dandara Sousa</strong></a>. Todos os direitos revervados.</p>
        </div>

    </div>
    )
}
export default Footer