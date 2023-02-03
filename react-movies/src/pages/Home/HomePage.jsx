import { useEffect, useState } from "react"
import { Header } from "../../components/Header/Header"
import { Favoritos } from "../../components/Main/Main"
import { Card } from "../../components/Card/Card"
import { Logo } from "../../layouts/Header"
import { Main, Grid } from "../../layouts/Main"
import { getList } from "../../api/themovie"


export default function Home(){

const [movies, setMovies] = useState([])
useEffect (() => {
    getList(setMovies)
},[])
 
    return(
        <div>

            <div>
                <Header Home="Home"/>
                <Logo/> 
            </div> 

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
        </div>  
    )
}

