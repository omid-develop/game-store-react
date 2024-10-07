import game from '../../assets/img/game.webp';
import zare from '../../assets/img/zare.png';

const IntroductionSite = ()=>{

    return(

        <>

            <div className="container-fluid" style={{marginTop:"56px" , minHeight:"320px" , zIndex:"-100"}}>
                <div className="container" style={{height:"100%" , maxWidth:"1263px"}}>
                    <div className="row">

                        <div className="col-lg-6 col-12 col-sm-12 col-md-12">

                            <div className="col-lg-12 m-lg-auto mt-lg-5 text-lg-center col-12 col-sm-12 col-md-12 m-auto m-sm-auto m-md-auto text-center text-md-center text-sm-center mt-4 mt-sm-4 mt-md-4 text-white" style={{fontSize:"30px" , fontFamily:"Sahel-Bold"}}>معرفی فروشگاه فروش بازی امید</div>

                            <div className="col-lg-12 m-lg-auto mt-lg-4 col-12 col-sm-12 col-md-12 m-auto m-sm-auto m-md-auto text-lg-end text-center text-sm-end text-md-end mt-4 mt-sm-4 mt-md-4 text-white" style={{fontSize:"18px" , fontFamily:"yekan"}}>در سایت ما انواع بازی های مختلف ، اعم از ، بازی برای کامپیوتر ، پلی استیشن ، ایکس باکس و ... منتشر می شود و شما می توانید این بازی ها را با بهترین و ارزان ترین قیمت خریداری نمایید .</div>

                            <div className="col-lg-12 m-lg-auto mt-lg-5 col-12 col-sm-12 col-md-12 m-auto m-md-auto m-sm-auto text-lg-end text-center text-md-end text-sm-end mt-4 mt-sm-4 mt-md-4 text-white" style={{fontSize:"18px" , fontFamily:"yekan"}}>شما می توانید برای مشاهده انواع بازی های ما با کلیک ب روی دکمه زیر به صفحه فروشگاه ما بروید .</div>

                            <div className="col-lg-12 d-lg-flex justify-content-lg-center mt-lg-3 mt-4">
                                <a className="btn mt-lg-4 col-lg-5 col-12 col-sm-5 col-md-4" style={{fontSize:"17px" , fontFamily:"Sahel-Bold" , paddingRight:"35px" , paddingLeft:"35px" , paddingTop:"10px" , paddingBottom:"10px" , backgroundColor:"#a04cff" , color:"white"}}>خرید آیتم های بازی <i className="fas fa-arrow-left"> </i></a>
                                <a href="#best_seller" className="btn mt-lg-4 me-lg-5 col-lg-5 col-12 mt-4 col-sm-5 col-md-4 mt-sm-0 mt-md-0 me-0 me-md-4 me-sm-4" style={{fontSize:"17px" , fontFamily:"Sahel-Bold" , paddingRight:"35px" , paddingLeft:"35px" , paddingTop:"10px" , paddingBottom:"10px" , backgroundColor:"#a04cff" , color:"white"}}>پروفرش ترین بازی ها <i className="fas fa-arrow-down"> </i></a>
                            </div>

                            <div
                                className="col-lg-12 m-lg-auto mt-lg-5 d-lg-flex justify-content-lg-center col-12 mt-5 d-sm-flex">

                                <div className="col-lg-3 col-12 col-sm-4">

                                    <div className="col-lg-12 m-lg-auto text-lg-center col-12 m-auto text-center col-sm-12 m-sm-auto text-sm-center">
                                        <i className="fa-sharp fa-solid fa-truck text-lg-center" style={{fontSize:"35px" , color:"#f3608e"}}> </i>
                                    </div>

                                    <div className="col-lg-12 m-lg-auto mt-lg-3 text-lg-center col-12 mt-3 text-center col-sm-12 m-sm-auto text-sm-center mt-sm-3" style={{fontSize:"17px" , fontFamily:"yekan" , color:"white"}}>تحویل فوری</div>

                                </div>

                                <div className="col-lg-3 me-lg-4 col-12 me-0 mt-lg-0 mt-4 col-sm-4 mt-sm-0">

                                    <div className="col-lg-12 m-lg-auto text-lg-center col-12 m-auto text-center col-sm-12 m-sm-auto text-sm-center">
                                        <i style={{fontSize:"35px" , color:"#ae7dff"}} className="fa-solid fa-headset"> </i>
                                    </div>

                                    <div className="col-lg-12 m-lg-auto mt-lg-3 text-lg-center col-12 m-auto mt-3 text-center col-sm-12 m-sm-auto text-sm-center mt-sm-3" style={{fontSize:"17px" , fontFamily:"yekan" , color:"white"}}>پشتیبانی</div>

                                </div>

                                <div className="col-lg-3 me-lg-4 col-12 me-0 mt-lg-0 mt-4 col-sm-4 mt-sm-0">

                                    <div
                                        className="col-lg-12 m-lg-auto text-lg-center col-12 m-auto text-center col-sm-12 m-sm-auto text-sm-center">
                                        <i style={{fontSize:"35px" , color:"#fe583c"}} className="fa-solid fa-comment"> </i>
                                    </div>

                                    <div className="col-lg-12 m-lg-auto mt-lg-3 text-lg-center col-12 m-auto mt-3 text-center col-sm-12 m-sm-auto text-sm-center mt-sm-3" style={{fontSize:"17px" , fontFamily:"yekan" , color:"white"}}>نظرات مشتریان</div>

                                </div>

                            </div>

                        </div>

                        <div className="col-lg-6 col-12 col-sm-12 col-md-12 mt-lg-0 mt-4 mt-sm-4">

                            <div className="col-lg-12 d-lg-flex justify-content-lg-center align-items-lg-center image-intro d-none">
                                <img src={game} alt="" className="col-lg-7 image animation-image"/>
                                <img src={zare} alt="" className="col-lg-12 animation-zare"/>
                            </div>

                            {/*  Responsive in image game  */}

                            <div className="col-12 m-auto mt-4 col-sm-12 m-sm-auto mt-sm-4 d-lg-none">
                                <img src={game} alt="" className="col-6 d-block m-auto col-sm-9 d-sm-block m-sm-auto col-md-9 d-md-block m-md-auto"/>
                            </div>

                            <div className="col-lg-12 text-white m-lg-auto text-lg-center col-12 col-sm-12 col-md-12 text-center text-sm-center text-md-center" style={{fontSize:"35px" , fontFamily:"Sahel-Bold"}}>خرید CP کالاف</div>

                        </div>

                    </div>
                </div>
            </div>

        </>

    )

}


export default IntroductionSite;