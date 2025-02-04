import React, { useCallback, useState, memo } from "react";

const ListItem = memo(({ onDelete, data }) => {
  console.log("ListItem");

  return (
    <li key={data.id}>
      {data.text}{" "}
      <button onClick={() => onDelete(data.id)}>Delete: {data.id}</button>
    </li>
  );
});

const List = memo(({ onDelete, data }) => {
  console.log("List");
  // console.log("ahad", data);

  return (
    <>
      <ul>
        {data.map((item) => (
          <ListItem key={item.id} data={item} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
})

const OptimizedListRenderingComponent = () => {
  const [data, setData] = useState([
    { id: 1, text: "India" },
    { id: 2, text: "Bang" },
    { id: 3, text: "China" },
    { id: 4, text: "Japan" },
  ]);
  const [data1, setData1] = useState("");

    const onDelete = useCallback((id) => {
      console.log("Parent");
      setData((prevData) => prevData.filter((item) => item.id !== id));
    }, [setData]);
//   const onDelete = (id) => {
//     console.log("Parent");
//     setData((prevData) => prevData.filter((item) => item.id !== id));
//   };

  return (
    <>
      <div>OptimizedListRenderingComponent</div>
      <input
        type="text"
        value={data1}
        onChange={(e) => setData1(e.target.value)}
      />
      <div>
        <List data={data} onDelete={onDelete} />
      </div>
    </>
  );
};

export default OptimizedListRenderingComponent;
