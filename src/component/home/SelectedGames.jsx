import game1 from '../../assets/img/game1.webp';
import {useState , useEffect} from "react";
import {getAllProducts} from "../../services/services_products";
import {Link} from "react-router-dom";

const SelectedGames = ()=>{

    const [selectsGames , setSelectGames] = useState([]);

    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getAllProducts();
            // console.log(response.data);
            const data = response.data;
            const AllProduct = data.sort((a , b)=> a.price - b.price).slice(0 , 4);
            setSelectGames(AllProduct);
            // console.log(AllProduct);

        }

        fetchData();

    } , []);


    return(

        <>

            <div className="container-fluid mt-lg-5 mt-5">
                <div className="container" style={{height:"100%" , maxWidth:"1210px"}}>

                    <div className="row">

                        <div className="col-lg-6 d-lg-flex justify-content-lg-center align-items-lg-center col-6 d-flex justify-content-center align-items-center">
                            <div className="col-lg-12 col-12 font-category text-white" style={{fontSize:"23px" , fontFamily:"Sahel-Bold"}}>بازی های برگزیده</div>
                        </div>

                    </div>


                    <div className="row mt-lg-4 mt-1">

                        {
                            selectsGames.map((game , index)=>(

                                    <div key={index} className="col-lg-3 float-lg-end mt-lg-4 col-10 m-md-0 m-auto mt-4 col-sm-6 float-sm-end mt-sm-4 col-md-4 float-md-end mt-md-4">

                                        <Link to={`/single-product/${game.id}`} class="text-decoration-none">
                                            <div className="col-lg-12 m-lg-auto pb-lg-4 col-12 m-auto pb-4 col-sm-12 m-sm-auto pb-sm-4 col-md-12 m-md-auto pb-md-4" style={{backgroundColor:"#1c2235" , borderRadius:"17px"}}>

                                                <img src={game1} alt="" className="col-lg-12 col-12 col-sm-12 col-md-12" style={{borderTopRightRadius:"17px" , borderTopLeftRadius:"17px"}}/>
                                                <div className="col-lg-12 m-lg-auto mt-lg-3 text-white text-lg-center col-12 m-auto mt-3 text-center col-sm-12 m-sm-auto mt-sm-3 text-sm-center col-md-12 m-md-auto mt-md-3 text-md-center" style={{fontSize:"17px" , fontFamily:"yekan"}}>{game.nameProduct}</div>
                                                <div className="col-lg-12 m-lg-auto mt-lg-3 text-white text-lg-center col-12 m-auto mt-3 text-center col-sm-12 m-sm-auto mt-sm-3 text-sm-center col-md-12 m-md-auto mt-md-3 text-md-center" style={{fontSize:"16px" , fontFamily:"yekan"}}>{ game.discount !== "ندارد" ? game.discount : game.price } تومان</div>
                                            </div>
                                        </Link>

                                    </div>

                            ))
                        }

                    </div>


                </div>
            </div>

        </>

    )

}


export default SelectedGames;