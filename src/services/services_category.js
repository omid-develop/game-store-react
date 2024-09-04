import axios from "axios";

const SERVER_URL = "http://localhost:7000";

export const getAllCategories = ()=>{

    const url = `${SERVER_URL}/categories`;

    return axios.get(url);

}



export const getCategory = (idCategory)=>{

    const url = `${SERVER_URL}/categories/${idCategory}`;

    return axios.get(url);

}



export const createdCategory = (category)=>{

    const url = `${SERVER_URL}/categories`;

    return axios.post(url , category);

}



export const updateCategory = (category , idCategory)=>{

    const url = `${SERVER_URL}/categories/${idCategory}`;

    return axios.put(url , category);

}



export const deleteCategory = (idCategory)=>{

    const url = `${SERVER_URL}/categories/${idCategory}`;

    return axios.delete(url);

}