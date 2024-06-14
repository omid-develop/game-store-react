import {Outlet} from 'react-router-dom';
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

const MainLayouts = ()=>{

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