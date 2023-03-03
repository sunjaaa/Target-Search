import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderBox>
      <header>
        <HeaderTexth2>Target Search</HeaderTexth2>
      </header>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  background-color: #000000;
  border-bottom-style: solid;
  border-width: 1px;
  border-bottom-color: #ffffff;
`;
const HeaderTexth2 = styled.h2`
  color: white;
`;
