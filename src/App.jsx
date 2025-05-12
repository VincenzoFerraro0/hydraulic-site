import { Routes, Route } from "react-router-dom";

// layout
import DefaultLayout from "./layouts/DefaultLayout";

// PAGES
import HomePage from "./Pages/HomePage";
import ContactUsPage from "./Pages/ContactUsPage";
import AboutUsPage from "./Pages/AboutUsPage";

// components
function App() {
    return (
        <Routes>
            <Route Component={DefaultLayout}>
                <Route path="/" Component={HomePage} />
                <Route path="/contatti" Component={ContactUsPage} />
                <Route path="/chi-siamo" Component={AboutUsPage} />
            </Route>
            {/* <Route path="*" Component={NotFound} /> */}
        </Routes>
    );
}

export default App;