import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import SearchInput from "../../components/Input/SearchInput";
import { fetchHuman } from "../../hooks/useHuman";
import NoResult from "./NoResult";
import SearchResults from "./SearchResults";

const Home = () => {
  useEffect(() => console.log("렌더링된다"));

  const inputText = useRef("");
  const resultTarget = useRef("");

  console.log("inputText.current", inputText.current);

  const activeEnter = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      activeButton();
    }
  };

  const onChange = (e: any) => {
    const value = e.target.value;
    inputText.current = value;
  };

  const activeButton = async () => {
    console.log("INPUT TARGET : ", inputText.current);

    const info = await fetchHuman(inputText.current);
    resultTarget.current = info;

    console.log("info ", info);
  };

  

  return (
    <>
      <Container>
        <SearchInput onChange={onChange} onKeyDown={(e) => activeEnter(e)} />
      </Container>
      {resultTarget.current ? (
        <SearchResults targetInfo={resultTarget} />
      ) : (
        <NoResult />
      )}
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
