import styled from "styled-components";

const NoInfos = () => {
  return (
    <Container>
      <Title>일치하는 검색 결과가 없습니다</Title>
    </Container>
  );
};

export default NoInfos;

const Container = styled.div`
  height: 100vh;
  background-color: #000000;
  border-top-style: solid;
  border-bottom-style: solid;
  border-width: 1px;
  border-top-color: #ffffff;
  border-bottom-color: #ffffff;
`;

const Title = styled.h2`
  text-align: center;
  color: white;
  border-radius: 4px;
`;
