import search from '../../assets/img/search.png';
import {Link, useNavigate} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import {useState , useEffect} from "react";
import {getAllMenu} from "../../services/services_menu";
import {useAuth} from "../../../AuthContext";


const Navbar = ()=>{

    const [menu , setMenu] = useState([]);
    const [viewCart , setViewCart] = useState(false);

const {user}= useAuth();

    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getAllMenu();
            // console.log(response.data);
            setMenu(response.data);

        }

        fetchData();

    } , []);


    const [query , setQuery] = useState('');

    const navigate = useNavigate();

    const handleSearch = ()=>{

        if (query.trim()){
            navigate(`/search?query=${query}`);
            setQuery('');
        }

    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };


    console.log(user);


    const openViewCart = (event)=>{
        event.stopPropagation();
        setViewCart(true);
    }

    useEffect(()=>{
        document.addEventListener("click" , closeViewCart);

        return () => {
            // حذف رویداد هنگام از بین رفتن کامپوننت
            document.removeEventListener('click', closeViewCart);
        };
    } , []);

    const closeViewCart = ()=>{
        setViewCart(false);
    }


    return(

        <>

           <nav className="navbar navbar-expand-lg fixed-top pt-lg-3 pb-lg-3 pe-lg-4 ps-lg-4" style={{zIndex:"100" , backgroundColor:"#001728"}}>

               <div className="container-fluid">

                   <Link to="/" className="navbar-brand text-warning" style={{fontSize:"18px" , fontFamily:"Sahel-Bold"}}>فروشگاه فروش بازی</Link>

                   <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" style={{backgroundColor:"white"}}>
                       <span className="navbar-toggler-icon"> </span>
                   </button>

                   <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{backgroundColor:"#123456"}}>

                       <div className="offcanvas-header">
                           <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel" style={{fontFamily:"Sahel-Bold"}}>فروشگاه فروش بازی</h5>
                           <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"> </button>
                       </div>

                       <div className="offcanvas-body">

                           <ul className="navbar-nav justify-content-lg-start align-items-lg-center flex-grow-1 pe-3 me-lg-5 me-0" style={{fontSize:"16px" , fontFamily:"yekan"}}>

                               {
                                   menu.map((option , index)=>(

                                       <li key={index} className="nav-item hover_item me-lg-3 me-2">
                                           <Link to={option.url_item} className="nav-link active text-white" aria-current="page" href="#">{option.nameItem}</Link>
                                       </li>

                                   ))
                               }

                           </ul>


                           <div className="box-search mt-lg-0 mt-2">

                               <div className="docme-search">
                                   <button onClick={handleSearch} style={{width:"40px" , height:"40px" , backgroundColor:"transparent" , border:"none"}}>
                                       <img src={search} alt="" className="col-lg-12 col-12" style={{marginTop:"-4px"}}/>
                                   </button>
                               </div>

                               <div className="box-input">
                                   <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} onKeyDown={handleKeyPress} name="" className="input" placeholder="جست و جو"/>
                               </div>

                           </div>


                           <div onClick={(e) => e.stopPropagation()} style={{display:"flex" , alignItems:"center"}} className="ms-lg-2 ms-3 mt-lg-0 mt-3">
                               <button onClick={openViewCart} className="bg-transparent cart_mobile" style={{border:"none"}}>
                                   <FaShoppingCart className="ms-4 text-white" style={{fontSize:"22px"}}/>
                               </button>

                               <div className="col-lg-2 view-cart transition cart_mobile" style={{left: viewCart ? 0 : `-500px` , transition:"left 0.5s ease"}}>

                                   <div className="col-lg-11 m-lg-auto mt-lg-4" style={{fontSize:"15px"}}>در حال حاضر سبد خرید شما خالی است . </div>

                               </div>

                           </div>

                           <div style={{display:"flex" , alignItems:"center"}} className="ms-lg-2 ms-3 mt-lg-0 mt-3">

                               {
                                   user == null ? (
                                       <Link to={"/register"}>
                                           <FaUser className="ms-4 text-white" style={{fontSize:"22px"}}/>
                                       </Link>
                                   ) : (
                                       <span className="text-warning" style={{fontSize:"14px" , fontFamily:"Sahel-Bold"}}> {user.user_metadata.full_name}</span>
                                   )
                               }


                           </div>



                       </div>

                   </div>

               </div>

           </nav>

        </>

    )

}


export default Navbar;