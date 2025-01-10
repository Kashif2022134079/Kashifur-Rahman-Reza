import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";
const Main = () => {
    return (
        <div className="md:mx-0 mx-4 font-poppins bg-white">
            <div>
            <Navbar></Navbar>
            </div>
            <div className="md:flex gap-5 md:mt-4 md:py-20 p-4">
                <div className="md:w-1/4">
                <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:w-3/4">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;