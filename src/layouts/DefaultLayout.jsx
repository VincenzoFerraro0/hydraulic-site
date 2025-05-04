import { Outlet } from "react-router-dom"
import Header from "../sections/Header"
import Footer from "../sections/Footer"

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main className="pt-24 mx-auto max-w-[96%] px-4 sm:px-6 lg:px-8' ">
                <Outlet />
            </main>
            <Footer/>
        </>
    )
};