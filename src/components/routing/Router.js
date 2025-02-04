import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "../childComponents/Login";
import Dashboard from "../childComponents/Dashboard";
import OptimizedListRenderingComponent from "../WITHAUTH/OptimizedListRenderingComponent";
import SequentialAPIFetchnew from "../childComponents/SequentialAPIFetch";
import UsingUseFetch from "../childComponents/UsingUseFetch";
import InfiniteScroll from "../childComponents/InfiniteScroll";
import VirtualizedList from "../virtualizedlibraryComponent";

function RouterComponenent() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route index element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/virtualized-library-component" element={<VirtualizedList />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
        <Route
          path="/optimized-list"
          element={<OptimizedListRenderingComponent />}
        />
        <Route path="/customhookfetch" element={<UsingUseFetch />} />
        <Route path="/sequentialAPicall" element={<SequentialAPIFetchnew />} />
      </Routes>
    </Router>
  );
}

export default RouterComponenent;
