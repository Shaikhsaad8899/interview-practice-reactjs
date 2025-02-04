import React, { useState, useEffect, useRef, useCallback } from "react";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef(null);
  const lastItemRef = useRef(null);

  // Mock API fetch function
  const fetchData = async (page) => {
    if (loading) return;
    setLoading(true);
    
    setTimeout(() => {
      const newData = Array.from({ length: 10 }, (_, i) => `Item ${page * 10 + i + 1}`);
      setData((prev) => [...prev, ...newData]);
      setHasMore(newData.length > 0);
      setLoading(false);
    }, 100);
  };
  const observerCallback = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore) {
        setPage((prev) => prev + 1);
      }
    },
    [hasMore]
  );

  useEffect(() => {
    fetchData(page);
  }, [page]);

  useEffect(() => {
    if (lastItemRef.current) {
      observerRef.current = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: "100px",
        threshold: 1.0,
      });

      observerRef.current.observe(lastItemRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [data, observerCallback]);

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Infinite Scroll</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {data.map((item, index) => (
          <li
            key={index}
            style={{
              padding: "10px",
              margin: "5px 0",
              background: "#f3f3f3",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      <div ref={lastItemRef} style={{ height: "1px" }} />
    </div>
  );
};

export default InfiniteScroll;
