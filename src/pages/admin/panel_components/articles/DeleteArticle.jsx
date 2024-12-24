import {useState , useEffect} from "react";
import {deleteArticle, getArticle} from "../../../../services/services_article";
import {toast} from "react-toastify";

const DeleteArticle = ({idModal , closeModal})=>{

    const [removeArticle , setRemoveArticle] = useState("");

    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getArticle(idModal);
            // console.log(response.data);
            setRemoveArticle(response.data);

        }

        fetchData();

    } , []);



    const submitDeleteArticle = async (event)=>{

        event.preventDefault();

        const response = await deleteArticle(idModal);

        if (response.status === 200){

            console.log(response.data);
            closeModal(true);
            toast.success("مقاله با موفقیت حذف شد . ");

        }

    }



    return(

        <>

            <div className="container-modal">

                <div className="box-modal-delete">

                    <div className="box-head">حذف مقاله</div>

                    <div className="box-body-modal">آیا از حذف مقاله شماره {removeArticle.id} اطمینان دارید ؟</div>

                    <div className="container-fluid mt-lg-5 d-lg-flex justify-content-around">

                        <button onClick={submitDeleteArticle} className="btn btn-success col-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>مطمئن هستم</button>
                        <button onClick={closeModal} className="btn btn-danger col-lg-4 me-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>انصراف</button>

                    </div>

                </div>

            </div>

        </>

    )

}


export default DeleteArticle;