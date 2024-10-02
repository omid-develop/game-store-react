import ViewCategory from "./ViewCategory";
import {useState , useEffect} from "react";
import {getAllCategories} from "../../../../services/services_category";
import AddProduct from "../products/AddProduct";

const AppCategory = ()=>{

    const [allCategory , setAllCategory] = useState([]);

    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getAllCategories();
            // console.log(response.data);
            setAllCategory(response.data);

        }

        fetchData();

    } , [allCategory]);

    return(

        <>

            <ViewCategory categories={allCategory}/>

        </>

    )

}


export default AppCategory;