import {useNavigate} from "react-router-dom";
import {FiEdit} from "react-icons/fi";
import {FaEye} from "react-icons/fa";
import {RiDeleteBin3Fill} from "react-icons/ri";
import {useState} from "react";
import AddArticle from "./AddArticle";
import EditArticle from "./EditArticle";

const ViewArticle = ({articles})=>{

    const navigate = useNavigate();

    const [openModal , setOpenModal] = useState(false);
    const [editModal , setEditModal] = useState(false);
    const [idModal , setIdModal] = useState("");

    const ModalId = (id)=>{

        setEditModal(true);
        setIdModal(id);

    }

    return(

        <>

            <div className="col-lg-10 text-lg-center text-white border border-2 border-white p-lg-1" style={{fontSize:"22px" , fontFamily:"Sahel-Bold" , margin:"auto" ,  marginTop:"20px" , borderRadius:"10px"}}>مقالات</div>

            <div className="col-lg-10 m-lg-auto d-flex justify-content-lg-center mt-lg-5">

                <button onClick={()=>setOpenModal(true)} className="btn col-lg-3" style={{fontSize:"16px" , fontFamily:"yekan" , backgroundColor:"green" , color:"white"}}>ساخت مقاله جدید</button>

                <button onClick={()=>navigate("/")} className="btn btn-warning me-lg-5" style={{fontSize:"16px" , fontFamily:"yekan"}}>ورود به مستقیم به سایت</button>

            </div>


            {articles.map((article , index)=>(

                <div key={index} className="col-lg-8 bg-white m-lg-auto mt-lg-5 d-lg-flex" style={{borderRadius:"20px"}}>

                    <div className="col-lg-5 d-lg-flex justify-content-lg-center align-items-center" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>
                        <span className="text-danger col-lg-4">نام مقاله :</span>
                        {article.name_article.length > 20 ? article.name_article.substring(0 , 20) + "..." : article.name_article}
                    </div>

                    <div className="col-lg-7 d-lg-flex justify-content-lg-around">

                        <button onClick={()=>ModalId(article.id)} className="btn">

                            <FiEdit style={{fontSize:"29px" , color:"orange"}}/>

                        </button>

                        <button className="btn">

                            <FaEye style={{fontSize:"29px" , color:"blue"}}/>

                        </button>

                        <button className="btn">

                            <RiDeleteBin3Fill style={{fontSize:"29px" , color:"red"}}/>

                        </button>

                    </div>

                </div>

            ))}


            {
                openModal ? <AddArticle closeModal={()=>setOpenModal(false)}/> : null
            }

            {
                editModal ? <EditArticle idModal={idModal} closeModal={()=>setEditModal(false)}/> : null
            }


        </>

    )

}


export default ViewArticle;