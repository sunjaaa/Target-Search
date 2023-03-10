import { helper } from "@utils/index";
import styled from "styled-components";

export interface TargetInfoItem {
  name?: string;
  brithDate?: string;
  occupation?: string;
  agency?: string;
  content?: string;
  table?: string;
  img?: string;
}

export interface Props {
  targetInfo?: Array<TargetInfoItem>;
}

const ShowTargetInfo = ({ targetInfo }: Props) => {
  if (!targetInfo) {
    return (
      <NoResult>
        <TextBox>
          <Title>검색 결과가 없습니다</Title>
        </TextBox>
      </NoResult>
    );
  } else {
    const targetName = targetInfo[0]?.name;

    const content = targetInfo[0].content ?? "콘텐츠 없음";
    const description = helper.removeCommaWithNewLines(content);

    const table = targetInfo[0].table ?? "테이블 없음";

    const img = targetInfo[0].img ?? "이미지 없음";

    console.log("targetInfo", targetInfo);

    return (
      <Container>
        <TextBox>
          <Title>{targetName}</Title>
          <InfoContainer>
            <InfoBox>
              <Img src={img} />
              <DescriptionTiny>
                <Description> 출생 : {table}</Description>
                <Description> 거주지 : {table}</Description>
                <Description> 국적 : {table}</Description>
                <Description> 배우자 : {table}</Description>
                <Description> 배우자 : {table}</Description>
                <Description> 배우자 : {table}</Description>
                <Description> 배우자 : {table}</Description>
                <Description> 배우자 : {table}</Description>
              </DescriptionTiny>
            </InfoBox>
          </InfoContainer>
          <SubContent>
            <Description>{description}</Description>
          </SubContent>
        </TextBox>
      </Container>
    );
  }
};

export default ShowTargetInfo;

const Container = styled.div`
  display: flex;
  flex: 1;
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
  border-width: 2px;
  border-color: white;
  border-style: solid;
  color: white;
  border-radius: 4px;
`;

const SubTitle = styled.h4`
  border-width: 2px;
  border-color: white;
  color: white;
  text-align: center;
  margin-top: 1px;
  margin-bottom: 2px;
`;

const Description = styled.h4`
  text-align: left;
  margin-left: 8px;
  margin-right: 8px;
  color: white;
`;

const DescriptionTiny = styled.div`
  border-width: 2px;
  border-color: white;
  border-style: solid;
  margin-right: 16px;
  border-radius: 4px;
  height: 400px;
  overflow: scroll;
`;

const TextBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const NoResult = styled.div`
  display: flex;
  height: 100vh;
  background-color: #000000;
  border-top-style: solid;
  border-bottom-style: solid;
  border-width: 1px;
  border-top-color: #ffffff;
  border-bottom-color: #ffffff;
  margin-bottom: 19.92px;
`;

const Img = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 4px;
  margin-left: 16px;
  margin-right: 16px;
  border-width: 2px;
  border-color: white;
  border-style: solid;
  color: white;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 4px;
  border-width: 2px;
  border-color: white;
  border-style: solid;
  color: white;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const SubContent = styled.div`
  background-color: #000000;
  border-top-style: solid;
  border-bottom-style: solid;
  border-width: 1px;
  border-top-color: #ffffff;
  border-bottom-color: #ffffff;
  margin-bottom: 19.92px;
`;
