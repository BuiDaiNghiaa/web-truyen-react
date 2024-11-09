import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { Outlet } from "react-router-dom";
import '../assets/js/script';

export const LayoutDefault = () => {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}