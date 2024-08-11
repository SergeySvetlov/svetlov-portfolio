import React, {forwardRef} from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./styled.js";

const PageWrapper = forwardRef(({contacts, socials, links}, ref) => {
    const [headerRef, footerRef] = ref;
    return (
        <>
            <Header ref={headerRef} contacts={contacts} links={links}/>
            <main>
                <Outlet/>
            </main>
            <Footer ref={footerRef} contacts={contacts} socials={socials}/>
        </>
    )
});

export default PageWrapper;