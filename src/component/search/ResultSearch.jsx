import {Link, useLocation} from "react-router-dom";
import {useState , useEffect} from "react";
import {getAllProducts} from "../../services/services_products";
import game1 from "../../assets/img/game1.webp";

const useQuery = ()=>{
    return new URLSearchParams(useLocation().search);
}

const ResultSearch = ()=>{

    const query = useQuery().get('query');
    const [allProduct , setAllProduct] = useState([]);

    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getAllProducts();
            console.log(response.data);

            const data = response.data;
            const filterProduct =  data.filter(product=>product.nameProduct.toLowerCase().includes(query.toLowerCase()));
            setAllProduct(filterProduct);

        }

        fetchData();

    } , [allProduct]);

    return(

        <>

            <div className="container-fluid" style={{marginTop:"120px"}}>

                <div className="container" style={{height:"100%" , maxWidth:"1210px"}}>

                    <div className="row">

                        <h2 className="col-lg-12 m-lg-auto text-lg-center text-white col-12 m-auto text-center col-sm-12 m-sm-auto text-sm-center" style={{fontSize:"25px" , fontFamily:"Sahel-Bold"}}>نتایج جست و جو ({query})</h2>

                        {
                            allProduct.length > 0 ? (

                                allProduct.map((product , index)=>(

                                    <div key={index} className="col-lg-3 float-lg-end mt-lg-4 col-10 m-md-0 m-auto mt-4 col-sm-6 float-sm-end mt-sm-4 col-md-4 float-md-end mt-md-4">

                                        <Link to={`/single-product/${product.id}`} class="text-decoration-none">
                                            <div className="col-lg-12 m-lg-auto pb-lg-4 col-12 m-auto pb-4 col-sm-12 m-sm-auto pb-sm-4 col-md-12 m-md-auto pb-md-4" style={{backgroundColor:"#1c2235" , borderRadius:"17px"}}>

                                                <img src={game1} alt="" className="col-lg-12 col-12 col-sm-12 col-md-12" style={{borderTopRightRadius:"17px" , borderTopLeftRadius:"17px"}}/>
                                                <div className="col-lg-12 m-lg-auto mt-lg-3 text-white text-lg-center col-12 m-auto mt-3 text-center col-sm-12 m-sm-auto mt-sm-3 text-sm-center col-md-12 m-md-auto mt-md-3 text-md-center" style={{fontSize:"17px" , fontFamily:"yekan"}}>{product.nameProduct}</div>
                                                <div className="col-lg-12 m-lg-auto mt-lg-3 text-white text-lg-center col-12 m-auto mt-3 text-center col-sm-12 m-sm-auto mt-sm-3 text-sm-center col-md-12 m-md-auto mt-md-3 text-md-center" style={{fontSize:"16px" , fontFamily:"yekan"}}>{ product.discount !== "ندارد" ? product.discount : product.price } تومان</div>
                                            </div>
                                        </Link>

                                    </div>

                                ))
                            )
                                :
                                (
                                    <>

                                        <h2 className="text-lg-center text-warning mt-lg-5 text-search" style={{fontFamily:"yekan"}}>محصول مورد نظر یافت نشد !</h2>
                                        <Link to={"/"} className="btn btn-warning col-lg-2 col-5 m-lg-auto m-auto mt-lg-5 mt-5" style={{fontFamily:"yekan"}}>بازگشت به صفحه اصلی</Link>

                                    </>
                                )
                        }

                    </div>


                </div>

            </div>

        </>

    )

}


export default ResultSearch;