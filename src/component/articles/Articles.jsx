import {useState , useEffect} from "react";
import game1 from "../../assets/img/game1.webp";
import {getAllArticles} from "../../services/services_article";
import {Link} from "react-router-dom";

const Articles = ()=>{

    const [articles , setArticles] = useState([]);

    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getAllArticles();
            setArticles(response.data);

        }

        fetchData();

    } , []);

    return(

        <>

            <div className="container-fluid" style={{marginTop:"120px"}}>

                <div className="container" style={{height:"100%" , maxWidth:"1210px"}}>

                    <div className="row">
                        <div className="col-lg-12 text-white col-12 m-lg-auto m-auto text-lg-center text-center" style={{fontSize:"23px" , fontFamily:"Sahel-Bold"}}>همه مقالات</div>
                    </div>


                <div className="row">


                    {
                        articles.map((article , index)=>(

                            <div key={index} className="col-lg-3 float-lg-end m-lg-0 col-10 m-auto mt-4 mt-lg-5 col-sm-6 float-sm-end mt-sm-4 col-md-4 float-md-end mt-md-4 m-md-0">

                                <div className="col-lg-12 m-lg-auto pb-lg-3 col-12 m-auto pb-3 col-sm-12 m-sm-auto pb-sm-3 col-md-12 m-md-auto pb-md-3" style={{borderRadius:"17px" , backgroundColor:"#151b2d"}}>

                                    <img src={game1} alt="" className="col-lg-12 col-12 col-sm-12 col-md-12" style={{borderTopLeftRadius:"17px" , borderTopRightRadius:"17px"}}/>

                                    <div className="col-lg-12 p-3 text-white m-lg-auto d-block m-auto mt-lg-3 text-lg-center col-12 m-auto mt-3 text-center col-sm-12 m-sm-auto mt-sm-3 text-sm-center col-md-12 m-md-auto mt-md-3 text-md-center" style={{fontSize:"17px" , fontFamily:"yekan"}}>{article.name_article}</div>
                                    <Link to={`/articles/single-article/${article.id}`} className="d-lg-block m-lg-auto col-lg-6 col-6 m-auto d-block p-2 text-center mt-2 text-white p-lg-2 text-decoration-none rounded-3 text-lg-center mt-lg-2" style={{backgroundColor:"#a04cff" , fontFamily:"yekan"}}>مشاهده مقاله</Link>

                                </div>

                            </div>

                        ))
                    }


                </div>

                </div>
            </div>

        </>

    )

}


export default Articles;