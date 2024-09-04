import {useEffect, useState} from "react";
import {deleteCategory, getCategory} from "../../../../services/services_category"

const DeleteCategory = ({idModal , closeModal})=>{

    const [nameCategory , setNameCategory] = useState("");


    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getCategory(idModal);
            // console.log(response.data);
            setNameCategory(response.data.nameCategory);

        }

        fetchData();

    } , []);


    const submitDelete = async ()=>{

        const response = await deleteCategory(idModal);
        closeModal(true)
        console.log(response.data);

    }


    return(

        <>

            <div className="container-modal">

                <div className="box-modal-delete">

                    <div className="box-head">حذف دسته بندی</div>

                    <div className="box-body-modal">آیا از حذف دسته بندی {nameCategory} مطمئن هستید ؟</div>

                    <div className="container-fluid mt-lg-5 d-lg-flex justify-content-around">

                        <button onClick={submitDelete} className="btn btn-success col-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>مطمئن هستم</button>
                        <button onClick={closeModal} className="btn btn-danger col-lg-4 me-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>انصراف</button>

                    </div>

                </div>

            </div>

        </>

    )

}


export default DeleteCategory;