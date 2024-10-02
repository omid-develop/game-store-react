import axios from "axios";

const SERVER_URL = "http://localhost:7000";

export const getAllProducts = ()=>{

    const url = `${SERVER_URL}/list_games`;

    return axios.get(url);

}



export const getProduct = (idProduct)=>{

    const url = `${SERVER_URL}/list_games/${idProduct}`;

    return axios.get(url);

}




export const createProduct = (product)=>{

    const url = `${SERVER_URL}/list_games`;

    return axios.post(url , product);

}



export const updateProduct = (product , idProduct)=>{

    const url = `${SERVER_URL}/list_games/${idProduct}`;

    return axios.put(url , product);

}



export const deleteProduct = (idProduct)=>{

    const url = `${SERVER_URL}/list_games/${idProduct}`;

    return axios.delete(url);

}