import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

import "../../styles/global.css"

export const RootLayout = () => {
    return (

        <div className="main">
            <Header />
            <main className="site-main">
                <Outlet />                
            </main>
            <Footer />
        </div>

    );
}