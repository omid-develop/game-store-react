import axios from "axios";

const SERVER_URL = "http://localhost:7000";

export const getAllItemsMenu = ()=>{

    const url = `${SERVER_URL}/menu`;

    return axios.get(url);

}


export const getItemMenu = (menuId)=>{

    const url = `${SERVER_URL}/menu/${menuId}`;
    return axios.get(url);

}



export const createMenu = (menu)=>{

    const url = `${SERVER_URL}/menu`;

    return axios.post(url , menu);

}



export const updateMenu = (menu , menuId)=>{

    const url = `${SERVER_URL}/menu/${menuId}`;

    return axios.put(url , menu);

}


export const deleteMenu = (menuId)=>{

    const url = `${SERVER_URL}/menu/${menuId}`;

    return axios.delete(url);

}