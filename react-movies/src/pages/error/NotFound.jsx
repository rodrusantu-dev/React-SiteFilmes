import { Footer } from "../../components/Footer/Footer"
import ButtonErro from "../../components/Button/ButtonErro"
import { Link } from "react-router-dom"



export default  function NotFound(){
    return (
        <div>
            <h1>Ops! Página não encontrada</h1>
            <h2>Desculpe, a página que você buscou não foi encontrada</h2>
            <h3>Use o botão abaixo, para voltar a página principal</h3>
         
            <Link to="/">
                <ButtonErro buttonErrotext/>
            </Link>

            <Footer value="Footer da NotFound"/>
        </div>
    )

}