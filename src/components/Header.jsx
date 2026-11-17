import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setUsers(data);
      } finally {
        setLoading(false);
      }
    };

    getposts();
  }, []);

  return (
    <>
      <h1>Posts</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ol>
          {users.map((user) => (
            <li key={user.id}>{user.title}</li>
          ))}
        </ol>
      )}
    </>
  );
}

export default Header;