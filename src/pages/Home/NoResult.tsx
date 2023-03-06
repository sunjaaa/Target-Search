import React from "react";
import styled from "styled-components";

export interface Props {
  targetInfo?: any;
}

const NoResult = ({ targetInfo }: Props) => {
  console.log("targetInfo", targetInfo);

  // const targetName = targetInfo.name ?? "하이";

  return (
    <Container>
      <TextBox></TextBox>
    </Container>
  );
};

export default NoResult;

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  background-color: #000000c5;
  padding-left: 16px;
  border-top-style: solid;
  border-width: 1px;
  border-top-color: #ffffff;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;
