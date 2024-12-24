import game1 from '../../assets/img/game1.webp';
import {Link, useParams} from "react-router-dom";
import {useState , useEffect} from "react";
import {getAllProducts, getProduct} from "../../services/services_products";

const ProductCategory = ()=>{

    const {categoryName} = useParams();

    const [products , setProducts] = useState([]);
    const [sortedProducts , setSortedProducts] = useState([]);

    useEffect(()=>{

        const fetchData = async (category)=>{

            const response = await getAllProducts();
            // console.log(response.data);

            const data = response.data;

            const filterProduct = data.filter(product=>product.category === category);
            console.log(filterProduct);
            setProducts(filterProduct);
            setSortedProducts(filterProduct);

        }

        fetchData(categoryName);

    } , [categoryName]);


    const sortSmall = ()=>{
        const sorted = [...products].sort((a , b)=>parseInt(a.price) - parseInt(b.price));
        setSortedProducts(sorted);
    }

    const sortLarge = ()=>{
        const sorted = [...products].sort((a , b)=>parseInt(b.price) - parseInt(a.price));
        setSortedProducts(sorted);
    }



    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getProduct(categoryName);
            console.log(response.data);

        }

        fetchData();

    })

    return(

        <>

            <div className="container-fluid mt-lg-5 mt-5">
                <div className="container" style={{height:"100%" , maxWidth:"1210px"}}>

                    <div className="row">

                        <div className="col-lg-12 m-lg-auto text-lg-center col-12 m-auto text-center col-sm-12 m-sm-auto text-sm-center col-md-12 m-md-auto text-md-center text-white" style={{fontSize:"22px" , fontFamily:"Sahel-Bold"}}>بازی های {categoryName}</div>

                        <div className="col-lg-12 m-lg-auto mt-lg-4 col-12 m-auto mt-4 col-sm-12 m-sm-auto mt-sm-4" style={{backgroundColor:"darkviolet" , borderRadius:"20px"}}>

                            <div className="col-lg-6 float-lg-end col-12 text-lg-end text-center float-end col-sm-12 float-sm-end col-md-12 float-md-end text-white pe-lg-4" style={{fontSize:"16px" , fontFamily:"Sahel-Bold" , padding:"10px 0"}}>خانه / دسته بندی / {categoryName}</div>

                            <div className="col-lg-6 float-lg-end col-12 float-end col-sm-12 float-sm-end col-md-12 float-md-end" style={{padding:"10px 0"}}>

                                <div className="col-lg-10 float-lg-start col-12">

                                    <div className="col-lg-4 float-lg-end text-lg-center col-4 float-end col-sm-5 float-sm-end col-md-5 float-md-end text-white" style={{fontSize:"15px" , fontFamily:"yekan"}}>مرتب سازی بر اساس :</div>

                                    <div onClick={sortLarge} className="col-lg-4 text-center float-lg-end text-lg-center col-4 float-end col-sm-3 float-sm-end col-md-3 float-md-end" style={{fontSize:"16px" , fontFamily:"yekan" , color:"black" , cursor:"pointer"}}>گران ترین ها</div>

                                    <div onClick={sortSmall} className="col-lg-4 text-center float-lg-end text-lg-center col-4 float-end col-sm-3 float-sm-end col-md-3 float-md-end" style={{fontSize:"16px" , fontFamily:"yekan" , color:"black" , cursor:"pointer"}}>ارزان ترین ها</div>

                                </div>

                            </div>
                        </div>


                        {
                            sortedProducts.map((product , index)=>(

                                <div key={index} className="col-lg-3 float-lg-end mt-lg-5 col-10 m-md-0 m-auto mt-4 col-sm-6 float-sm-end mt-sm-4 col-md-4 float-md-end mt-md-4">

                                    <Link to={`/single-product/${product.id}`} className="text-decoration-none">

                                        <div className="col-lg-12 m-lg-auto pb-lg-4 col-12 m-auto pb-4 col-sm-12 m-sm-auto pb-sm-4 col-md-12 m-md-auto pb-md-4" style={{backgroundColor:"#1c2235" , borderRadius:"17px"}}>

                                            <img src={product.image} alt="" className="col-lg-12 col-12 col-sm-12 col-md-12" style={{borderTopRightRadius:"17px" , borderTopLeftRadius:"17px"}}/>

                                            <div className="col-lg-12 m-lg-auto mt-lg-3 text-white text-lg-center col-12 m-auto mt-3 text-center col-sm-12 m-sm-auto mt-sm-3 text-sm-center col-md-12 m-md-auto mt-md-3 text-md-center" style={{fontSize:"17px" , fontFamily:"yekan"}}>{product.nameProduct}</div>
                                            <div className="col-lg-12 m-lg-auto mt-lg-3 text-white text-lg-center col-12 m-auto mt-3 text-center col-sm-12 m-sm-auto mt-sm-3 text-sm-center col-md-12 m-md-auto mt-md-3 text-md-center" style={{fontSize:"16px" , fontFamily:"yekan"}}>{product.discount !== "ندارد" ? product.discount : product.price} تومان</div>

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


export default ProductCategory;