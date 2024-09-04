import {FiEdit} from "react-icons/fi";
import {RiDeleteBin3Fill} from "react-icons/ri";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";
import {useState} from "react";
import DeleteCategory from "./DeleteCategory";
import {useNavigate} from "react-router-dom";

const ViewCategory = ({categories})=>{

    const navigate = useNavigate();

    const [openModal , setOpenModal] = useState(false);
    const [editModal , setEditModal] = useState(false);
    const [idModal , setIdModal] = useState("");

    const modalId = (id)=>{
        setEditModal(true);
        setIdModal(id);
    }


    const [deleteModal , setDeleteModal] = useState(false);

    const deleteModalId = (id)=>{
        setDeleteModal(true);
        setIdModal(id);
    }

    return(

        <>

            <div className="col-lg-10 text-lg-center text-white border border-2 border-white p-lg-1" style={{fontSize:"22px" , fontFamily:"Sahel-Bold" , margin:"auto" ,  marginTop:"20px" , borderRadius:"10px"}}>دسته بندی</div>

            <div className="col-lg-10 m-lg-auto d-flex justify-content-lg-center mt-lg-5">

                <button onClick={()=>setOpenModal(true)} className="btn col-lg-3" style={{fontSize:"16px" , fontFamily:"yekan" , backgroundColor:"green" , color:"white"}}>ساخت دسته بندی</button>

                <button onClick={()=>navigate("/")} className="btn btn-warning me-lg-5" style={{fontSize:"16px" , fontFamily:"yekan"}}>ورود به مستقیم به سایت</button>

            </div>



            <div className="col-lg-10 m-lg-auto mt-lg-5">

                <table className="table table-hover bg-white" style={{borderRadius:"15px"}}>

                    <tr className="text-lg-center" style={{fontSize:"16px" , fontFamily:"Sahel-Bold" , borderBottom:"2px solid black"}}>
                        <td className="pt-lg-4 pb-lg-3" style={{width:"75px"}}>شناسه</td>
                        <td className="pt-lg-4 pb-lg-3" style={{width:"180px"}}>نام دسته بندی</td>
                        <td className="pt-lg-4 pb-lg-3" style={{width:"180px"}}>عکس دسته بندی</td>
                        <td className="pt-lg-4 pb-lg-4" style={{width:"180px"}}>تغییرات</td>
                    </tr>

                    {
                        categories.map((category , index)=>(

                            <tr key={index} className="text-lg-center" style={{fontSize:"16px" , fontFamily:"yekan"}}>

                                <td className=" pt-lg-3 pb-lg-3">{category.id}</td>

                                <td className=" pt-lg-3 pb-lg-3">{category.nameCategory}</td>

                                <td className=" pt-lg-3 pb-lg-3">
                                    <img src={category.imageCategory} alt="Not Found" className="col-lg-4" style={{backgroundColor:"transparent"}}/>
                                </td>

                                <td className=" pt-lg-3 pb-lg-3">

                                    <button onClick={()=>modalId(category.id)} className="btn">
                                        <FiEdit style={{width:"26px" , height:"26px", backgroundColor:"transparent" , marginLeft:"40px" , color:"orange"}}/>
                                    </button>

                                    <button onClick={()=>deleteModalId(category.id)} className="btn">
                                        <RiDeleteBin3Fill style={{width:"26px" , height:"26px", backgroundColor:"transparent" , marginRight:"40px" , color:"red"}}/>
                                    </button>

                                </td>

                            </tr>

                        ))
                    }

                </table>

            </div>


            {
                openModal ? <AddCategory closeModal={()=>setOpenModal(false)}/> : null
            }

            {
                editModal ? <EditCategory idModal={idModal} closeModal={()=>setEditModal(false)}/> : null
            }

            {
                deleteModal ? <DeleteCategory idModal={idModal} closeModal={()=>setDeleteModal(false)}/> : null
            }


        </>

    )

}


export default ViewCategory;