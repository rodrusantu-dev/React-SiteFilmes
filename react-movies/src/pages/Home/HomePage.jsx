import { useEffect, useState } from "react"
import { Header } from "../../components/Header/Header"
import { Favoritos } from "../../components/Main/Main"
import { Card } from "../../components/Card/Card"
import { Logo } from "../../components/Header/HeaderStyle"
import { Main, Grid } from "../../components/Main/MainStyle"
import { getList } from "../../api/themovie"
import { Footer } from "../../components/Footer/Footer"




export default function Home(){

const [movies, setMovies] = useState([])

useEffect (() => {
    getList(setMovies)
},[])
 
    return(
        <div>
            <Header Home="Home"/>
            <Logo/> 

            <Main>
                <Favoritos Filmes="Filmes Populares"/>
                <Grid>
                    {movies.map((movie) => {
                        return (
                            <Card movie={movie}/>
                        )
                    })} 
                </Grid>
            </Main>
            <Footer/>
        </div>  
    )
}

