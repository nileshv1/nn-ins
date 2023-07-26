import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { ROUTE_PATHS } from "@/constants/constants";
import Grid from "@mui/material/Unstable_Grid2";
import classes from "../../styles/page.module.scss";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import { contenthome } from "@/public/images";
import { BANNER_IMAGE_TEXT } from "@/constants/text_constants";
import Dashboard from "../dashboard";

const Home = () => {
  const router = useRouter();
  const handleContinue = () => {
    router.push(ROUTE_PATHS.CAR);
  };

  return (
    <Container className={classes.home_container}>
      <Grid xs={12} sm={12} md={6} mdOffset={3}>
        <Header />
        <Banner image={contenthome} imageText={BANNER_IMAGE_TEXT} />
        <Dashboard />
      </Grid>
    </Container>
  );
};

export default Home;
