import { Header } from '../../components/Header/Header'
import { Main } from '../../components/Main/Main'
import { Footer } from '../../components/Footer/Footer'
import { useState, useEffect } from 'react'
import { getList } from '../../api/themovie'
import { MoviesList } from '../../components/MoviesComp/MoviesList'

export default function HomePage(){
    const [movies, setMovies] = useState([])

    useEffect (() => {
        getList(setMovies)
    },[])

    return(
        <>
            <Header titleHome/>
            <Main popularMovies/>
            <MoviesList movies={movies}/>
            <Footer copyright/>
        </>
    )
}



