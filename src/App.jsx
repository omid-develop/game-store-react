import IntroductionSite from "./component/home/IntroductionSite";
import Category from "./component/home/Category";
import BestSellers from "./component/home/BestSellers";
import SelectedGames from "./component/home/SelectedGames";
import InstantDiscounts from "./component/home/InstantDiscounts";
import Articles from "./component/home/Articles";


const App = ()=>{

    return(

        <>

            <IntroductionSite/>

            <Category/>

            <BestSellers/>

            <SelectedGames/>

            <InstantDiscounts/>

            <Articles/>

        </>

    )

}


export default App;