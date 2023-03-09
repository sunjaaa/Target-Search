import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterBox>
      <footer>
        <Text>© 2023 sunjaaa. Powered by sunaaa</Text>
      </footer>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.div`
  display: flex;
  flex: 1;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  background-color: #b7b5b3c5;
`;

const Text = styled.a`
  font-size: smaller;
`;
