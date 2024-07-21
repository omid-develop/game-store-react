import logo_playStation from '../../assets/img/logo-playStation.png';
import logo_Xbox from '../../assets/img/logo-Xbox.png';
import logo_windows from '../../assets/img/logo-windows.png';
import logo_IOS from '../../assets/img/logo-IOS.png';
import logo_stim from '../../assets/img/logo-stim.png';
import logo_origin from '../../assets/img/logo-origin.png';

const ProductCategories = ()=>{

    return(

        <>

            <div className="container-fluid mt-lg-5 mt-5">
                <div className="container" style={{height:"100%" , maxWidth:"1210px"}}>

                    <div className="row">

                        <div className="col-lg-12 m-lg-auto text-lg-center col-12 m-auto text-center col-sm-12 m-sm-auto text-sm-center col-md-12 m-md-auto text-md-center text-white" style={{fontSize:"22px" , fontFamily:"Sahel-Bold"}}>دسته بندی محصولات</div>

                        <div className="col-lg-2 mt-lg-4 col-4 mt-4 col-sm-3 mt-sm-4">
                            <div className="box-ax-category">
                                <img src={logo_playStation} alt="" className="col-lg-12 col-12 col-sm-12"/>
                            </div>

                            <div className="col-lg-12 m-lg-auto mt-lg-3 text-lg-center text-white col-12 m-auto text-center col-sm-12 m-sm-auto text-sm-center" style={{fontSize:"17px" , fontFamily:"yekan"}}>پلی استیشن</div>

                        </div>

                        <div className="col-lg-2 mt-lg-4 col-4 mt-4 col-sm-3 mt-sm-4">
                            <div className="box-ax-category">
                                <img src={logo_Xbox} alt="" className="col-lg-12 col-12 col-sm-12"/>
                            </div>

                            <div className="col-lg-12 m-lg-auto mt-lg-3 text-lg-center text-white col-12 m-auto text-center col-sm-12 m-sm-auto text-sm-center" style={{fontSize:"17px" , fontFamily:"yekan"}}>ایکس باکس</div>

                        </div>

                        <div className="col-lg-2 mt-lg-4 col-4 mt-4 col-sm-3 mt-sm-4">
                            <div className="box-ax-category">
                                <img src={logo_windows} alt="" className="col-lg-12 col-12 col-sm-12"/>
                            </div>

                            <div className="col-lg-12 m-lg-auto mt-lg-3 text-lg-center text-white col-12 m-auto text-center col-sm-12 m-sm-auto text-sm-center" style={{fontSize:"17px" , fontFamily:"yekan"}}>ویندوز</div>

                        </div>


                        <div className="col-lg-2 mt-lg-4 col-4 mt-4 col-sm-3 mt-sm-4">
                            <div className="box-ax-category">
                                <img src={logo_IOS} alt="" className="col-lg-12 col-12 col-sm-12"/>
                            </div>

                            <div className="col-lg-12 m-lg-auto mt-lg-3 text-lg-center text-white col-12 m-auto text-center col-sm-12 m-sm-auto text-sm-center" style={{fontSize:"17px" , fontFamily:"yekan"}}>بازی های IOS</div>

                        </div>

                        <div className="col-lg-2 mt-lg-4 col-4 mt-4 col-sm-3 mt-sm-4">
                            <div className="box-ax-category">
                                <img src={logo_stim} alt="" className="col-lg-12 col-12 col-sm-12"/>
                            </div>

                            <div className="col-lg-12 m-lg-auto mt-lg-3 text-lg-center text-white col-12 m-auto text-center col-sm-12 m-sm-auto text-sm-center" style={{fontSize:"17px" , fontFamily:"yekan"}}>استیم</div>

                        </div>


                        <div className="col-lg-2 mt-lg-4 col-4 mt-4 col-sm-3 mt-sm-4">
                            <div className="box-ax-category">
                                <img src={logo_origin} alt="" className="col-lg-12 col-12 col-sm-12"/>
                            </div>

                            <div className="col-lg-12 m-lg-auto mt-lg-3 text-lg-center text-white col-12 m-auto text-center col-sm-12 m-sm-auto text-sm-center" style={{fontSize:"17px" , fontFamily:"yekan"}}>اوریجین</div>

                        </div>


                    </div>

                </div>
            </div>

        </>

    )

}


export default ProductCategories;