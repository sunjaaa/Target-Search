import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SearchInput from "../../components/Input/SearchInput";
import { fetchHuman } from "../../hooks/useHuman";
import NoResult from "./NoResult";
import SearchResults from "./SearchResults";

const Home = () => {
  useEffect(() => console.log("렌더링된다"));

  const inputText = useRef("");
  const resultTarget = useRef("");

  const [result, setResult] = useState<Object>();

  console.log("inputText.current", inputText.current);

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

    console.log("info ", typeof info);
    setResult(info);

    // resultTarget.current = info;
  };

  return (
    <>
      <Container>
        <SearchInput onChange={onChange} onKeyDown={activeEnter} />
      </Container>
      {result ? <SearchResults targetInfo={result} /> : <NoResult />}
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
