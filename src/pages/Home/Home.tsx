import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SearchInput from "../../components/Input/SearchInput";
import ShowTargetInfo from "./components/ShowTargetInfo";

import Snipper from "react-spinner-material";

import { fetchHuman } from "../../hooks/useHuman";

const Home = () => {
  const [result, setResult] = useState();

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
    console.log("INPUT TARGET : ", inputText.current);
    const info = await fetchHuman(inputText.current);
    setResult(info);
  };

  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };

  return (
    <Container>
      <InputBox>
        <SearchInput onChange={onChange} onKeyDown={activeEnter} />
      </InputBox>
      {/* <div className="App">
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <div style={{ backgroundColor: "white" }}>{response}</div>
      </div>{" "} */}

      <ShowTargetInfo targetInfo={result} />
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

const Empty = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  background-color: #000000;
  padding-left: 16px;
  padding-right: 16px;
  border-top-style: solid;
  border-width: 1px;
  border-top-color: #ffffff;
`;
