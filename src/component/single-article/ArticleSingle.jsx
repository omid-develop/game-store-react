import {useEffect , useState} from "react";
import {getArticle} from "../../services/services_article";
import {useParams} from "react-router-dom";

const ArticleSingle = ()=>{

    const {id} = useParams();

    const [singleArticle , setSingleArticle] = useState("");

    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getArticle(id);
            // console.log(response.data);
            setSingleArticle(response.data);

        }

        fetchData();

    } , []);

    return(

        <>

            <div className="container-fluid">

                <div className="container" style={{height:"100%" , maxWidth:"1210px"}}>

                    <div className="col-lg-12 m-lg-auto mt-lg-5 text-lg-center col-12 m-auto mt-5 text-center col-sm-12 m-sm-auto mt-sm-5 text-sm-center" style={{fontSize:"20px" , fontFamily:"yekan" , color:"#a04cff"}}>
                        {singleArticle.name_article}
                    </div>

                    <div className="col-lg-12 text-white m-lg-auto mt-lg-5 text-lg-end col-12 m-auto mt-5 text-center col-sm-12 m-sm-auto mt-sm-5 text-sm-center" style={{fontSize:"16px" , fontFamily:"yekan" , lineHeight:"40px"}}>
                        {singleArticle.text_article}
                    </div>

                </div>

            </div>

        </>

    )

}


export default ArticleSingle;