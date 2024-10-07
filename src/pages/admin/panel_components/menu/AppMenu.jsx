import ViewMenu from "./ViewMenu";
import {useState , useEffect} from "react";
import {getAllMenu} from "../../../../services/services_menu";
import {ToastContainer} from "react-toastify";

const AppMenu = ()=>{

    const [allMenu , setAllMenu] = useState([]);

    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getAllMenu();
            // console.log(response.data);
            setAllMenu(response.data);

        }

        fetchData();

    } , [allMenu]);

    return(

        <>

           <ViewMenu allMenu={allMenu}/>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition: Bounce
            />

        </>

    )

}


export default AppMenu;