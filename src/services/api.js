import Axios from "axios";
import { MOVIE_API_BASE_URL, API_KEY } from "../config/api_config";

export const listMovies = async (list, currentpage = 1) => {
    try{
        const response = await Axios.get(`${MOVIE_API_BASE_URL}/movie/${list}?api_key=${API_KEY}&page=${currentpage}`) 
        return response;
    }catch(error){
        throw error;
    } 
};

export const searchMovie = async (name, list, currentpage = 1) => {
    try{
        const response = await Axios.get(`${MOVIE_API_BASE_URL}/search/${list}?query=${name}&api_key=${API_KEY}&page=${currentpage}`)
        return response;
    }catch(error){
        throw error;
    } 
};

export const listTv = async (list, currentpage = 1) => {
    try{
        const response = await Axios.get(`${MOVIE_API_BASE_URL}/tv/${list}?api_key=${API_KEY}&page=${currentpage}`)
        return response;
    }catch(error){
        throw error;
    } 
};