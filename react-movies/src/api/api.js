import axios from 'axios'

export const getList = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b1e21bc8feb781a12e8ebeda55e02dab&language=pt-BR&page=1`)
    .then ((response) => {
        console.log(response)
    })
    .catch ((error) => {
        console.log(error)
    })
}

export const getDetail = (id) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b1e21bc8feb781a12e8ebeda55e02dab&language=pt-BR`)
    .then ((response) => {
        console.log(response)
    })
    .catch ((error) => {
        console.log(error)
    })
}