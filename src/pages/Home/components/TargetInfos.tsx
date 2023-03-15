import styled from "styled-components";
import FlatList from "@components/List/FlatList/FlatList";

export interface Item {
  content: string;
  _id: number;
}

export interface Props {
  targetInfo?: {
    name: string;
    img: string;
    card_infos: Array<Item>;
  };
  isLoading?: boolean;
}

const TargetInfos = ({ targetInfo }: Props) => {
  console.log(targetInfo);

  const targetName = targetInfo?.name ?? "존재하지 않는 이름입니다.";

  const img = targetInfo?.img ?? "http://folo.co.kr/img/gm_noimage.png";

  const data = targetInfo?.card_infos;

  const renderItemHandler = (item: Item) => {
    return <Description>{item.content}</Description>;
  };

  return (
    <Container>
      <Box>
        <Title>{targetName}</Title>
        <CardContainer>
          <CardBox>
            <Img src={img} />
            <ListContainer>
              <FlatList data={data} renderItem={renderItemHandler} />
            </ListContainer>
          </CardBox>
        </CardContainer>
        <SubContent>
          <Description>content</Description>
        </SubContent>
      </Box>
    </Container>
  );
};

export default TargetInfos;

const Container = styled.div`
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

const ListContainer = styled.div`
  border-width: 2px;
  border-color: white;
  border-style: solid;
  margin-right: 16px;
  border-radius: 4px;
  width: 100%;
`;

const Box = styled.div`
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

const CardContainer = styled.div`
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

const CardBox = styled.div`
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
