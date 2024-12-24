import game1 from '../../assets/img/game1.webp';
import {useState , useEffect} from "react";
import {getProduct} from "../../services/services_products";
import {useParams} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";


const ProductSingle = ()=>{

    const [games , setGames] = useState("");
    const {id} = useParams();

    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getProduct(id);
            console.log(response.data);
            setGames(response.data);
        }

        fetchData();

    } , []);


    const cartClick = ()=>{
        toast.error("در حال حاضر امکان خرید محصول وجود ندارد !");
    }


    return(

        <>

            <div className="container-fluid" style={{marginTop:"120px"}}>
                <div className="container" style={{height:"100%" , maxWidth:"1210px"}}>

                    <div className="row">

                        <div className="col-lg-12 m-lg-auto col-12 m-auto col-sm-12 m-sm-auto col-md-12 m-md-auto text-lg-end text-center text-sm-center text-md-end text-white" style={{fontSize:"16px" , fontFamily:"Sahel-Bold"}}>خانه / دسته بندی / {games.category}</div>

                        <div className="col-lg-9 m-lg-auto mt-lg-4 col-12 m-auto mt-4 col-sm-9 m-sm-auto mt-sm-4 col-md-12 m-md-auto mt-md-4">

                            <div className="col-lg-6 float-lg-end col-12 col-sm-12 col-md-6 float-md-end">

                                <div className="col-lg-11 m-lg-auto col-12 m-auto col-sm-12 m-sm-auto col-md-11 m-md-auto">
                                    <img src={games.image} alt="" className="col-lg-12 col-12 col-sm-12 col-md-12"/>
                                </div>

                            </div>

                            <div className="col-lg-6 float-lg-end col-12 col-sm-12 col-md-6 float-md-end" style={{paddingBottom:"75px" , borderRadius:"10px" , backgroundColor:"#151b2d"}}>

                                <div className="col-lg-12 m-lg-auto mt-lg-5 text-lg-center text-white col-12 m-auto mt-4 pt-lg-0 pt-5 text-center col-sm-12 m-sm-auto mt-sm-3 text-sm-center col-md-12 m-md-auto mt-md-3" style={{fontSize:"24px" , fontFamily:"Sahel-Bold"}}>نام بازی : {games.nameProduct}</div>

                                <div className="col-lg-12 m-lg-auto mt-lg-5 text-lg-center text-white col-12 m-auto mt-5 text-center col-sm-12 m-sm-auto mt-sm-4 text-sm-center col-md-12 m-md-auto mt-md-4 text-md-center" style={{fontSize:"20px" , fontFamily:"Sahel-Bold"}}>قیمت : {games.discount !== "ندارد" ? games.discount : games.price} تومان</div>

                                <div className="col-lg-12 m-lg-auto mt-lg-5 text-lg-center col-12 m-auto mt-5 text-center col-sm-12 m-sm-auto mt-sm-4 text-sm-center col-md-12 m-md-auto mt-md-4 text-md-center" style={{fontSize:"19px" , fontFamily:"yekan"}}>
                                    <button onClick={cartClick} className="btn col-lg-10 text-white col-10 col-sm-10 col-md-10" style={{padding:"9px 0" , backgroundColor:"#a04cff"}}>افزودن به سبد خرید</button>
                                </div>

                                <div className="col-lg-12 m-lg-auto mt-lg-5 text-lg-center text-white col-12 m-auto mt-5 text-center col-sm-12 m-sm-auto mt-sm-4 text-sm-center col-md-12 m-md-auto mt-md-4 text-md-center" style={{fontSize:"19px" , fontFamily:"Sahel-Bold"}}>دسته بندی : {games.category}</div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

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


export default ProductSingle;