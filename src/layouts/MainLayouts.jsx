import {Outlet, useLocation} from 'react-router-dom';
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import {useEffect, useLayoutEffect} from "react";
import {supabase} from "../../supabaseClient";
import {AuthProvider} from "../../AuthContext";

const MainLayouts = ()=>{

    const location = useLocation();
    useLayoutEffect(()=>{
        document.documentElement.scrollTo({top:0 , left:0 , behavior:"instant"});
    },[location.pathname]);

    //
    // async function getUser(){
    //     const { data: { user } } = await supabase.auth.getUser();
    //     return user;
    // }

    // useEffect(()=> {
    //     getUser().then(user=>console.log(user));
    // },[]);


    return(

        <>

            <AuthProvider>
                <Navbar/>

                <div>

                    <Outlet />

                </div>

                <Footer/>
            </AuthProvider>


        </>

    )

}


export default MainLayouts;