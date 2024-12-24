import {useState} from "react";
import {createArticle} from "../../../../services/services_article";
import {toast} from "react-toastify";

const AddArticle = ({closeModal})=>{

    const [addArticle , setAddArticle] = useState({
        name_article : "" ,
        text_article : "" ,
        image_article : ""
    });


    const handleInput = (event)=>{
        setAddArticle({...addArticle , [event.target.name]:event.target.value});
    }

    const submitArticle = async (event)=>{

        event.preventDefault();

        const response = await createArticle(addArticle);

        if (response.status === 201){

            console.log(response.data);
            setAddArticle({});
            closeModal(true);
            toast.success("مقاله با موفقیت ساخته شد . ")
        }

    }


    return(

        <>

            <div className="container-modal">

                <div className="box-modal">

                    <div className="box-head">اضافه کردن مقاله جدید</div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>نام مقاله</label>
                        <input onChange={handleInput} name="name_article" type="text" className="form-control"/>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>توضیحات مقاله</label>
                        <textarea onChange={handleInput} name="text_article" className="form-control">  </textarea>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>آدرس عکس مقاله</label>
                        <input onChange={handleInput} type="text" name="image_article" className="form-control"/>
                    </div>


                    <button onClick={submitArticle} className="btn btn-success col-lg-2 mt-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>ذخیره</button>
                    <button onClick={closeModal} className="btn btn-danger col-lg-2 me-lg-4 mt-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>بستن</button>

                </div>

            </div>

        </>

    )

}


export default AddArticle;