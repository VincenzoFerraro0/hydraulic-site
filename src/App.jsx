import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// layout
import DefaultLayout from "./layouts/DefaultLayout";

// PAGES
import HomePage from "./Pages/HomePage";
import ContactUsPage from "./Pages/ContactUsPage";
import AboutUsPage from "./Pages/AboutUsPage";
import NotFound from "./Pages/NotFoundPage"


// components
function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route Component={DefaultLayout}>
                    <Route path="/" Component={HomePage} />
                    <Route path="/contatti" Component={ContactUsPage} />
                    <Route path="/chi-siamo" Component={AboutUsPage} />
                    <Route path="*" Component={NotFound} />
                </Route>
                
            </Routes>
        </>

    );
}

export default App;