const Comments = ()=>{

    return(

        <>

            <div className="container-fluid mt-lg-5 mt-5">
                <div className="container" style={{height:"100%" , maxWidth:"1210px"}}>

                    <div className="row pt-lg-4 pb-lg-4" style={{backgroundColor:"#151b2d" , borderRadius:"15px"}}>

                        <div className="col-lg-12 m-lg-auto text-lg-center text-white mt-lg-0 mt-4 text-center" style={{fontSize:"21px" , fontFamily:"yekan"}}>دیدگاه شما</div>

                        <div className="col-lg-12 m-lg-auto mt-lg-5">

                            <div className="col-lg-6 float-lg-end">

                                <div className="col-lg-11 m-lg-auto mt-lg-0 mt-5" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                                    <label className="form-label text-white">نام و نام خانوادگی <span style={{color:"red"}}>*</span></label>
                                    <input type="email" className="form-control"/>
                                </div>

                            </div>

                            <div className="col-lg-6 float-lg-end">

                                <div className="col-lg-11 m-lg-auto mt-lg-0 mt-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>
                                    <label className="form-label text-white">ایمیل <span style={{color:"red"}}>*</span></label>
                                    <input type="email" className="form-control"/>
                                </div>

                            </div>


                            <div className="col-lg-12 form-nazarat" style={{margin:"auto" , marginTop:"90px"}}>

                                <div className="col-lg-12 m-lg-auto p-lg-4" style={{fontSize:"16px" , fontFamily:"yekan"}}>

                                    <label className="form-label text-white">نقد و نظرات خود را بنویسید <span style={{color:"red"}}>*</span></label>
                                    <textarea className="form-control"> </textarea>

                                    <button className="btn mt-lg-4 col-lg-1 col-3 col-sm-2 col-md-2 mt-4 mt-sm-4 mt-md-4 mb-4 mb-sm-4 text-white" style={{backgroundColor:"#a04cff"}}>ثبت</button>

                                </div>

                            </div>


                        </div>

                    </div>

                </div>
            </div>

        </>

    )

}



export default Comments;