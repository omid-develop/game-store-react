import {useState , useEffect} from "react";
import {getProduct, updateProduct} from "../../../../services/services_products";
import {toast} from "react-toastify";

const EditProduct = ({idModal , onclose})=>{

   const [editProduct , setEditProduct] = useState({
       nameProduct:"" ,
       discription:"" ,
       price:"" ,
       discount:"" ,
       sales:"" ,
       category:"پلی استیشن" ,
       image:""
   });


   useEffect(()=>{

       const fetchData = async ()=>{

           const response = await getProduct(idModal);
           // console.log(response.data);
           setEditProduct(response.data);

       }

       fetchData();

   } , []);



   const changeInput = (event)=>{

       setEditProduct({...editProduct , [event.target.name]:event.target.value});

   }


   const submitEdit = async (event)=>{

       event.preventDefault();

       const response = await updateProduct(editProduct , idModal);

       if (response.status===200){
           console.log(response.data);
           setEditProduct({});
           toast.warning("محصول با موفقیت ویرایش شد .")
           onclose(true);
       }

   }



    return(

        <>

            <div className="container-modal">

                <div className="box-modal">

                    <div className="box-head">ایجاد یک محصول جدید</div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>نام محصول</label>
                        <input name="nameProduct" onChange={changeInput} value={editProduct.nameProduct} type="text" className="form-control"/>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>توضیح محصول</label>
                        <textarea name="discription" onChange={changeInput} value={editProduct.discription} className="form-control"> </textarea>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>قیمت</label>
                        <input name="price" onChange={changeInput} value={editProduct.price} type="text" className="form-control"/>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>تخفیف</label>
                        <input name="discount" onChange={changeInput} value={editProduct.discount} type="text" className="form-control"/>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>تعداد فروش</label>
                        <input name="sales" onChange={changeInput} value={editProduct.sales} type="text" className="form-control"/>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>یک دسته بندی انتخاب کنید</label>
                        <select name="category" onChange={changeInput} value={editProduct.category} className="form-select">
                            <option selected>پلی استیشن</option>
                            <option>ایکس باکس</option>
                            <option>ویندوز</option>
                            <option>بازی های IOS</option>
                            <option >استیم</option>
                            <option>اوریجین</option>
                        </select>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>آدرس عکس</label>
                        <input name="image" onChange={changeInput} type="text" className="form-control"/>
                    </div>

                    <button onClick={submitEdit} className="btn btn-success col-lg-2 mt-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>ذخیره</button>
                    <button onClick={onclose} className="btn btn-danger col-lg-2 me-lg-4 mt-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>بستن</button>

                </div>

            </div>

        </>

    )

}


export default EditProduct;