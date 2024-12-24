import {useState , useEffect} from "react";
import {getArticle, updateArticle} from "../../../../services/services_article";
import {toast} from "react-toastify";

const EditArticle = ({idModal , closeModal})=>{

    const [editArticle , setEditArticle] = useState({
        name_article:"" ,
        text_article:"" ,
        image_article:""
    });

    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getArticle(idModal);
            setEditArticle(response.data);

        }

        fetchData();

    } , []);


    const handleInputEdit = (event)=>{

        setEditArticle({...editArticle , [event.target.name]:event.target.value});

    }

    const submitEdit = async (event)=>{

        event.preventDefault();

        const response = await updateArticle(editArticle , idModal);

        if (response.status === 200){

            console.log(response.data);
            setEditArticle({});
            closeModal(true);
            toast.warning("مقاله با موفقیت ویرایش شد . ")

        }

    }


    return(

        <>

            <div className="container-modal">

                <div className="box-modal">

                    <div className="box-head">ویرایش مقاله</div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>نام مقاله</label>
                        <input value={editArticle.name_article} onChange={handleInputEdit} name="name_article" type="text" className="form-control"/>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>توضیحات مقاله</label>
                        <textarea value={editArticle.text_article} onChange={handleInputEdit} name="text_article" className="form-control">  </textarea>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>آدرس عکس مقاله</label>
                        <input value={editArticle.image_article} onChange={handleInputEdit} type="text" name="image_article" className="form-control"/>
                    </div>


                    <button onClick={submitEdit} className="btn btn-success col-lg-2 mt-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>ذخیره</button>
                    <button onClick={closeModal} className="btn btn-danger col-lg-2 me-lg-4 mt-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>بستن</button>

                </div>

            </div>

        </>

    )

}


export default EditArticle;