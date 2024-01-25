// Data Fetching ?
// after component mount/ render / load on screen
import { useEffect, useState } from "react";
// useEffect(() => {}, []) // callback runs after initial mount
// data fetching thing --> asked in all the interviews
const endpoint = "https://jsonplaceholder.typicode.com/userss";

function LearningDataFetch() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  async function getUsers() {
    setIsLoading(true);
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      // store this inside state
      setUsers(data); //  component re-render again
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);
  if (isLoading) {
    return <h1>Loading ..... </h1>;
  }
  if (error.trim()) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default LearningDataFetch;
