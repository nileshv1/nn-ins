import React, { useEffect, useState } from "react";

const CommentsPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`/api/comments`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);

  // const fetchComments = async () => {
  //   const response = await fetch("/api/comments");
  //   const data = await response.json();
  //   setUsers(data);
  //   console.log(data);
  // };

  return (
    <>
      index
      {/* <button onClick={fetchComments}>Load comments</button> */}
      <h1>List of Users</h1>
      {users && users.length > 0 ? (
        users.map((user, index) => (
          <ul key={`user${index}`}>
            <li>{user["title"]}</li>
          </ul>
        ))
      ) : (
        <p>No users found</p>
      )}
    </>
  );
};

export default CommentsPage;
