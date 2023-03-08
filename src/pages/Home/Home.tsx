import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SearchInput from "../../components/Input/SearchInput";
import ShowTargetInfo from "./components/ShowTargetInfo";

import { fetchHuman } from "../../hooks/useHuman";

const Home = () => {
  const inputText = useRef("");
  const [result, setResult] = useState<Object>();

  useEffect(() => console.log("렌더링"));

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      activeButton();
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    inputText.current = value;
  };

  const activeButton = async () => {
    console.log("INPUT TARGET : ", inputText.current);

    const info = await fetchHuman(inputText.current);
    setResult(info);
  };

  return (
    <>
      <Container>
        <SearchInput onChange={onChange} onKeyDown={activeEnter} />
      </Container>
      {result ? <ShowTargetInfo targetInfo={result} /> : <Empty />}
    </>
  );
};

export default Home;

const Container = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #000000;
  margin-left: 32%;
  margin-right: 32%;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const Empty = styled.div`
  height: 100vh;
  background-color: #00ffae;
`;
