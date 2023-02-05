import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Frontend = ()=>{

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}