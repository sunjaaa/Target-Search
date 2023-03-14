import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SearchInput from "../../components/Input/SearchInput";
import ShowTargetInfo from "./components/ShowTargetInfo";

import { fetchHuman } from "../../hooks/useHuman";

const Home = () => {
  const [result, setResult] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const inputText = useRef("");

  useEffect(() => console.log("렌더링"));

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("e.key", e.key);
      e.preventDefault();
      activeButton();
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    inputText.current = value;
  };

  const activeButton = async () => {
    setIsLoading(true);
    const info = await fetchHuman(inputText.current);
    setResult(info);
    setIsLoading(false);
  };

  return (
    <Container>
      <InputBox>
        <SearchInput onChange={onChange} onKeyDown={activeEnter} />
      </InputBox>
      <ShowTargetInfo targetInfo={result} isLoading={isLoading} />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
  background-color: #000000;
  padding-left: 16px;
  padding-right: 16px;
`;

const InputBox = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #000000;
  margin-left: 32%;
  margin-right: 32%;
  padding-top: 8px;
  padding-bottom: 8px;
`;
