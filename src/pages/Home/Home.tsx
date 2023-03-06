import React, { useState } from "react";
import styled from "styled-components";
import SearchInput from "../../components/Input/SearchInput";
import { fetchHuman, useHuman } from "../../hooks/useHuman";
import NoResult from "./NoResult";
import SearchResults from "./SearchResults";

const Home = () => {
  const [inputText, setInputText] = useState("");

  const [infos, setInfos] = useState();

  console.log(infos);

  const activeEnter = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      activeButton();
    }
  };

  const activeButton = async () => {
    console.log("INPUT TARGET : ", inputText);
    const info = await fetchHuman(inputText);
    setInfos(info);
    console.log("111", info);

    console.log("main page human.targetInfo", info.name);
  };

  // console.log(infos);

  return (
    <>
      <Container>
        <SearchInput
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => activeEnter(e)}
        />
      </Container>
      {infos ? <SearchResults targetInfo={infos} /> : <NoResult />}
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
