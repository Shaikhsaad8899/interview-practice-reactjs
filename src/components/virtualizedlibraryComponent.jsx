import React from "react";
import { FixedSizeList as List } from "react-window";

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
  <div style={{ ...style, padding: 10, borderBottom: "1px solid #ddd", background: index % 2 ? "#f9f9f9" : "#fff" }}>
    {items[index]}
  </div>
);

const VirtualizedList = () => {
  return (
    <div style={{ width: "300px", height: "400px", border: "1px solid #ddd", margin: "auto", overflow: "hidden" }}>
      <h3 style={{ textAlign: "center", margin: "10px 0" }}>Virtualized List</h3>
      <List height={350} itemCount={items.length} itemSize={35} width={"100%"}>
        {Row}
      </List>
    </div>
  );
};

export default VirtualizedList;
