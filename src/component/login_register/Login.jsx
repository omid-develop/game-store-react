import {Link , useNavigate} from "react-router-dom";
import {useState} from "react";
import {supabase} from "../../../supabaseClient";

const Login = ()=> {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const signIn = async (email, password) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                // در صورت وجود خطا، پیام خطا رو نمایش می‌دهیم
                setErrorMessage(error.message);
                return;
            }

            // در صورت موفقیت، اطلاعات کاربر دریافت می‌شود
            console.log('User logged in:', data);
            navigate('/');  // به صفحه داشبورد یا صفحه اصلی هدایت می‌شود

        } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('An error occurred while logging in. Please try again.');
        }
    };

    // تابع برای ارسال فرم
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMessage(''); // پاک کردن پیام خطا قبلی
        signIn(email, password);
    };


        return (

            <>

                <div className="container-fluid" style={{height: "595px"}}>

                    <div className="container d-lg-flex justify-content-lg-center align-items-lg-center d-flex justify-content-center align-items-center" style={{height: "100%", maxWidth: "1210px"}}>

                        <div className="row">

                            <div className="box-hesab-karbari pt-lg-4 pb-lg-4 pt-4 pb-4">

                                <div className="col-lg-12 m-lg-auto text-lg-center col-12 m-auto text-center text-white" style={{fontSize: "22px", fontFamily: "Sahel-Bold"}}>ورود</div>
                                <div className="col-lg-12 bg-dark m-lg-auto mt-lg-3 col-12 m-auto mt-3" style={{height: "2px"}}> </div>


                                <form method="post" style={{fontSize: "16px", fontFamily: "yekan"}}>

                                    <div className="mt-4">
                                        <label className="form-label text-white">ایمیل</label>
                                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control"/>
                                    </div>

                                    <div className="mt-4">
                                        <label className="form-label text-white">رمز عبور</label>
                                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control"/>
                                    </div>

                                    <button onClick={handleSubmit} className="btn mt-lg-4 d-lg-block m-lg-auto col-lg-9 col-9 d-block m-auto mt-4 text-white" style={{fontFamily: "yekan", backgroundColor: "#430090"}}>ورود</button>

                                    <Link to={""} className="btn mt-lg-4 d-lg-block m-lg-auto col-lg-9 col-9 d-block m-auto mt-4 text-white" style={{fontFamily: "yekan", border: "2px solid #430090"}}>فراموشی رمز عبور</Link>
                                    <button className="btn mt-lg-4 d-lg-block m-lg-auto col-lg-9 col-9 d-block m-auto mt-4 text-white" style={{fontFamily: "yekan", border: "2px solid #430090"}}>ثبت نام کنید</button>
                                    {errorMessage && <p className="text-danger">{errorMessage}</p>}

                                </form>


                            </div>

                        </div>

                    </div>

                </div>

            </>

        )

    }


export default Login;