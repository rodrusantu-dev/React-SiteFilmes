import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'

export default function HomePage(){
    return(
        <div>
                <div>
                    <Header props="Este é o HEADER"/>
                </div>
                <div>
                    <Main props="Banner de Filmes"/>
                </div>
                <div>
                    <Footer props="React Movies @ 2022."/>
                </div>
        </div>
    )
}