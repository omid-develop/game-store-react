import {Outlet, useLocation} from 'react-router-dom';
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import {useLayoutEffect} from "react";

const MainLayouts = ()=>{

    const location = useLocation();
    useLayoutEffect(()=>{
        document.documentElement.scrollTo({top:0 , left:0 , behavior:"instant"});
    },[location.pathname]);
    return(

        <>

            <Navbar/>

            <div>

                <Outlet/>

            </div>

            <Footer/>

        </>

    )

}


export default MainLayouts;