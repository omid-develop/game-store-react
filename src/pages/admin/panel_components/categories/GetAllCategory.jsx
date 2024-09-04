import {useState , useEffect} from "react";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import image from '../../../../assets/img/logo-playStation.png';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin3Fill } from "react-icons/ri";
import {
    createCategory,
    deleteCategory,
    getAllCategories,
    getCategory,
    updateCategory
} from "../../../../services/services_category";
import {confirmAlert} from "react-confirm-alert";

const GetAllCategory = ()=>{

    const [open , setOpen] = useState(false);

    const openModal = ()=>{
        setOpen(true);
    }

    const closeModal = ()=>{
        setOpen(false);
    }



    const [openEdit , setOpenEdit] = useState(false);
    const [idCategory , setIdCategory] = useState("");

    const openEditModal = (id)=>{
        setOpenEdit(true);
        setIdCategory(id);
    }

    const closeEditModal = ()=>{
        setOpenEdit(false);
    }



    //گرفتن همه آیتم های دسته بندی ها
    const [allCategory , setAllCategory] = useState([]);

    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getAllCategories();
            // console.log(response.data);
            setAllCategory(response.data);

        }

        fetchData();

    } , []);



    //ساخت دسته بندی
    const [addCategory , setAddCategory] = useState({
        nameCategory:"" ,
        imageCategory:""
    });


    //ساخت دسته بندی
    const changeInputCategory = (event)=>{

        setAddCategory({...addCategory , [event.target.name]:event.target.value});

    }

    //ساخت دسته بندی
    const CreateCategory = async ()=>{

        try {

            const response = await createCategory(addCategory);

            if (response.status===201){
                console.log(response);
                setAddCategory({});

                closeModal();

                location.reload();

            }

        }catch (e) {
            console.log(e);
        }

    }


    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getCategory(1);
            console.log(response.data);

        }

        fetchData();

    } , []);





    const [editCategory , setEditCategory] = useState({
        nameCategory:"" ,
        imageCategory:""
    });


    const editChangeCategory = (event)=>{

        setEditCategory({...editCategory , [event.target.name]:event.target.value});

    }


    const submitEdit = async ()=>{

        try {

            const response = await updateCategory(editCategory , idCategory);

            if (response.status===200){

                console.log(response);
                setEditCategory({});
                closeEditModal();
                location.reload();

            }

        }catch (e) {
            console.log(e);
        }

    }






    const confirm = (categoryId)=>{

        confirmAlert({
            customUI:({onClose})=>{

                return(

                    <div dir="rtl" style={{backgroundColor:"indigo" , width:"400px" , paddingTop:"20px" , paddingBottom:"20px" , borderRadius:"10px"}}>

                        <h3 className="text-lg-center" style={{color:"white" , fontFamily:"Sahel-Bold"}}>پاک کردن دسته بندی</h3>

                        <p className="text-lg-center mt-lg-4" style={{color:"yellow" , fontSize:"16px" , fontFamily:"yekan"}}>مطمئنی که می خواهی دسته بندی را پاک کنی ؟</p>

                        <button className="btn col-lg-4 mt-lg-4" style={{backgroundColor:"#EF476F" , marginRight:"45px" , fontSize:"16px" , fontFamily:"yekan"}} onClick={() => {remove(categoryId);onClose();}}>مطمئن هستم</button>

                        <button className="btn col-lg-4 me-lg-5 mt-lg-4" style={{backgroundColor:"#06D6A0" , fontSize:"16px" , fontFamily:"yekan"}} onClick={onClose}>انصراف</button>

                    </div>

                )

            }
        })

    }



    const remove = async (categoryId)=>{

        try {

            const response = await deleteCategory(categoryId);
            console.log(response.data);
            location.reload();

        }catch (e) {
            console.log(e);
        }

    }



    return(

        <>

            <div className="col-lg-10 text-lg-center text-white border border-2 border-white p-lg-1" style={{fontSize:"22px" , fontFamily:"Sahel-Bold" , margin:"auto" ,  marginTop:"20px" , borderRadius:"10px"}}>دسته بندی</div>

            <div className="col-lg-10 m-lg-auto d-flex justify-content-lg-center mt-lg-5">

                <button onClick={openModal} className="btn col-lg-3" style={{fontSize:"16px" , fontFamily:"yekan" , backgroundColor:"green" , color:"white"}}>ساخت دسته بندی</button>

                <button className="btn btn-warning me-lg-5" style={{fontSize:"16px" , fontFamily:"yekan"}}>ورود به مستقیم به سایت</button>

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
                        allCategory.map((category , index)=>(

                            <tr key={index} className="text-lg-center" style={{fontSize:"16px" , fontFamily:"yekan"}}>

                                <td className=" pt-lg-3 pb-lg-3">1</td>

                                <td className=" pt-lg-3 pb-lg-3">omid</td>

                                <td className=" pt-lg-3 pb-lg-3">
                                    <img src={category.imageCategory} alt="Not Found" className="col-lg-4" style={{backgroundColor:"transparent"}}/>
                                </td>

                                <td className=" pt-lg-3 pb-lg-3">

                                    <button className="btn">
                                        <FiEdit style={{width:"26px" , height:"26px", backgroundColor:"transparent" , marginLeft:"40px" , color:"orange"}}/>
                                    </button>

                                    <button className="btn">
                                        <RiDeleteBin3Fill style={{width:"26px" , height:"26px", backgroundColor:"transparent" , marginRight:"40px" , color:"red"}}/>
                                    </button>

                                </td>

                            </tr>

                        ))
                    }

                </table>

            </div>




            {/*} ساخت دسته بندی {*/}

            <Dialog open={open} onClose={closeModal} fullWidth maxWidth={"md"}>

                <DialogTitle className="text-lg-center" style={{fontFamily:"Sahel-Bold"}}>ساخت دسته بندی</DialogTitle>

                <DialogContent>

                    <div className="mb-3">
                        <label className="form-label" style={{fontSize:"15px" , fontFamily:"yekan"}}>نام دسته بندی :</label>
                        <input name="nameCategory" onChange={changeInputCategory} type="text" className="form-control" placeholder="نام دسته بندی خود را وارد کنید" style={{fontSize:"15px" , fontFamily:"yekan"}}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label" style={{fontSize:"15px" , fontFamily:"yekan"}}>آدرس عکس دسته بندی :</label>
                        <input name="imageCategory" onChange={changeInputCategory} type="text" className="form-control" placeholder="آدرس عکس را وارد کنید" style={{fontSize:"15px" , fontFamily:"yekan"}}/>
                    </div>

                    <button onClick={CreateCategory} className="btn" style={{backgroundColor:"green" , color:"white" , fontFamily:"yekan"}}>ساخت</button>

                </DialogContent>


                <DialogActions>

                    <button onClick={closeModal} className="btn btn-danger" style={{fontFamily:"yekan"}}>بستن</button>

                </DialogActions>

            </Dialog>

            {/*} ساخت دسته بندی {*/}



            {/*} ویرایش دسته بندی {*/}

            <Dialog open={openEdit} onClose={closeEditModal} fullWidth maxWidth={"md"}>

                <DialogTitle className="text-lg-center" style={{fontFamily:"Sahel-Bold"}}>ویرایش دسته بندی</DialogTitle>

                <DialogContent>

                    <div className="mb-3">
                        <label className="form-label" style={{fontSize:"15px" , fontFamily:"yekan"}}>نام دسته بندی :</label>
                        <input name="nameCategory" value={editCategory.nameCategory} onChange={editChangeCategory} type="text" className="form-control" placeholder="نام دسته بندی خود را وارد کنید" style={{fontSize:"15px" , fontFamily:"yekan"}}/>
                    </div>


                    <div className="mb-3">
                        <label className="form-label" style={{fontSize:"15px" , fontFamily:"yekan"}}>آدرس عکس دسته بندی :</label>
                        <input name="imageCategory" onChange={editChangeCategory} type="text" className="form-control" placeholder="آدرس عکس را وارد کنید" style={{fontSize:"15px" , fontFamily:"yekan"}}/>
                    </div>

                    <button onClick={submitEdit} className="btn" style={{backgroundColor:"green" , color:"white" , fontFamily:"yekan"}}>ویرایش</button>

                </DialogContent>


                <DialogActions>

                    <button onClick={closeEditModal} className="btn btn-danger" style={{fontFamily:"yekan"}}>بستن</button>

                </DialogActions>

            </Dialog>

            {/*} ویرایش منو {*/}


        </>

    )

}


export default GetAllCategory;