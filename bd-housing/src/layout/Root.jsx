import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '/src/index.css'
const Root = () => {
    return (
        <div className="font-poppins">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;