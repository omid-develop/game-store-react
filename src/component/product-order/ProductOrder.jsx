const ProductOrder = ()=>{

    return(

        <>

            <div className="container-fluid" style={{marginTop:"120px"}}>

                <div className="container" style={{height:"100%" , maxWidth:"1210px"}}>

                    <div className="row">

                        <div className="col-lg-12 m-lg-auto text-lg-center col-12 m-auto text-center col-sm-12 m-sm-auto text-sm-center col-md-12 m-md-auto text-md-center" style={{fontSize:"22px" , fontFamily:"Sahel-Bold" , color:"#a04cff"}}>چگونه محصول خود را سفارش دهیم ؟</div>

                        <div className="col-lg-9 m-lg-auto mt-lg-5">

                            <ol className="text-white" style={{fontSize:"18px" , fontFamily:"yekan" , lineHeight:"45px"}}>
                                <li>ابتدا باید درون وب سایت ثبت نام کنید . بنابراین روی آیکون user کلیک کنید .</li>
                                <li>محصول مورد نظر خود را جست و جو کنید .</li>
                                <li>پس از انتخاب روی دکمه افزودن به سبد خرید کلیک کنید .</li>
                                <li> در این مرحله شما می توانید تعداد محصول را کاهش و یا افزایش دهید . همچنین امکان حذف
                                    محصول نیز از سبد خرید وجود دارد .
                                </li>
                            </ol>

                        </div>

                    </div>

                </div>

            </div>

        </>

    )

}


export default ProductOrder;