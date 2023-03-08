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
        {children}
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;
