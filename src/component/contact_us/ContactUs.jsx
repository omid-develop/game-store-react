const ContactUs = ()=>{

    return(

        <>

            <div className="container-fluid" style={{marginTop:"120px"}}>
                <div className="container" style={{height:"100%" , maxWidth:"1210px"}}>

                    <div className="row">

                        <div className="col-lg-12 m-lg-auto text-lg-center text-white col-12 m-auto text-center col-sm-12 m-sm-auto text-sm-center" style={{fontSize:"22px" , fontFamily:"Sahel-Bold"}}>تماس با ما</div>

                        <div className="col-lg-12 m-lg-auto mt-lg-4 col-12 m-auto mt-4 col-sm-12 m-sm-auto mt-sm-4">

                            <div className="box-contact">

                                <div className="box-title">
                                    <div className="ax-title"><i className="fa-solid fa-phone"> </i></div>
                                    <div className="title">تلفن تماس</div>
                                </div>

                                <div className="box-matn-title">شنبه تا چهارشنبه ساعت ۸ تا ۱۹</div>

                                <div className="box-matn">021-12345678 - 021-12345678</div>

                            </div>

                            <div className="box-contact">

                                <div className="box-title">
                                    <div className="ax-title"><i className="fa-solid fa-location-dot"> </i></div>
                                    <div className="title">آدرس</div>
                                </div>

                                <div className="box-matn-title">ایران - تهران - منطقه 1 - تجریش</div>

                                <div className="box-matn">فروشگاه فروش بازی امید</div>

                            </div>

                            <div className="box-contact">

                                <div className="box-title">
                                    <div className="ax-title"><i className="fa-solid fa-envelope"> </i></div>
                                    <div className="title">آدرس ایمیل</div>
                                </div>

                                <div className="box-matn-title">تیم ما اینجاست تا به سوال های شما جواب بده</div>

                                <div className="box-matn">info@gmail.com</div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </>

    )

}


export default ContactUs;