import {FiEdit} from "react-icons/fi";
import {RiDeleteBin3Fill} from "react-icons/ri";
import {useState} from "react";
import EditMenu from "./EditMenu";
import AddMenu from "./AddMenu";
import DeleteMenu from "./DeleteMenu";
import {useNavigate} from "react-router-dom";

const ViewMenu = ({allMenu})=>{

    const navigate = useNavigate();

    const [openModal , setOpenModal] = useState(false);
    const [editModal , setEditModal] = useState(false);
    const [idModal , setIdModal] = useState("");
    const [deleteModal , setDeleteModal] = useState(false);

    const modalId = (id)=>{

        setEditModal(true);
        setIdModal(id);

    }


    const delModalId = (id)=>{

        setDeleteModal(true);
        setIdModal(id);

    }

    return(

        <>

            <div className="col-lg-10 text-lg-center text-white border border-2 border-white p-lg-1" style={{fontSize:"22px" , fontFamily:"Sahel-Bold" , margin:"auto" ,  marginTop:"20px" , borderRadius:"10px"}}>آیتم های منو</div>

            <div className="col-lg-10 m-lg-auto d-flex justify-content-lg-center mt-lg-5">

                <button onClick={()=>setOpenModal(true)} className="btn col-lg-3" style={{fontSize:"16px" , fontFamily:"yekan" , backgroundColor:"green" , color:"white"}}>ایجاد آیتم جدید</button>

                <button onClick={()=>navigate("/")} className="btn btn-warning me-lg-5" style={{fontSize:"16px" , fontFamily:"yekan"}}>ورود به مستقیم به سایت</button>

            </div>


            {
                allMenu.map((menu , index)=>(

                    <div key={index} className="col-lg-8 bg-white m-lg-auto mt-lg-5 d-lg-flex" style={{borderRadius:"20px"}}>

                        <div className="col-lg-5 d-lg-flex justify-content-lg-center align-items-center" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>{menu.nameItem}</div>

                        <div className="col-lg-7 d-lg-flex justify-content-lg-around">

                            <button onClick={()=>modalId(menu.id)} className="btn">

                                <FiEdit style={{fontSize:"29px" , color:"orange"}}/>

                            </button>

                            <button onClick={()=>delModalId(menu.id)} className="btn">

                                <RiDeleteBin3Fill style={{fontSize:"29px" , color:"red"}}/>

                            </button>

                        </div>

                    </div>

                ))
            }

            {
                openModal ? <AddMenu onclose={()=>setOpenModal(false)}/> : null
            }

            {
                editModal ? <EditMenu idModal={idModal} onclose={()=>setEditModal(false)}/> : null
            }

            {
                deleteModal ? <DeleteMenu idModal={idModal} onclose={()=>setDeleteModal(false)}/> : null
            }


        </>

    )

}


export default ViewMenu;