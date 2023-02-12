import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Footer } from "../../components/Footer/Footer"
import { HeaderDetail } from "../../components/Header/Header"
import { Grid, MainContainer, RightSide } from "./DetailStyle"

export default function Details(){
const state = useSelector((state) => state.siteFullture.movie)

    return(
        <MainContainer>
        <HeaderDetail title={state.title}/>
            <Grid>
                <img src={`https://image.tmdb.org/t/p/w500/${state.poster.patch}`}
                alt="poster"/>
                
                <RightSide>
                    <p><b>Título:</b>{state.title}</p>
                    <p><b>Sinopse:</b>{state.overview}</p>
                    <p><b>Data Lançamento:</b>{state.release.datr}</p>
                    <p><b>Nota:</b>{state.vote_average}</p>
                    <Link to={"/"}><p>Voltar para HOME</p></Link>
                </RightSide>
                
            </Grid> 
            
            <Footer/>
        </MainContainer>
    )
}
