import image_abous_us from '../../assets/img/image-aboutUs.webp';

const AboutUs = ()=>{

    return(

        <>

            <div className="container-fluid" style={{marginTop:"120px"}}>

                <div className="container" style={{height:"100%" , maxWidth:"1210px"}}>

                    <div className="row">

                        <div className="col-lg-6 float-lg-end col-12 float-end col-sm-6 float-sm-end">

                            <div className="col-lg-12 m-lg-auto text-lg-end col-12 m-auto text-center col-sm-12 m-sm-auto text-sm-center text-white" style={{fontSize:"17px" , fontFamily:"yekan"}}>فروشگاه فروش بازی امید</div>

                            <div className="col-lg-12 m-lg-auto mt-lg-4 text-lg-end col-12 m-auto mt-4 text-center col-sm-12 m-sm-auto mt-sm-4 text-sm-center" style={{fontSize:"19px" , fontFamily:"Sahel-Bold" , color:"rgb(160 , 76 , 255)"}}>هر آن چیزی که از فروشگاه بازی میخواهید !</div>

                            <div className="col-lg-12 m-lg-auto mt-lg-4 text-lg-end col-12 m-auto mt-4 text-center col-sm-12 m-sm-auto mt-sm-4 text-sm-center text-white" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                                <p>سلام! ما یک سال پیش با هدف ارائه بهترین بازی‌ها و تجربه خرید آنلاین راحت و سریع شروع به کار کردیم. فروشگاه ما به شما امکان می‌دهد تا به راحتی از میان مجموعه‌ای گسترده از بازی‌های ویدیویی انتخاب کنید و آن‌ها را با بهترین قیمت‌ها دریافت کنید. از آن زمان، با تلاش مستمر و دقت در انتخاب بازی‌ها، به یکی از منابع معتبر خرید بازی برای گیمرها تبدیل شده‌ایم.</p>
                                <p className="mt-4">ما به ارائه خدمات با کیفیت، ارسال سریع و پشتیبانی مداوم اعتقاد داریم و همیشه در تلاشیم تا بهترین تجربه خرید آنلاین را برای شما فراهم کنیم. از اینکه به فروشگاه ما اعتماد کرده‌اید، متشکریم و امیدواریم که همیشه همراه شما باشیم.</p>
                            </div>

                        </div>

                        <div className="col-lg-6 float-lg-end col-12 float-end col-sm-6 float-sm-end mt-lg-0 mt-4 mt-sm-0">
                            <img src={image_abous_us} alt="not found" className="col-lg-7 d-lg-block m-lg-auto col-9 d-block m-auto col-sm-12 d-sm-block m-sm-auto" style={{borderRadius:"20px"}}/>
                        </div>

                    </div>

                </div>

            </div>

        </>

    )

}



export default AboutUs;