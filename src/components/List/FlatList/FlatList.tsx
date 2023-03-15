import React from "react";

export interface Item {
  content: string;
  _id: number;
}

type FlatListProps = {
  data: any;
  renderItem: (item: Item) => React.ReactNode;
  style?: React.CSSProperties;
};

const FlatList = ({ data, renderItem, style }: FlatListProps) => {
  return (
    <div style={style}>
      {data.map((item: Item) => (
        <div key={item._id}>{renderItem(item)}</div>
      ))}
    </div>
  );
};

export default FlatList;
