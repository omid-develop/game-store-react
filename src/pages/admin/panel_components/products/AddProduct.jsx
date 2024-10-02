import {useState} from "react";
import {createProduct} from "../../../../services/services_products";
import { toast } from 'react-toastify';

const AddProduct = ({onclose})=>{

    const [addProduct , setAddProduct] = useState({
        nameProduct:"" ,
        discription:"" ,
        price:"" ,
        discount:"" ,
        sales:"" ,
        category:"پلی استیشن" ,
        image:""
    });


    const handleChangeInput = (event)=>{

        setAddProduct({...addProduct , [event.target.name]:event.target.value});

    }


    const submitAddProduct = async(event)=>{
        event.preventDefault();

        try {

            const response = await createProduct(addProduct);
            if (response.status===201){
                console.log(response.data);
                onclose(true);
                toast.success("محصول جدید با موفقیت اضافه شد");
            }

        }catch (e) {
            console.log(e);
        }

    }



    return(

        <>

            <div className="container-modal">

                <div className="box-modal">

                    <div className="box-head">ایجاد یک محصول جدید</div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>نام محصول</label>
                        <input name="nameProduct" type="text" onChange={handleChangeInput} className="form-control"/>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>توضیح محصول</label>
                        <textarea name="discription" className="form-control" onChange={handleChangeInput}> </textarea>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>قیمت</label>
                        <input name="price" type="text" className="form-control" onChange={handleChangeInput}/>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>تخفیف</label>
                        <input name="discount" type="text" className="form-control" onChange={handleChangeInput}/>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>تعداد فروش</label>
                        <input name="sales" type="text" className="form-control" onChange={handleChangeInput}/>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>یک دسته بندی انتخاب کنید</label>
                        <select name="category" onChange={handleChangeInput} className="form-select">
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
                        <input name="image" type="text" className="form-control"/>
                    </div>

                    <button onClick={submitAddProduct} className="btn btn-success col-lg-2 mt-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>ذخیره</button>
                    <button onClick={onclose} className="btn btn-danger col-lg-2 me-lg-4 mt-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>بستن</button>
                </div>

            </div>

        </>

    )

}


export default AddProduct;