import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import * as S from "./Layout.styles";

function Layout() {
  return (
    <S.LayoutWrapper>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
      <Footer />
    </S.LayoutWrapper>
  );
}

export default Layout;
