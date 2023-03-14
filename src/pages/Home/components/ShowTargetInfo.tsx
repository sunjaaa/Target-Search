import { helper } from "@utils/index";
import Snipper from "react-spinner-material";
import styled from "styled-components";

export interface TargetInfoItem {
  name?: string;
  img?: string;
  content?: string;
  cardInfo1?: string;
  cardInfo2?: string;
  cardInfo3?: string;
  cardInfo4?: string;
  cardInfo5?: string;
  cardInfo6?: string;
  cardInfo7?: string;
  cardInfo8?: string;
  cardInfo9?: string;
  cardInfo10?: string;
}

export interface Props {
  targetInfo?: Array<TargetInfoItem>;
  isLoading?: boolean;
}

const ShowTargetInfo = ({ targetInfo, isLoading }: Props) => {
  if (targetInfo) {
    const targetName = targetInfo[1]?.name ?? "이름 없음";

    const img = targetInfo[1]?.img ?? "http://folo.co.kr/img/gm_noimage.png";

    const content =
      targetInfo[1]?.content ?? "해당 인물과 관련된 정보를 찾을 수 없습니다.";

    return (
      <Container>
        <TextBox>
          {isLoading === true ? (
            <Snipper
              color="white "
              stroke={10}
              radius={100}
              style={{ alignSelf: "center", marginTop: "20%" }}
            />
          ) : (
            <>
              <Title>{targetName}</Title>
              <InfoContainer>
                <InfoBox>
                  <Img src={img} />
                  <DescriptionTiny>
                    <Description>{targetInfo[0]?.cardInfo1}</Description>
                    <Description>{targetInfo[0]?.cardInfo2}</Description>
                    <Description>{targetInfo[0]?.cardInfo3}</Description>
                    <Description>{targetInfo[0]?.cardInfo4}</Description>
                    <Description>{targetInfo[0]?.cardInfo5}</Description>
                    <Description>{targetInfo[0]?.cardInfo6}</Description>
                    <Description>{targetInfo[0]?.cardInfo7}</Description>
                    <Description>{targetInfo[0]?.cardInfo8}</Description>
                    <Description>{targetInfo[0]?.cardInfo9}</Description>
                    <Description>{targetInfo[0]?.cardInfo10}</Description>
                  </DescriptionTiny>
                </InfoBox>
              </InfoContainer>
              <SubContent>
                <Description>{content}</Description>
              </SubContent>
            </>
          )}
        </TextBox>
      </Container>
    );
  }
  if (!targetInfo) {
    return (
      <Container>
        <TextBox>
          {isLoading === true ? (
            <Snipper
              color="white "
              stroke={10}
              radius={100}
              style={{ alignSelf: "center", marginTop: "20%" }}
            />
          ) : (
            <Title>검색 결과가 없습니다</Title>
          )}
        </TextBox>
      </Container>
    );
  } else {
    return <div />;
  }
};

export default ShowTargetInfo;

const Container = styled.div`
  display: flex;
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
  width: 100%;
`;

const TextBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Img = styled.img`
  border-radius: 4px;
  margin-left: 16px;
  margin-right: 16px;
  border-width: 2px;
  border-color: white;
  border-style: solid;
  color: white;
  width: 30%;
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
  height: 100vh;
`;
