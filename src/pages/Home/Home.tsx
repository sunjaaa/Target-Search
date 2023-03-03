import React, { useState } from "react";
import styled from "styled-components";
import { getTarget, getUsers } from "../../api/humanInfo";
import SearchInput from "../../components/Input/SearchInput";
import SearchResults from "./SearchResults";

const Home = () => {
  const [inputText, setInputText] = useState("");

  const activeEnter = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      activeButton();
    }
  };

  const activeButton = () => {
    console.log("INPUT TARGET : ", inputText);
    // getUsers(inputText);
    getTarget(inputText);
    // setInputText("");
  };

  return (
    <>
      <Container>
        <SearchInput
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => activeEnter(e)}
        />
      </Container>
      <SearchResults />
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
