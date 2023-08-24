import dynamic from "next/dynamic";
console.log("Hi")
const Home = dynamic(() => import("./[box]"), { ssr: false });
export default Home;
