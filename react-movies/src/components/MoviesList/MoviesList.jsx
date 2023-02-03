import { Card } from "../Card/Card"

export function MoviesList({ movies }) {
    return (
        <>
            {movies.map((movie) => (
                <Card movie={movie} key={movie.id}/>
            ))}
        </>
    )
}