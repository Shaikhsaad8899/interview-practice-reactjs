
import React from "react";
import UseFetch from "../customHooks/UseFetch";

const UsingUseFetch = () =>  { 
  const { data, error, loading } = UseFetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  return <div>{JSON.stringify(data)}</div>;
};

export default UsingUseFetch;
