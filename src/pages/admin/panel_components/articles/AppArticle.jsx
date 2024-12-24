import ViewArticle from "./ViewArticle";
import {useState , useEffect} from "react";
import {getAllArticles} from "../../../../services/services_article";
import {ToastContainer} from "react-toastify";

const AppArticle = ()=>{

    const [AllArticle , setAllArticle] = useState([]);

    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getAllArticles();
            setAllArticle(response.data);
            // console.log(response.data);

        }

        fetchData();

    } , [AllArticle])

    return(

        <>

            <ViewArticle articles={AllArticle}/>

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


export default AppArticle;