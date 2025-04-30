import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout
import DefaultLayout from "./layouts/DefaultLayout";

// PAGES
import HomePage from "./Pages/HomePage";
import ContactUsPage from "./Pages/ContactUsPage";
import AboutUsPage from "./Pages/AboutUsPage";

// components
function App() {
    return (
        <BrowserRouter>
            <GlobalProvider>
                <Routes>
                    <Route Component={DefaultLayout}>
                        <Route path="/" Component={HomePage}/>
                        <Route path="/contact-us" Component={ContactUsPage}/>
                        <Route path="/about-us" Component={AboutUsPage}/>
                    </Route>
                    {/* <Route path="*" Component={NotFound} /> */}
                </Routes>
            </GlobalProvider>
        </BrowserRouter>
    );
}

export default App;