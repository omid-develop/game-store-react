import {useState} from "react";
import {createdCategory} from "../../../../services/services_category";

const AddCategory = ({closeModal})=>{

    const [addCategory , setAddCategory] = useState({
        nameCategory:"" ,
        imageCategory:""
    });


    const handleChangeInput = (event)=>{
        setAddCategory({...addCategory , [event.target.name]:event.target.value});
    }


    const submitCreateCategory = async (event)=>{

        event.preventDefault();

        const response = await createdCategory(addCategory);

        if (response.status===201){
            console.log(response.data);
            setAddCategory({});
            closeModal(true);
        }

    }


    return(

        <>

            <div className="container-modal">

                <div className="box-modal">

                    <div className="box-head">اضافه کردن دسته بندی جدید</div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>نام دسته بندی</label>
                        <input name="nameCategory" onChange={handleChangeInput} type="text" className="form-control"/>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>آدرس عکس دسته بندی</label>
                        <input name="imageCategory" onChange={handleChangeInput} type="text" className="form-control"/>
                    </div>

                    <button onClick={submitCreateCategory} className="btn btn-success col-lg-2 mt-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>ذخیره</button>
                    <button onClick={closeModal} className="btn btn-danger col-lg-2 me-lg-4 mt-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>بستن</button>

                </div>

            </div>
        </>

    )

}


export default AddCategory;