import {useState , useEffect} from "react";
import {deleteMenu , getMenu} from "../../../../services/services_menu";
import {toast} from "react-toastify";

const DeleteMenu = ({idModal , onclose})=>{

    const [deleteItem , setDeleteItem] = useState("");

    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getMenu(idModal);
            console.log(response.data);
            setDeleteItem(response.data);

        }

        fetchData();

    } , []);


    const deleteSubmit = async (event)=>{

        event.preventDefault();

        const response = await deleteMenu(idModal);

        if (response.status === 200){
            // console.log(response.data);
            setDeleteItem({});
            toast.success("آیتم با موفقیت حذف شد ");
            onclose(true);
        }else {
            toast.error("مشکلی به وجود آمده است .");
        }

    }



    return(

        <>

            <div className="container-modal">

                <div className="box-modal-delete">

                    <div className="box-head">حذف آیتم منو</div>

                    <div className="box-body-modal"> آیا از حذف آیتم منو ( {deleteItem.nameItem} ) مطمئن هستید ؟  </div>

                    <div className="container-fluid mt-lg-5 d-lg-flex justify-content-around">

                        <button onClick={deleteSubmit} className="btn btn-success col-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>مطمئن هستم</button>
                        <button onClick={onclose} className="btn btn-danger col-lg-4 me-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>انصراف</button>

                    </div>

                </div>

            </div>

        </>

    )

}


export default DeleteMenu;