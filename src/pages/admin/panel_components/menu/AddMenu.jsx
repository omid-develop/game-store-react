import {useState} from "react";
import {createItemMenu} from "../../../../services/services_menu";
import {toast} from "react-toastify";

const AddMenu = ({onclose})=>{

    const [addMenu , setAddMenu] = useState({
        nameItem:"" ,
        url_item:""
    });

    const handleInput = (event)=>{

        setAddMenu({...addMenu , [event.target.name]:event.target.value});

    }

    const submitAddItem = async (event)=>{

        event.preventDefault();

        const response = await createItemMenu(addMenu);

        if (response.status === 201){

            console.log(response.data);
            toast.success("آیتم منو با موفقیت اضافه شد .");
            setAddMenu({});
            onclose(true);

        }else {
            toast.error("مشکلی به وجود آمده است !");
        }

    }


    return(

        <>

            <div className="container-modal">

                <div className="box-modal">

                    <div className="box-head">ایجاد یک آیتم جدید</div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>نام آیتم منو</label>
                        <input name="nameItem" onChange={handleInput} type="text" className="form-control"/>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>آدرس URL مقصد <span className="text-danger" style={{fontSize:"14px"}}>( وقتی روی دکمه کلیک می کنید به کدام صفحه لینک شود ... url را وارد کنید )</span></label>
                        <input name="url_item" onChange={handleInput} type="text" className="form-control"/>
                    </div>

                    <button onClick={submitAddItem} className="btn btn-success col-lg-2 mt-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>ذخیره</button>
                    <button onClick={onclose} className="btn btn-danger col-lg-2 me-lg-4 mt-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>بستن</button>

                </div>

            </div>

        </>

    )

}


export default AddMenu;