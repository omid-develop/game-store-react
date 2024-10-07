import axios from "axios";

const SERVER_URL = "http://localhost:7000";

export const getAllMenu = ()=>{

    const url = `${SERVER_URL}/menu`;

    return axios.get(url);

}



export const getMenu = (idMenu)=>{

    const url = `${SERVER_URL}/menu/${idMenu}`;

    return axios.get(url);

}


export const createMenu = (menu)=>{

    const url = `${SERVER_URL}/menu`;

    return axios.post(url , menu);

}



export const updateMenu = (menu , idMenu)=>{

    const url = `${SERVER_URL}/menu/${idMenu}`;

    return axios.put(url , menu);

}



export const deleteMenu = (idMenu)=>{

    const url = `${SERVER_URL}/menu/${idMenu}`;

    return axios.delete(url);

}