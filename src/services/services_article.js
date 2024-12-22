import axios from "axios";

const SERVER_URL = "http://localhost:7000";

export const getAllArticles = ()=>{

    const url = `${SERVER_URL}/articles`;

    return axios.get(url);

}


export const getArticle = (idArticle)=>{

    const url = `${SERVER_URL}/articles/${idArticle}`;

    return axios.get(url);

}


export const createArticle = (article)=>{

    const url = `${SERVER_URL}/articles`;

    return axios.post(url , article);

}


export const updateArticle = (article , idArticle)=>{

    const url = `${SERVER_URL}/articles/${idArticle}`;

    return axios.put(url , article);

}


export const deleteArticle = (idArticle)=>{

    const url = `${SERVER_URL}/articles/${idArticle}`;

    return axios.delete(url);

}