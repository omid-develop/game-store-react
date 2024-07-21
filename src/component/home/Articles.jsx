import game1 from '../../assets/img/game1.webp';
import game2 from '../../assets/img/game2.webp';
import game3 from '../../assets/img/game3.webp';
import game4 from '../../assets/img/game4.webp';

const Articles = ()=>{

    return(

        <>

            <div className="container-fluid mt-lg-5 mt-5">
                <div className="container" style={{height:"100%" , maxWidth:"1210px"}}>

                    <div className="row">

                        <div className="col-lg-6 d-lg-flex justify-content-lg-center align-items-lg-center col-6 d-flex justify-content-center align-items-center">
                            <div className="col-lg-12 col-12 font-category text-white" style={{fontSize:"23px" , fontFamily:"Sahel-Bold"}}>آخرین مقالات ما</div>
                        </div>

                        <div className="col-lg-6 col-6">
                            <div className="col-lg-12 col-12">
                                <a href="#" className="col-lg-3 float-lg-start text-decoration-none text-black text-lg-center col-9 float-start text-center col-sm-5 float-sm-start text-white" style={{backgroundColor:"#505669" , padding:"9px 0" , borderRadius:"9px" , fontFamily:"Sahel-Bold"}}>موارد بیشتر <i className="fas fa-angle-left"> </i></a>
                            </div>
                        </div>

                    </div>


                    <div className="row mt-lg-3">

                        <div className="col-lg-3 float-lg-end m-lg-0 col-10 m-auto mt-4 col-sm-6 float-sm-end mt-sm-4 col-md-4 float-md-end mt-md-4 m-md-0">

                            <div className="col-lg-12 m-lg-auto pb-lg-3 col-12 m-auto pb-3 col-sm-12 m-sm-auto pb-sm-3 col-md-12 m-md-auto pb-md-3" style={{borderRadius:"17px" , backgroundColor:"#151b2d"}}>

                                <img src={game1} alt="" className="col-lg-12 col-12 col-sm-12 col-md-12" style={{borderTopLeftRadius:"17px" , borderTopRightRadius:"17px"}}/>

                                <div className="col-lg-12 text-white m-lg-auto mt-lg-3 text-lg-center col-12 m-auto mt-3 text-center col-sm-12 m-sm-auto mt-sm-3 text-sm-center col-md-12 m-md-auto mt-md-3 text-md-center" style={{fontSize:"19px" , fontFamily:"Sahel-Bold"}}>اخبار کالاف تیوتی</div>

                            </div>

                        </div>


                        <div className="col-lg-3 float-lg-end m-lg-0 col-10 m-auto mt-4 col-sm-6 float-sm-end mt-sm-4 col-md-4 float-md-end mt-md-4 m-md-0">

                            <div className="col-lg-12 m-lg-auto pb-lg-3 col-12 m-auto pb-3 col-sm-12 m-sm-auto pb-sm-3 col-md-12 m-md-auto pb-md-3" style={{borderRadius:"17px" , backgroundColor:"#151b2d"}}>

                                <img src={game2} alt="" className="col-lg-12 col-12 col-sm-12 col-md-12" style={{borderTopLeftRadius:"17px" , borderTopRightRadius:"17px"}}/>

                                <div className="col-lg-12 text-white m-lg-auto mt-lg-3 text-lg-center col-12 m-auto mt-3 text-center col-sm-12 m-sm-auto mt-sm-3 text-sm-center col-md-12 m-md-auto mt-md-3 text-md-center" style={{fontSize:"19px" , fontFamily:"Sahel-Bold"}}>اخبار کالاف تیوتی</div>

                            </div>

                        </div>


                        <div className="col-lg-3 float-lg-end m-lg-0 col-10 m-auto mt-4 col-sm-6 float-sm-end mt-sm-4 col-md-4 float-md-end mt-md-4 m-md-0">

                            <div className="col-lg-12 m-lg-auto pb-lg-3 col-12 m-auto pb-3 col-sm-12 m-sm-auto pb-sm-3 col-md-12 m-md-auto pb-md-3" style={{borderRadius:"17px" , backgroundColor:"#151b2d"}}>

                                <img src={game3} alt="" className="col-lg-12 col-12 col-sm-12 col-md-12" style={{borderTopLeftRadius:"17px" , borderTopRightRadius:"17px"}}/>

                                <div className="col-lg-12 text-white m-lg-auto mt-lg-3 text-lg-center col-12 m-auto mt-3 text-center col-sm-12 m-sm-auto mt-sm-3 text-sm-center col-md-12 m-md-auto mt-md-3 text-md-center" style={{fontSize:"19px" , fontFamily:"Sahel-Bold"}}>اخبار کالاف تیوتی</div>

                            </div>

                        </div>


                        <div className="col-lg-3 float-lg-end m-lg-0 col-10 m-auto mt-4 col-sm-6 float-sm-end mt-sm-4 col-md-4 float-md-end mt-md-4 m-md-0">

                            <div className="col-lg-12 m-lg-auto pb-lg-3 col-12 m-auto pb-3 col-sm-12 m-sm-auto pb-sm-3 col-md-12 m-md-auto pb-md-3" style={{borderRadius:"17px" , backgroundColor:"#151b2d"}}>

                                <img src={game4} alt="" className="col-lg-12 col-12 col-sm-12 col-md-12" style={{borderTopLeftRadius:"17px" , borderTopRightRadius:"17px"}}/>

                                <div className="col-lg-12 text-white m-lg-auto mt-lg-3 text-lg-center col-12 m-auto mt-3 text-center col-sm-12 m-sm-auto mt-sm-3 text-sm-center col-md-12 m-md-auto mt-md-3 text-md-center" style={{fontSize:"19px" , fontFamily:"Sahel-Bold"}}>اخبار کالاف تیوتی</div>

                            </div>

                        </div>

                    </div>


                </div>
            </div>

        </>

    )

}



export default Articles;