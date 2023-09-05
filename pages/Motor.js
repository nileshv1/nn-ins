import Head from "next/head";

export default function Motor({listings }) {
  // const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);
  console.log("yep yep", listings);
  return (
    <>
      <h1>List of Users</h1>
      {listings && listings.length > 0 ? (
        listings.map((user, index) => (
          <ul key={`user${index}`}>
            <li>{user["title"]}</li>
          </ul>
        ))
      ) : (
        <p>No users found</p>
      )}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const listings = await res.json();

  return {
    props: {
      listings
    },
    revalidate: 1
  };
}


