import Snipper from "react-spinner-material";
import styled from "styled-components";

export interface Props {
  color: string;
  stroke: number;
  radius: number;
  style: React.CSSProperties;
}

const CircleLoading = ({ color, stroke, radius, style, ...props }: Props) => {
  return (
    <Container>
      <Box>
        <Snipper color={color} stroke={stroke} radius={radius} style={style} />
      </Box>
    </Container>
  );
};

export default CircleLoading;

const Container = styled.div`
  height: 100vh;
  background-color: #000000;
  border-top-style: solid;
  border-bottom-style: solid;
  border-width: 1px;
  border-top-color: #ffffff;
  border-bottom-color: #ffffff;
`;

const Box = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
