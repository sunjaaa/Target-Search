import React from "react";
import styled from "styled-components";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

type layoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: layoutProps) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Header />
        <MainBox>{children}</MainBox>
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const MainBox = styled.main`
  background-color: #000000;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;
