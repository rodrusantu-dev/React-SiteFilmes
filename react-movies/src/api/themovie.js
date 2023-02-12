import axios from 'axios'

const API_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "b1e21bc8feb781a12e8ebeda55e02dab";
const LANGUAGE = "pt-BR";
const page = "1"

    export const getList = (setState) => {
        axios.get(`${API_URL}popular?api_key=${API_KEY}&language=${LANGUAGE}&page=${page}`)
        .then ((response) => {
            console.log(response)
            setState(response.data.results)
        })
        .catch ((error) => {
            console.log(error)
        })
    }

    export const getDetail = async(id, setState) => {
        axios.get(`${API_URL}${id}?api_key=${API_KEY}&language=${LANGUAGE}`)
        .then ((response) => {
            console.log(response)
            setState(response.data) 
        })
        .catch ((error) => {
            console.log(error)
        })
    }


