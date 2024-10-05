import axios from "axios";

const SERVER_URL = "http://localhost:7000";

export const getAllItemsMenu = ()=>{

    const url = `${SERVER_URL}/menu`;

    return axios.get(url);

}


export const getItemsMenu = (idMenu)=>{

    const url = `${SERVER_URL}/menu/${idMenu}`;

    return axios.get(url);

}


export const createItemMenu = (item)=>{

    const url = `${SERVER_URL}/menu`;

    return axios.post(url , item);

}


export const updateMenu = (item , idMenu)=>{

    const url = `${SERVER_URL}/menu/${idMenu}`;

    return axios.put(url , item);

}


export const deleteMenu = (idMenu)=>{

    const url = `${SERVER_URL}/menu/${idMenu}`;

    return axios.delete(url);

}