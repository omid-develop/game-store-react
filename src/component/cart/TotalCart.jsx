const TotalCart = ()=>{

    return(

        <>

            <div className="container-fluid" style={{marginTop:"110px"}}>
                <div className="container" style={{height:"100%" , maxWidth:"1210px"}}>

                    <div className="row">

                        <div className="col-lg-12 m-lg-auto text-lg-center col-12 m-auto text-center col-sm-12 m-sm-auto text-sm-center col-md-12 m-md-auto text-md-center text-white" style={{fontSize:"22px" , fontFamily:"Sahel-Bold"}}>سبد خرید - تکمیل سفارش</div>

                        <div className="col-lg-8 float-lg-end mt-lg-4 col-12 m-lg-0 m-auto">

                            <table className="table bg-white" style={{borderRadius:"10px" , paddingTop:"10px"}}>

                                <tr className="text-lg-center" style={{fontSize:"16px" , fontFamily:"Sahel-Bold"}}>
                                    <td className="pt-lg-4">حذف محصول</td>
                                    <td className="pt-lg-4">نام محصول</td>
                                    <td className="pt-lg-4">قیمت محصول</td>
                                    <td className="pt-lg-4">تعداد محصول</td>
                                    <td className="pt-lg-4">جمع جزء</td>
                                </tr>


                                <tr>

                                    <td className="text-center pt-lg-4 pb-lg-4">
                                        <button className="btn"><i className="fas fa-times" style={{color:"red"}}> </i></button>
                                    </td>

                                    <td className="text-lg-center pt-lg-4 pb-lg-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>بازی جی تی آی</td>

                                    <td className="text-lg-center pt-lg-4 pb-lg-4 " style={{fontSize:"16px" , fontFamily:"yekan"}}>100000 تومان</td>

                                    <td className="text-lg-center pt-lg-4 pb-lg-4"><input type="number"/></td>

                                    <td className="text-lg-center pt-lg-4 pb-lg-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>500000 تومان</td>

                                </tr>

                                <tr>
                                    <td className="text-center pt-lg-4 pb-lg-4">
                                        <button className="btn"><i className="fas fa-times" style={{color:"red"}}> </i></button>
                                    </td>

                                    <td className="text-lg-center pt-lg-4 pb-lg-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>بازی جی تی آی</td>
                                    <td className="text-lg-center pt-lg-4 pb-lg-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>100000 تومان</td>
                                    <td className="text-lg-center pt-lg-4 pb-lg-4"><input type="number"/></td>
                                    <td className="text-lg-center pt-lg-4 pb-lg-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>500000 تومان</td>

                                </tr>


                            </table>

                        </div>


                        <div className="col-lg-4 float-lg-end mt-lg-4 pt-lg-3 pb-lg-4 col-12 float-end mt-4 pt-3 pb-4 col-sm-12 float-sm-end mt-sm-4 pt-sm-3 pb-sm-4" style={{borderRadius:"10px" , border:"2px solid #a04cff"}}>

                            <div className="col-lg-12 m-lg-auto mt-lg-2 text-lg-center col-12 m-auto mt-2 text-center col-sm-12 m-sm-auto mt-sm-2 col-md-12 m-md-auto mt-md-2 text-white" style={{fontSize:"17px" , fontFamily:"Sahel-Bold"}}>جمع کل سبد خرید</div>

                            <div className="col-lg-6 float-lg-end mt-lg-4 col-6 float-end mt-4 text-white" style={{fontSize:"17px" , fontFamily:"Sahel-Bold"}}>جمع جزء</div>

                            <div className="col-lg-6 float-lg-end mt-lg-4 text-lg-start col-6 float-end text-start mt-4 text-white" style={{fontSize:"17px" , fontFamily:"Sahel-Bold"}}>110000 تومان</div>

                            <div className="col-lg-12 float-lg-end mt-lg-4 d-lg-block d-none" style={{height:"1px" , backgroundColor:"darkgrey"}}> </div>

                            <div className="col-lg-6 float-lg-end mt-lg-4 col-6 float-end mt-4 text-white" style={{fontSize:"17px" , fontFamily:"sahel-Bold"}}>جمع جزء</div>

                            <div className="col-lg-6 float-lg-end mt-lg-4 text-lg-start col-6 float-end text-start mt-4 text-white" style={{fontSize:"17px" , fontFamily:"sahel-Bold"}}>110000 تومان</div>

                            <div className="col-lg-12 float-lg-end mt-lg-4 d-lg-block d-none" style={{height:"1px" , backgroundColor:"darkgrey"}}> </div>

                            <button className="btn m-lg-auto mt-lg-4 col-lg-12 col-12 mt-4 text-white" style={{backgroundColor:"#a04cff" , fontSize:"16px" , fontFamily:"Sahel-Bold"}}>تکمیل سفارش</button>

                        </div>

                    </div>

                </div>
            </div>

        </>

    )

}


export default TotalCart;