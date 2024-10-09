import {useState , useEffect} from "react";
import {getAllProducts} from "../../services/services_products";
import {Link} from "react-router-dom";

const BestSellers = ()=>{

    const [products , setProducts] = useState([]);

    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getAllProducts();
            // console.log(response.data);
            const data = response.data;
            const AllProduct = data.sort((a , b)=> b.sales - a.sales ).slice(0 , 9);
            // console.log(AllProduct);
            setProducts(AllProduct);

        }

        fetchData();

    } , []);

    return(

        <>

            <div id="best_seller" className="container-fluid mt-lg-5 mt-5" style={{minHeight:"280px"}}>
                <div className="container" style={{height:"100%" , maxWidth:"1210px"}}>

                    <div className="row">

                        <div className="col-lg-6 d-lg-flex justify-content-lg-center align-items-lg-center col-6 d-flex justify-content-center align-items-center">
                            <div className="col-lg-12 col-12 font-category text-white" style={{fontSize:"23px" , fontFamily:"Sahel-Bold"}}>پر فروش ترین ها</div>
                        </div>

                    </div>


                    <div className="row mt-lg-3 mt-3">

                        <div className="box-bestSellers">

                            {
                                products.map((product , index)=>(

                                    <div key={index} className="box-forush">

                                        <Link to={`/single-product/${product.id}`}>
                                            <div className="ax-game"> </div>

                                            <div className="title-game">{product.nameProduct}</div>

                                            <div className="box-price">

                                                {
                                                    product.discount !== "ندارد" ? (
                                                            <>
                                                                <div className="price-game" style={{textDecoration: 'line-through'}}>{product.price} تومان </div>
                                                                <div className="discount-game"> تخفیف : {product.discount}</div>
                                                            </>
                                                        )
                                                        :
                                                        (
                                                            <>
                                                                <div className="price-game">{product.price} تومان </div>
                                                                <div className="discount-game"> تخفیف : {product.discount}</div>
                                                            </>
                                                        )
                                                }

                                            </div>

                                            <div className="name-system">طراحی شده برای : <span>{product.category}</span></div>

                                        </Link>

                                    </div>

                                ))
                            }

                        </div>

                    </div>


                </div>
            </div>

        </>

    )

}


export default BestSellers;