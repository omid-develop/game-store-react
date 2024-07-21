import {Box, Typography} from "@mui/material";

const TabPanel = (props)=>{

    const {children , value , index , ...others} = props;

    return(

        <>

            <div role="tabpanel" hidden={value!==index} id={`tabPanel-${index}`} aria-labelledby={`sidebar-tab-${index}`} {...others}>

                {value===index && (
                    <Box>

                        <Typography>{children}</Typography>

                    </Box>
                )}

            </div>

        </>

    )

}


export default TabPanel;