import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function Layout() {
    return (
        <main className="bg-main-bg p-(--container-padding-mobile) md:px-(--container-padding-tablet) lg:px-(--container-padding-laptop)">
            <Header />
            <Outlet />
            <Footer />
        </main>
    );
}
