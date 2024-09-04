import {useState , useEffect} from "react";
import {getCategory, updateCategory} from "../../../../services/services_category";

const EditCategory = ({idModal , closeModal})=>{

    const [editCategory , setEditCategory] = useState({
        nameCategory:"" ,
        imageCategory:""
    });


    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getCategory(idModal);
            setEditCategory(response.data);
            console.log(response.data);

        }

        fetchData();

    } , []);


    const editChange = (event)=>{

        setEditCategory({...editCategory , [event.target.name]:event.target.value});

    }


    const submitEdit =  async (event)=>{

        event.preventDefault();

        const response = await updateCategory(editCategory , idModal);

        if (response.status===200){
            console.log(response.data);
            closeModal(true)
        }

    }



    return(

        <>

            <div className="container-modal">

                <div className="box-modal">

                    <div className="box-head">ویرایش دسته بندی</div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>نام دسته بندی</label>
                        <input onChange={editChange} name="nameCategory" type="text" className="form-control" value={editCategory.nameCategory}/>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>آدرس عکس دسته بندی</label>
                        <input onChange={editChange} name="imageCategory" type="text" className="form-control" value={editCategory.imageCategory}/>
                    </div>

                    <button onClick={submitEdit} className="btn btn-success col-lg-2 mt-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>ذخیره</button>
                    <button onClick={closeModal} className="btn btn-danger col-lg-2 me-lg-4 mt-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>بستن</button>

                </div>

            </div>

        </>

    )

}


export default EditCategory;