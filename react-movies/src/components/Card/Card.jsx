import { MainContainer } from "../../layouts/CardStyle";

export const Card = ({movie}) => {
    return (
        <MainContainer>
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
};