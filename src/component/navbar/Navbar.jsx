import {Link} from "react-router-dom";
// import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import {useState , useEffect} from "react";
import {getAllMenu} from "../../services/services_menu";

const Navbar = ()=>{

    const [menu , setMenu] = useState([]);

    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getAllMenu();
            // console.log(response.data);
            setMenu(response.data);

        }

        fetchData();

    } , []);

    return(

        <>

           <nav className="navbar navbar-expand-lg fixed-top pt-lg-3 pb-lg-3" style={{zIndex:"100" , backgroundColor:"#001728"}}>

               <div className="container-fluid">

                   <Link to="/" className="navbar-brand text-white" style={{fontSize:"18px" , fontFamily:"Sahel-Bold"}}>فروشگاه فروش بازی</Link>

                   <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" style={{backgroundColor:"white"}}>
                       <span className="navbar-toggler-icon"> </span>
                   </button>

                   <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{backgroundColor:"navy"}}>

                       <div className="offcanvas-header">
                           <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel" style={{fontFamily:"Sahel-Bold"}}>فروشگاه فروش بازی</h5>
                           <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"> </button>
                       </div>

                       <div className="offcanvas-body">

                           <ul className="navbar-nav justify-content-lg-start align-items-lg-center flex-grow-1 pe-3 me-lg-5 me-0" style={{fontSize:"16px" , fontFamily:"yekan"}}>

                               {
                                   menu.map((option , index)=>(

                                       <li key={index} className="nav-item me-lg-3 me-2">
                                           <Link to={option.url_item} className="nav-link active text-white" aria-current="page" href="#">{option.nameItem}</Link>
                                       </li>

                                   ))
                               }

                           </ul>


                           <div style={{display:"flex" , alignItems:"center"}} className="ms-lg-2 ms-3 mt-lg-0 mt-4">

                               <div className="search">
                                   <input type="text" className="input" placeholder="جست و جو"/>

                                   <div className="docme">
                                       <i className="fas fa-search zarebin text-white" style={{fontSize:"22px" , paddingRight:"15px" , marginLeft:"23px"}}> </i>
                                       {/*<FaSearch className="zarebin text-white" style={{fontSize:"22px"}}/>*/}
                                   </div>

                               </div>

                           </div>


                           <div style={{display:"flex" , alignItems:"center"}} className="ms-lg-2 ms-3 mt-lg-0 mt-3">
                               {/*<i className="fas fa-shopping-cart ms-4 text-white" style="font-size: 22px"></i>*/}
                               <FaShoppingCart className="ms-4 text-white" style={{fontSize:"22px"}}/>
                           </div>

                           <div style={{display:"flex" , alignItems:"center"}} className="ms-lg-2 ms-3 mt-lg-0 mt-3">
                               {/*<i className="fas fa-shopping-cart ms-4 text-white" style="font-size: 22px"></i>*/}
                               <FaUser className="ms-4 text-white" style={{fontSize:"22px"}}/>
                           </div>



                       </div>

                   </div>

               </div>

           </nav>

        </>

    )

}


export default Navbar;