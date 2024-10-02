import {useState , useEffect} from "react";
import {deleteProduct, getProduct} from "../../../../services/services_products";
import {toast} from "react-toastify";

const DeleteProduct = ({idModal , onclose})=>{

    const [delProduct , setDelProduct] = useState("");

    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getProduct(idModal);
            setDelProduct(response.data);
            // console.log(response.data);

        }

        fetchData();

    } , []);



    const submitDeleteProduct = async (event)=>{

        event.preventDefault();

        const response = await deleteProduct(idModal);

        if (response.status===200){
            console.log(response.data);
            onclose(true);
            toast.info("محصول با موفقیت حذف شد . ");
        }

    }



    return(

        <>

            <div className="container-modal">

                <div className="box-modal-delete">

                    <div className="box-head">حذف دسته بندی</div>

                    <div className="box-body-modal">آیا از حذف محصول  ( {delProduct.nameProduct} ) اطمینان دارید ؟</div>

                    <div className="container-fluid mt-lg-5 d-lg-flex justify-content-around">

                        <button onClick={submitDeleteProduct} className="btn btn-success col-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>مطمئن هستم</button>
                        <button onClick={onclose} className="btn btn-danger col-lg-4 me-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>انصراف</button>

                    </div>

                </div>

            </div>

        </>

    )

}


export default DeleteProduct;