import React from "react";
import styled from "styled-components";

export interface Props {
  data: any;
}

const FlatList = ({ data }: Props) => {
  return (
    <main className="product">
      <ul className="product-list">
        {data.map((element: any) => (
          <Card key={data.id}>{element}</Card>
        ))}
      </ul>
    </main>
  );
};

export default FlatList;

const Card = styled.div`
  color: white;
  width: 500;
  height: 600;
`;
