import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import { assurance_auto, contenthome, habitation } from "@/public/images";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import classes from "../../styles/page.module.scss";
import Grid from "@mui/material/Unstable_Grid2";
import {
  BANNER_IMAGE_TEXT,
  HEADER_INSURANCE,
  HOME_HEADER_TEXT,
} from "../../constants/text_constants";

const Home = () => {
  return (
    <Container className={classes.home_container}>
      <Grid xs={12} sm={12} md={6} mdOffset={3}>
        <Header />
        <Banner image={contenthome} imageText={BANNER_IMAGE_TEXT} />
        <Box sx={{ py: 4 }}>
          <h3>
            {HOME_HEADER_TEXT}
            <hr className={classes.horizontal_line} />
          </h3>
        </Box>
        <Box
          sx={{
            backgroundColor: "#98AFC7",
          }}
        >
          <Box className={classes.header_text}>{HEADER_INSURANCE}</Box>
          <Box className={classes.home_content}>
            <a href="habitation">
              <Image src={assurance_auto} alt="" width="116" height="117" />
            </a>
            <a href="/dashboard">
              <Image src={habitation} alt="" width="116" height="117" />
            </a>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default Home;
