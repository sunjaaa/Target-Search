import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SearchInput from "@components/Input/SearchInput";
import CircleLoading from "@components/Indicator/CircleLoading";

import ShowTargetInfo from "./components/ShowTargetInfo";

import { fetchHuman } from "@hooks/useHuman";

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

  const IsLoading = () => {
    return isLoading === true ? (
      <CircleLoading color="white" stroke={10} radius={100} style={indicator} />
    ) : (
      <ShowTargetInfo targetInfo={result} />
    );
  };

  return (
    <Container>
      <InputBox>
        <SearchInput onChange={onChange} onKeyDown={activeEnter} />
      </InputBox>
      <IsLoading />
    </Container>
  );
};

export default Home;

const indicator = { alignSelf: "center", marginTop: "20%" };

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
