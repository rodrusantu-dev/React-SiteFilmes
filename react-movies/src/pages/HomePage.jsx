import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import { getList } from '../api/api'
import { Card } from '../components/Card'

export default function HomePage(){

    const [movies, setMovies] = useState([])

    useEffect (() => {
        getList(setMovies)
    },[])

    return(
        <div>
                <div>
                    <Header props="HOME"/>
                </div>    
                <div>
                    <Main props="Filmes Populares"/>
                </div> 
                <div>
                    {movies.map((movie) => {
                        return (
                            <Card movie={movie}/>
                        )
                    })}
            </div>    
                <div>
                    <Footer props="React Movies @ 2022."/>
                </div>
        </div>
    )
}
