import React from "react";

type Item = {
  id: number;
  text: string;
};

type FlatListProps = {
  data: any;
  renderItem: (item: Item) => React.ReactNode;
  style?: React.CSSProperties;
};

const FlatList = ({ data, renderItem, style }: FlatListProps) => {
  return (
    <div style={style}>
      {data.map((item: any) => (
        <div key={item.id}>{renderItem(item)}</div>
      ))}
    </div>
  );
};

export default FlatList;
