import {FiEdit} from "react-icons/fi";
import {RiDeleteBin3Fill} from "react-icons/ri";
import {useState} from "react";
import AddMenu from "./AddMenu";

const ViewMenu = ({items})=>{

    const [openModal , setOpenModal] = useState(false);

    return(

        <>

            <div className="col-lg-10 text-lg-center text-white border border-2 border-white p-lg-1" style={{fontSize:"22px" , fontFamily:"Sahel-Bold" , margin:"auto" ,  marginTop:"20px" , borderRadius:"10px"}}>نمایش آیتم های منو</div>

            <div className="col-lg-10 m-lg-auto d-flex justify-content-lg-center mt-lg-5">

                <button onClick={()=>setOpenModal(true)} className="btn col-lg-3" style={{fontSize:"16px" , fontFamily:"yekan" , backgroundColor:"green" , color:"white"}}>ایجاد آیتم</button>

                <button className="btn btn-warning me-lg-5" style={{fontSize:"16px" , fontFamily:"yekan"}}>ورود به مستقیم به سایت</button>

            </div>


            {
                items.map((item , index)=>(

                    <div key={index} className="col-lg-8 bg-white m-lg-auto mt-lg-5 d-lg-flex" style={{borderRadius:"20px"}}>

                        <div className="col-lg-5 d-lg-flex justify-content-lg-center align-items-center" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>{item.nameItem}</div>

                        <div className="col-lg-7 d-lg-flex justify-content-lg-around">

                            <button className="btn">

                                <FiEdit style={{fontSize:"29px" , color:"orange"}}/>

                            </button>

                            <button className="btn">

                                <RiDeleteBin3Fill style={{fontSize:"29px" , color:"red"}}/>

                            </button>

                        </div>

                    </div>

                ))
            }


            {
                openModal ? <AddMenu onclose={()=>setOpenModal(false)}/> : null
            }


        </>

    )

}



export default ViewMenu;