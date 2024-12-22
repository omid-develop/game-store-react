import ViewArticle from "./ViewArticle";
import {useState , useEffect} from "react";
import {getAllArticles} from "../../../../services/services_article";

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

        </>

    )

}


export default AppArticle;