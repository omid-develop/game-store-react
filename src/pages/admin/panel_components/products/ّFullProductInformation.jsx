import {useState , useEffect} from "react";
import {getProduct} from "../../../../services/services_products";

const FullProductInformation = ({idModal , onclose})=>{

    const [informationProduct , setInformationProduct] = useState({
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
            setInformationProduct(response.data);

        }

        fetchData();

    } , []);


    return(

        <>

            <div className="container-modal">

                <div className="box-modal">

                    <div className="box-head">اطلاعات کامل محصول <span style={{color:"red"}}>( امکان ویرایش وجود ندارد ! )</span></div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>نام محصول</label>
                        <input name="nameProduct" value={informationProduct.nameProduct} type="text" className="form-control"/>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>توضیح محصول</label>
                        <textarea name="discription" value={informationProduct.discription} className="form-control"> </textarea>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>قیمت</label>
                        <input name="price" value={informationProduct.price} type="text" className="form-control"/>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>تخفیف</label>
                        <input name="discount" value={informationProduct.discount} type="text" className="form-control"/>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>تعداد فروش</label>
                        <input name="sales" value={informationProduct.sales} type="text" className="form-control"/>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>یک دسته بندی انتخاب کنید</label>
                        <select name="category" value={informationProduct.category} className="form-select">
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

                    <button onClick={onclose} className="btn btn-danger col-lg-2 mt-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>بستن</button>

                </div>

            </div>

        </>

    )

}


export default FullProductInformation;