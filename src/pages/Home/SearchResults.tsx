import React from "react";
import styled from "styled-components";

const SearchResults = () => {
  return (
    <Container>
      <TextBox>
        <Title>SearchResults</Title>

        <Description>
          Since the beginning of this year, I've been working with a California
          Department of Food and Agriculture cooperative to translate a number
          of documents for Korean American farmers in California. The Korean
          American I translated documents for last year came highly recommended,
          so I ended up translating agricultural documents unintentionally.
          Thanks to that, I became familiar with terms like Good Agricultural
          Practices and Food Safety Plan. For someone like me who lives like a
          frog in a well, the new world is exciting and fun
        </Description>
        <DescriptionTiny>
          Since the beginning of this year, I've been working with a California
          Department of Food and Agriculture cooperative to translate a number
          of documents for Korean American farmers in California. The Korean
          American I translated documents for last year came highly recommended,
          so I ended up translating agricultural documents unintentionally.
          Thanks to that, I became familiar with terms like Good Agricultural
          Practices and Food Safety Plan. For someone like me who lives like a
          frog in a well, the new world is exciting and fun
        </DescriptionTiny>
      </TextBox>
    </Container>
  );
};

export default SearchResults;

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

const Title = styled.h2`
  border-width: 2px;
  border-color: white;
  border-style: solid;
  color: white;
`;

const Description = styled.h4`
  border-width: 2px;
  border-color: white;
  border-style: solid;
  color: white;
`;
const DescriptionTiny = styled.h5`
  border-width: 2px;
  border-color: white;
  border-style: solid;
  color: white;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;