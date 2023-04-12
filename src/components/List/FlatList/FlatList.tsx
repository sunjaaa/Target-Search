import React from "react";

export interface Item {
  content: string;
  _id: number;
}

type FlatListProps = {
  data: any;
  renderItem: (item: Item) => React.ReactNode;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
};

const FlatList = ({
  data,
  renderItem,
  style,
  containerStyle,
}: FlatListProps) => {
  return (
    <div style={containerStyle}>
      {data.map((item: Item) => (
        <div key={item._id} style={style}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};

export default FlatList;
