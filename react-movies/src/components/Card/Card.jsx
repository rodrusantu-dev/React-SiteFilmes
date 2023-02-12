
import { MainContainer } from "../Card/CardStyle"
import { getDetail } from "../../api/themovie"
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovieInfo } from "../../redux/reactMoviesSlice";

export const Card = ({movie}) => {
    const [ movieDetail, setMovieDetails] = useState()
    const dispatch = useDispatch()

    const onHoverDetail = async(e) => {
    getDetail(e.target.id, setMovieDetails)
    }


useEffect(() => {
    dispatch(getMovieInfo(movieDetail))
},[movieDetail])

    return (
        <MainContainer to={"/detail"} onMouseEnter={onHoverDetail} id={movie.id}>  
            <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            id={movie.id}            
            />
            <div className="infoContainer">
                <h4 >Título: {movie.title}</h4>
                <h4>Nota1: {movie.vote_average}</h4>
            </div>
           
        </MainContainer>
    );
}
