import React, { Profiler, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FetchUsersAndPost = () => {
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!usersResponse.ok) {
          throw new Error("Failed to fetch users");
        }
        const usersData = await usersResponse.json();
        setData(usersData);

        const postsArray = [];
        for (const user of usersData) {
          const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
          if (!postsResponse.ok) {
            throw new Error(`Failed to fetch posts for user ${user.id}`);
          }
          const userPosts = await postsResponse.json();
          postsArray.push(...userPosts);
        }

        setPosts(postsArray);
        // // Fetch posts in parallel (alternative approach)
        // const postRequests = usersData.map((user) =>
        //   fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`).then(res => res.json())
        // );
        // const allPosts = await Promise.all(postRequests);
        // setPosts(allPosts.flat()); // Flatten the array of arrays
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // const consoleFunction = () => {
    //   console.log("Saad");
    // };

    // consoleFunction();

    // const abc = setInterval(() => {
    //   consoleFunction();
    // }, 100);

    // Example of adding an event listener (if needed)
    // window.addEventListener("resize", consoleFunction);

    // return () => {
    //   clearInterval(abc);
    //   // window.removeEventListener("resize", consoleFunction);
    // };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Link to="/login">Hoame</Link>
      <h2>Users</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h2>All Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

const onRenderCallback = (
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) => {
  console.log(`Profiler [${id}] - ${phase}`);
  console.log(`Actual render time: ${actualDuration.toFixed(2)}ms`);
  console.log(`Base render time: ${baseDuration.toFixed(2)}ms`);
  console.log(`Start time: ${startTime.toFixed(2)}ms, Commit time: ${commitTime.toFixed(2)}ms`);
};

const FetchUsersAndPosts = () => {
  return (
    // <Profiler id="FetchUsersAndPost" onRender={onRenderCallback}>
      <FetchUsersAndPost />
    // </Profiler>
  );
};

export default FetchUsersAndPosts;
