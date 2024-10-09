import {useState , useEffect} from "react";
import {getAllCategories} from "../../services/services_category";
import {Link} from "react-router-dom";

const Category = ()=>{

    const [allCategory , setAllCategory] = useState([]);

    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getAllCategories();
            // console.log(response.data);
            setAllCategory(response.data);

        }

        fetchData();

    } , []);

    return(

        <>

            <div className="container-fluid mt-lg-5 mt-5 box-categories pt-lg-4 pb-lg-4 p-4 pb-4">
                <div className="container" style={{height:"100%" , maxWidth:"1210px"}}>

                    <div className="row">

                        <div className="col-lg-6 d-lg-flex justify-content-lg-center align-items-lg-center col-6 d-flex justify-content-center align-items-center">
                            <div className="col-lg-12 col-12 font-category text-white" style={{fontSize:"23px" , fontFamily:"Sahel-Bold"}}>دسته بندی ها</div>
                        </div>

                        <div className="col-lg-6 col-6">
                            <div className="col-lg-12 col-12">
                                <a href="/categories" className="col-lg-3 float-lg-start text-decoration-none text-black text-lg-center col-9 float-start text-center col-sm-5 float-sm-start text-white" style={{backgroundColor:"#505669" , padding:"9px 0" , borderRadius:"5px" , fontFamily:"Sahel-Bold"}}>موارد بیشتر <i className="fas fa-angle-left"> </i></a>
                            </div>
                        </div>

                    </div>


                    <div className="row mt-lg-1">

                        {
                            allCategory.map((category , index)=>(

                                <div key={index} className="col-lg-2 mt-lg-4 col-4 mt-4 col-sm-3 mt-sm-4">

                                    <Link to={`category-product/${category.nameCategory}`} className="text-decoration-none">

                                        <div className="box-ax-category">
                                            <img src={category.imageCategory} alt="" className="col-lg-12 col-12 col-sm-12"/>
                                        </div>

                                        <div className="col-lg-12 m-lg-auto mt-lg-3 text-lg-center text-white col-12 m-auto text-center col-sm-12 m-sm-auto text-sm-center" style={{fontSize:"17px" , fontFamily:"yekan"}}>{category.nameCategory}</div>


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


export default Category;