import spinner from '../../../../assets/img/spinner.gif';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin3Fill } from "react-icons/ri";
import {Dialog , DialogTitle , DialogContent , DialogActions} from "@mui/material";
import {useState , useEffect} from "react";
import {createMenu, deleteMenu, getAllItemsMenu, updateMenu} from "../../../../services/services_menu";
import {confirmAlert} from "react-confirm-alert";
import {useNavigate} from "react-router-dom";

const MenuCreate = ()=>{

    const navigate = useNavigate();

    const [open , setOpen] = useState(false);

    const openModal = ()=>{
        setOpen(true);
    }

    const closeModal = ()=>{
        setOpen(false);
    }



    const [openEdit , setOpenEdit] = useState(false)
    const [omidId, setOmidId] = useState("");
    // const [getItem , setItem] = useState("");

    const openEditModal = (id)=>{
        setOpenEdit(true);
        setOmidId(id);

    }

    const closeEditModal = ()=>{
        setOpenEdit(false);
    }



    // گرفتن همه آیتم ها

    const [loading , setLoading] = useState(false);
    const [getItems , setItems] = useState([]);

    useEffect(()=>{

        const fetchData = async()=>{

            try {

                setLoading(true);

                const response = await getAllItemsMenu();
                // console.log(response);
                setItems(response.data);

                setLoading(false);

            }catch (e) {
                console.log(e);
            }

        }

        fetchData();

    } , []);

    // پایان گرفتن همه آیتم ها




    //ساخت منو

    const [getNavbar , setNavbar] = useState({
        create_item_menu:""
    })


    const handleCreateInput = (event)=>{

        setNavbar({...getNavbar , [event.target.name]:event.target.value});

    }


    const submitCreateMenu = async(event)=>{

        try {

            event.preventDefault();

            const response = await createMenu(getNavbar);

            if (response.status===201){
                // console.log(response);
                setNavbar({});
            }

        }catch (e) {
            console.log(e);
        }

        closeModal();

        location.reload();

    }

    //پایان ساخت منو



    const [editMenu , setEditMenu] = useState({
        create_item_menu:""
    })


    const editInputChange = (event)=>{

        setEditMenu({...editMenu , [event.target.name]:event.target.value});
        console.log(editMenu);

    }

    const editSubmit = async(event)=>{

        event.preventDefault();

        const response = await updateMenu(editMenu , omidId);

        if (response.status===200){
            console.log(editMenu);
            console.log(response);

            closeEditModal();

            location.reload();

        }else {
            console.log("error");
        }

    }



    const confirm = (menuId)=>{

        confirmAlert({
            customUI:({onClose})=>{

                return(

                    <div dir="rtl" style={{backgroundColor:"indigo" , width:"400px" , paddingTop:"20px" , paddingBottom:"20px" , borderRadius:"10px"}}>

                        <h3 className="text-lg-center" style={{color:"white" , fontFamily:"Sahel-Bold"}}>پاک کردن مخاطب</h3>

                        <p className="text-lg-center mt-lg-4" style={{color:"yellow" , fontSize:"16px" , fontFamily:"yekan"}}>مطمئنی که می خواهی مخاطب را پاک کنی ؟</p>

                        <button className="btn col-lg-4 mt-lg-4" style={{backgroundColor:"#EF476F" , marginRight:"45px" , fontSize:"16px" , fontFamily:"yekan"}} onClick={() => {remove(menuId);onClose();}}>مطمئن هستم</button>

                        <button className="btn col-lg-4 me-lg-5 mt-lg-4" style={{backgroundColor:"#06D6A0" , fontSize:"16px" , fontFamily:"yekan"}} onClick={onClose}>انصراف</button>

                    </div>

                )

            }
        })

    }



    const remove = async(menuId)=>{

        try {

            const response = await deleteMenu(menuId);
            console.log(response.data);
            location.reload();

        }catch (e) {
            console.log(e);
        }

    }




    return(

        <>

            <div className="col-lg-10 text-lg-center text-white border border-2 border-white p-lg-1" style={{fontSize:"22px" , fontFamily:"Sahel-Bold" , margin:"auto" ,  marginTop:"20px" , borderRadius:"10px"}}>منو</div>

           <div className="col-lg-10 m-lg-auto d-flex justify-content-lg-center mt-lg-5">

               <button onClick={openModal} className="btn col-lg-2" style={{fontSize:"16px" , fontFamily:"yekan" , backgroundColor:"green" , color:"white"}}>ساخت منو</button>

               <button onClick={()=>navigate("/")} className="btn btn-warning me-lg-5" style={{fontSize:"16px" , fontFamily:"yekan"}}>ورود به مستقیم به سایت</button>

           </div>


            {
                loading ? <img src={spinner} alt="" className="col-lg-3 m-lg-auto d-lg-block mt-lg-5"/>

                    :


                        getItems.map((getItem)=>(

                            <div key={getItem.id} className="col-lg-8 m-lg-auto mt-lg-5 mb-lg-5 d-lg-flex justify-content-lg-center" style={{borderRadius:"20px" , backgroundColor:"white"}}>

                                <div className="col-lg-3 d-lg-flex justify-content-lg-center">

                                    <button onClick={() => openEditModal(getItem.id)} className="btn">

                                        <FiEdit style={{fontSize:"29px" , color:"orange"}}/>

                                    </button>

                                </div>

                                <div className="col-lg-6 text-lg-center pt-lg-2" style={{fontSize:"17px" , fontFamily:"yekan"}}>{getItem.create_item_menu}</div>

                                <div className="col-lg-3 d-lg-flex justify-content-lg-center">

                                    <button onClick={()=>confirm(getItem.id)} className="btn">

                                        <RiDeleteBin3Fill style={{fontSize:"29px" , color:"red"}}/>

                                    </button>

                                </div>

                            </div>

                        ))

            }




            {/*} ساخت منو {*/}

            <Dialog open={open} onClose={closeModal} fullWidth maxWidth={"md"}>

                <DialogTitle className="text-lg-center" style={{fontFamily:"Sahel-Bold"}}>ساخت منو</DialogTitle>

                <DialogContent>

                    <div className="mb-3">
                        <label className="form-label" style={{fontSize:"15px" , fontFamily:"yekan"}}>آیتم :</label>
                        <input name="create_item_menu" onChange={handleCreateInput} type="text" className="form-control" placeholder="آیتم مورد نظر خود را وارد کنید" style={{fontSize:"15px" , fontFamily:"yekan"}}/>
                    </div>

                    <button className="btn" onClick={submitCreateMenu} style={{backgroundColor:"green" , color:"white" , fontFamily:"yekan"}}>ساخت</button>

                </DialogContent>


                <DialogActions>

                    <button onClick={closeModal} className="btn btn-danger" style={{fontFamily:"yekan"}}>بستن</button>

                </DialogActions>

            </Dialog>

            {/*} ساخت منو {*/}




            {/*} ویرایش منو {*/}

            <Dialog open={openEdit} onClose={closeEditModal} fullWidth maxWidth={"md"}>

                <DialogTitle className="text-lg-center" style={{fontFamily:"Sahel-Bold"}}>ویرایش منو</DialogTitle>

                <DialogContent>

                    <div className="mb-3">
                        <label className="form-label" style={{fontSize:"15px" , fontFamily:"yekan"}}>آیتم :</label>
                        <input type="text" name="create_item_menu" value={editMenu.create_item_menu} onChange={editInputChange} className="form-control" placeholder="آیتم مورد نظر خود را وارد کنید" style={{fontSize:"15px" , fontFamily:"yekan"}}/>
                    </div>

                    <button onClick={editSubmit} className="btn" style={{backgroundColor:"green" , color:"white" , fontFamily:"yekan"}}>ویرایش</button>

                </DialogContent>


                <DialogActions>

                    <button onClick={closeEditModal} className="btn btn-danger" style={{fontFamily:"yekan"}}>بستن</button>

                </DialogActions>

            </Dialog>

            {/*} ویرایش منو {*/}


        </>

    )

}



export default MenuCreate;