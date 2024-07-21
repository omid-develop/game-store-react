import image_abous_us from '../../assets/img/image-aboutUs.webp';

const AboutUs = ()=>{

    return(

        <>

            <div className="container-fluid" style={{marginTop:"120px"}}>

                <div className="container" style={{height:"100%" , maxWidth:"1210px"}}>

                    <div className="row">

                        <div className="col-lg-6 float-lg-end col-12 float-end col-sm-6 float-sm-end">

                            <div className="col-lg-12 m-lg-auto text-lg-end col-12 m-auto text-center col-sm-12 m-sm-auto text-sm-center text-white" style={{fontSize:"17px" , fontFamily:"yekan"}}>فروشگاه فروش بازی امید</div>

                            <div className="col-lg-12 m-lg-auto mt-lg-4 text-lg-end col-12 m-auto mt-4 text-center col-sm-12 m-sm-auto mt-sm-4 text-sm-center text-white" style={{fontSize:"19px" , fontFamily:"Sahel-Bold"}}>هر آن چیزی که از فروشگاه بازی میخواهید !</div>

                            <div className="col-lg-12 m-lg-auto mt-lg-4 text-lg-end col-12 m-auto mt-4 text-center col-sm-12 m-sm-auto mt-sm-4 text-sm-center text-white" style={{fontSize:"16px" , fontFamily:"yekan"}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
                                ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                                هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
                                شناخت فراوان جامعه و متخصصان را می طلبد.
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