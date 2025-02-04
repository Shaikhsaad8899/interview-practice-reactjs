import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FetchUsersAndPosts = () => {
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
        // // Fetch posts in parallel
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
    const consoleFunction = () => {
      console.log("Saad")
    }
    consoleFunction()
    const abc = setInterval(() => {
      consoleFunction()
    }, 100);
    const addEventListener = ("resize", window)
    return () => clearInterval(abc)
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Link to="/login" >Hoame</Link>
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

export default FetchUsersAndPosts;
