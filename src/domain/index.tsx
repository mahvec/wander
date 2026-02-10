import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";


export default function Layout() {
    return (
        <>
            <div>
                <Navbar />
            </div>

            <div>
                <Outlet />
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}
