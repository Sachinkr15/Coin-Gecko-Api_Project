import{Routes , Route} from "react-router-dom";
// import Home from "../Pages/Home";
// import CoinDetailsPage from "../Pages/coinDetailsPage";
import MainLayout from "../Pages/Layout";
import{lazy, Suspense} from "react";
import PageLoader from "../PageLoader/PageLoader"

const Home = lazy(()=> import("../Pages/Home"));
const CoinDetailsPage = lazy(()=> import("../Pages/CoinDetailsPage"));


function Routing (){
    return(

        <Routes>

            <Route> 
            <Route path="/" element ={<MainLayout/>} />

            <Route index element = {
                <Suspense fallback={<PageLoader/>}>
                <Home/>
                </Suspense>
                }/>


            <Route path="/details/:coinId" element ={
                <Suspense fallback={<PageLoader/>}>
                <CoinDetailsPage/>
                </Suspense>
                
                } />
            </Route>
        </Routes> 
    )
}
export default Routing;