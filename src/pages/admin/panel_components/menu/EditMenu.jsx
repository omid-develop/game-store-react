import {useState , useEffect} from "react";
import {getMenu, updateMenu} from "../../../../services/services_menu";
import {toast} from "react-toastify";

const EditMenu = ({idModal , onclose})=>{

    const [editMenu , setEditMenu] = useState({
        nameItem:"" ,
        url_item:""
    });

    useEffect(()=>{

        const fetchData = async ()=>{

            const response = await getMenu(idModal);
            console.log(response.data);
            setEditMenu(response.data);

        }

        fetchData();

    } , []);



    const changeInputEdit = (event)=>{

        setEditMenu({...editMenu , [event.target.name]:event.target.value});

    }


    const editSubmitMenu = async (event)=>{

        event.preventDefault();

        const response = await updateMenu(editMenu , idModal);

        if (response.status === 200){

            console.log(response.data);
            toast.success("آیتم منو با موفقیت ویرایش شد .");
            setEditMenu({});
            onclose(true);

        }else {
            toast.error("مشکلی به وجود آمده !");
        }

    }



    return(

        <>

            <div className="container-modal">

                <div className="box-modal">

                    <div className="box-head">ویرایش آیتم منو</div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>نام آیتم منو</label>
                        <input name="nameItem" onChange={changeInputEdit} value={editMenu.nameItem} type="text" className="form-control"/>
                    </div>

                    <div className="mb-3 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                        <label className="form-label" style={{fontSize:"18px" , fontFamily:"yekan"}}>آدرس URL <span className="text-danger" style={{fontSize:"14px"}}> ( آدرسی که قرار است به آن صفحه لینک شود را وارد کنید )</span></label>
                        <input name="url_item" onChange={changeInputEdit} value={editMenu.url_item} type="text" className="form-control"/>
                    </div>

                    <button onClick={editSubmitMenu} className="btn btn-warning col-lg-2 mt-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>ذخیره</button>
                    <button onClick={onclose} className="btn btn-danger col-lg-2 me-lg-4 mt-lg-4" style={{fontSize:"15px" , fontFamily:"Sahel-Bold"}}>بستن</button>

                </div>

            </div>

        </>

    )

}


export default EditMenu;