import {FiEdit} from "react-icons/fi";
import {RiDeleteBin3Fill} from "react-icons/ri";
import {FaEye} from "react-icons/fa";
import {useState} from "react";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import FullProductInformation from "./ّFullProductInformation";
import DeleteProduct from "./DeleteProduct";

const ViewProduct = ({products})=>{

    const [openModal , setOpenModal] = useState(false);
    const [editModal , setEditModal] = useState(false);
    const [idModal , setIdModal] = useState("");
    const [modalInformation , setModalInformation] = useState(false);
    const [deleteModal , setDeleteModal] = useState(false);

    const modalId = (id)=>{

        setEditModal(true);
        setIdModal(id);
        // setIdModal(console.log(id));

    }


    const modalIdInformation = (id)=>{

        setModalInformation(true);
        setIdModal(id);
        // setIdModal(console.log(id));

    }


    const modalDelete = (id)=>{

        setDeleteModal(true);
        setIdModal(id);

    }


    return(

        <>

            <div className="col-lg-10 text-lg-center text-white border border-2 border-white p-lg-1" style={{fontSize:"22px" , fontFamily:"Sahel-Bold" , margin:"auto" ,  marginTop:"20px" , borderRadius:"10px"}}>نمایش محصولات</div>

            <div className="col-lg-10 m-lg-auto d-flex justify-content-lg-center mt-lg-5">

                <button onClick={()=>setOpenModal(true)} className="btn col-lg-3" style={{fontSize:"16px" , fontFamily:"yekan" , backgroundColor:"green" , color:"white"}}>ایجاد محصول جدید</button>

                <button className="btn btn-warning me-lg-5" style={{fontSize:"16px" , fontFamily:"yekan"}}>ورود به مستقیم به سایت</button>

            </div>


            {
                products.map((product , index)=>(

                    <div key={index} className="col-lg-8 bg-white m-lg-auto mt-lg-5 d-lg-flex" style={{borderRadius:"20px"}}>

                        <div className="col-lg-5 d-lg-flex justify-content-lg-center align-items-center" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>نام محصول : {product.nameProduct}</div>

                        <div className="col-lg-7 d-lg-flex justify-content-lg-around">

                            <button onClick={()=>modalId(product.id)} className="btn">

                                <FiEdit style={{fontSize:"29px" , color:"orange"}}/>

                            </button>

                            <button onClick={()=>modalIdInformation(product.id)} className="btn">

                                <FaEye style={{fontSize:"29px" , color:"blue"}}/>

                            </button>

                            <button onClick={()=>modalDelete(product.id)} className="btn">

                                <RiDeleteBin3Fill style={{fontSize:"29px" , color:"red"}}/>

                            </button>

                        </div>

                    </div>

                ))
            }


            {
                openModal ? <AddProduct onclose={()=>setOpenModal(false)}/> : null
            }

            {
                editModal ? <EditProduct idModal={idModal} onclose={()=>setEditModal(false)}/> : null
            }

            {
                modalInformation ? <FullProductInformation idModal={idModal} onclose={()=>setModalInformation(false)}/> : null
            }

            {
                deleteModal ? <DeleteProduct idModal={idModal} onclose={()=>setDeleteModal(false)}/> :null
            }

        </>

    )

}


export default ViewProduct;