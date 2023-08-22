import dynamic from "next/dynamic";

const Home = dynamic(() => import("./[box]"), { ssr: false });
export default Home;
