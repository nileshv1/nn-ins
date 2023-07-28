import dynamic from "next/dynamic";

const Home = dynamic(() => import("./home/home"), { ssr: false });
export default Home;
