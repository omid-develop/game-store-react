import ViewProduct from "./ViewProduct";
import {useState , useEffect} from "react";
import {getAllProducts} from "../../../../services/services_products";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppProduct = ()=>{

    const [AllProduct , setAllProduct] = useState([]);

    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getAllProducts();
            setAllProduct(response.data);
            // console.log(response.data);

        }

        fetchData();

    } , [AllProduct]);

    return(

        <>

            <ViewProduct products={AllProduct}/>

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


export default AppProduct;