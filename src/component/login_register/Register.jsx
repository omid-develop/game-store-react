import {Link} from "react-router-dom";
import {useState} from "react";

import {useNavigate} from "react-router-dom";
import {supabase} from "../../../supabaseClient";


const Register = ()=>{

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [fullName , setFullName] = useState("");

    const navigate = useNavigate();

    const signUp = async (email , password)=>{

        // let { data, error } = await supabase.auth.signUp(
        //     {
        //     email: email,
        //     password: password,
        //     options:{
        //         data:{
        //             fullName:name,
        //         }
        //     }
        // });
        let { data, error } = await supabase.auth.signUp({
            email,
            password,  options: {
                data: {
                    full_name: fullName,
                },
            }
        })
        console.log(data , error);
        return {data , error};

    }

    const formSubmit = (event)=>{

        event.preventDefault();
        signUp(email , password);

        navigate("/");

    }


    return(

        <>

           <div className="container-fluid" style={{height:"595px"}}>

               <div className="container d-lg-flex justify-content-lg-center align-items-lg-center d-flex justify-content-center align-items-center" style={{height:"100%" , maxWidth:"1210px"}}>

                   <div className="row">

                       <div className="box-hesab-karbari pt-lg-4 pb-lg-4 pt-4 pb-4">

                           <div className="col-lg-12 m-lg-auto text-lg-center col-12 m-auto text-center text-white" style={{fontSize:"22px" , fontFamily:"Sahel-Bold"}}>ثبت نام</div>
                           <div className="col-lg-12 bg-dark m-lg-auto mt-lg-3 col-12 m-auto mt-3" style={{height:"2px"}}> </div>

                           <form method="post" style={{fontSize:"16px" , fontFamily:"yekan"}}>

                               <div className="mt-4">
                                   <label className="form-label text-white">نام کاربری</label>
                                   <input value={fullName} onChange={(e)=>setFullName(e.target.value)} type="text" className="form-control"/>
                               </div>

                               <div className="mt-4">
                                   <label className="form-label text-white">پست الکترونیک</label>
                                   <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control"/>
                               </div>

                               <div className="mt-4">
                                   <label className="form-label text-white">کلمه عبور</label>
                                   <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control"/>
                               </div>

                               <button onClick={formSubmit} className="btn mt-lg-4 d-lg-block m-lg-auto col-lg-9 col-9 d-block m-auto mt-4 text-white" style={{fontFamily:"yekan" , backgroundColor:"#430090"}}>ثبت نام</button>

                               <p className="mt-lg-4 d-lg-block m-lg-auto col-lg-9 d-block m-auto mt-4 text-white text-center" style={{fontFamily:"yekan"}}>قبلا ثبت نام کرده اید ؟

                                   <Link to={"/login"} className="me-lg-2 text-decoration-none" style={{color:"#430090"}}>ورود</Link>

                               </p>

                           </form>

                       </div>

                   </div>

               </div>

           </div>

        </>

    )

}


export default Register;