import {Tabs, Tab} from "@mui/material";
import {useState} from "react";
import TabPanel from "./tabs/TabPanel";
import MenuCreate from "./panel_components/menu/MenuCreate";
import AppCategory from "./panel_components/categories/AppCategory";
import AppProduct from "./panel_components/products/AppProduct";
const Panel = ()=>{


    const tabProps = (index)=>{

        return{
            id:`sidebar-tab-${index}` ,
            "aria-controls":`tabPanel-${index}`
        }

    }


    // create value and on change tabs

    const [value , setValue] = useState(0);

    const handleChange = (event , newValue)=>{
        setValue(newValue);
    }


    return(

        <>

          <div className="container-panel" style={{backgroundColor:"darkslateblue"}}>

              <div className="nav-panel" style={{backgroundColor:"white"}}>پنل ادمین - فروشگاه بازی</div>

              <div className="box-item-panel" style={{backgroundColor:"#624CA4"}}>

                  <h3 className="text-lg-center mt-lg-4" style={{fontFamily:"Sahel-Bold" , color:"orange"}}>داشبورد</h3>

                  <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange}>

                      <Tab style={{color:"white"}} label="منو" sx={{fontSize:"17px" , fontFamily:"yekan" , marginTop:"10px"}} {...tabProps(0)}/>
                      <Tab style={{color:"white"}} label="دسته بندی محصولات" sx={{fontSize:"17px" , fontFamily:"yekan" , marginTop:"10px"}} {...tabProps(1)}/>
                      <Tab style={{color:"white"}} label="محصولات" sx={{fontSize:"17px" , fontFamily:"yekan" , marginTop:"10px"}} {...tabProps(2)}/>
                      <Tab style={{color:"white"}} label="خروج" sx={{fontSize:"17px" , fontFamily:"yekan" , marginTop:"10px"}} {...tabProps(3)}/>

                  </Tabs>

              </div>

              <div className="box-mohtava-panel">


                  <TabPanel value={value} index={0}>

                      <MenuCreate/>

                  </TabPanel>

                  <TabPanel value={value} index={1}>

                      <AppCategory/>

                  </TabPanel>

                  <TabPanel value={value} index={2}>

                      <AppProduct/>

                  </TabPanel>

                  <TabPanel value={value} index={3}>

                      <h1>خروج</h1>

                  </TabPanel>

              </div>

          </div>

        </>

    )

}


export default Panel;