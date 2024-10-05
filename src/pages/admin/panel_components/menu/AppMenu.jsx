import ViewMenu from "./ViewMenu";
import {useState , useEffect} from "react";
import {getAllItemsMenu} from "../../../../services/services_menu";
import {ToastContainer} from "react-toastify";

const AppMenu = ()=>{

    const [AllItem , setAllItem] = useState([]);

    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getAllItemsMenu();
            console.log(response.data);
            setAllItem(response.data);

        }

        fetchData();

    } , []);

    return(

        <>

            <ViewMenu items={AllItem}/>

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