import { Container } from "@mui/material";
import variables from "../../styles/variables.module.scss";
import { useRouter } from "next/router";
import { ROUTE_PATHS } from "@/constants/constants";

const Home = () => {
  const router = useRouter();
  const handleContinue = () => {
    router.push(ROUTE_PATHS.CAR);
  };

  return (
    <Container>
      <h1 style={{ color: variables.primaryColor }}>hello Next js...</h1>
      <button onClick={handleContinue}>Continue</button>
    </Container>
  );
};

export default Home;
