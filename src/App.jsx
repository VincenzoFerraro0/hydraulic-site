import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout
import DefaultLayout from "./layouts/DefaultLayout";

// PAGES
import HomePage from "./Pages/HomePage";

// components
function App() {
    return (
        <BrowserRouter>
            <GlobalProvider>
                <Routes>
                    <Route Component={DefaultLayout}>
                        <Route path="/" Component={HomePage}/>
                    </Route>
                    {/* <Route path="*" Component={NotFound} /> */}
                </Routes>
            </GlobalProvider>
        </BrowserRouter>
    );
}

export default App;