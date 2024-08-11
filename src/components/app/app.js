import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import { WORKS, CONTACTS, SOCIALS, SKILLS, LINKS } from '../../mocks/mocks.js';
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import MainPage from "../pages/main-page/main-page";

import { GlobalStyle } from './styled.js';

function App() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const header = useRef(null);
  const [headerHeight, setHeaderHeigth] = useState(0);
  useEffect(() => {
      setHeaderHeigth(header.current.offsetHeight)
  },[headerHeight, windowWidth]);

  const footer = useRef(null);
  const [footerHeight, setFooterHeigth] = useState(0);
  useEffect(() => {
      setFooterHeigth(footer.current.offsetHeight);
  },[footerHeight, windowWidth]);

  return (
    <>
      <GlobalStyle/>
      <Router>
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper ref={[header, footer]} contacts={CONTACTS} socials={SOCIALS} links={LINKS}/>}>
            <Route index element={<MainPage paddingTop={headerHeight} paddingBottom={footerHeight} skills={SKILLS} works={WORKS}/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
