import { Outlet } from "react-router-dom"
import Header from "../sections/Header"
import Footer from "../sections/Footer"

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main className="mt-19 background-fixed">
                <Outlet />
            </main>
            <Footer/>
        </>
    )
};