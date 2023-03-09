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
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
