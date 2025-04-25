import { Outlet } from "react-router-dom"
import Header from "../sections/Header"
import Footer from "../sections/Footer"

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer/>
        </>
    )
};