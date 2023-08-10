import { ROUTE_PATHS } from "@/constants/constants";
import { assurance_auto, contenthome, habitation } from "@/public/images";

import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import classes from "../../styles/page.module.scss";
// import dynamic from "next/dynamic";
import Banner from "@/components/Banner";
import { Box } from "@mui/material";
import styles from "../../styles/variables.module.scss";
import { fetchAllUsers } from "../api/user/user";

// const Banner = dynamic(() => import("@/components/Banner"), { ssr: true });

const Home: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleContinue = () => {
    router.push(ROUTE_PATHS.HABITATION);
  };

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(Boolean);

  useEffect(() => {
    try {
      fetchAllUsers().then((data) => {
        setUsers(data.results);
      });
    } catch (err) {
      setError(true);
      console.log(err);
    }
  }, []);

  return (
    <Box>
      <Banner image={contenthome} imageText={t("bannerImageText")} />
      <Box sx={{ py: 4 }}>
        <Box className={classes.page_header_text}>
          {t("bannerImageText")}
          <hr className={classes.horizontal_line} />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: styles.homebgColor,
        }}
      >
        <Box className={classes.header_text}>{t("headerInsurance")}</Box>
        <Box className={classes.home_content}>
          <a onClick={handleContinue} className={classes.cursor} role="linkimg">
            <Image
              src={assurance_auto}
              alt="assuranceimg"
              width="116"
              height="117"
              priority={true}
            />
          </a>
          <a onClick={handleContinue} className={classes.cursor}>
            <Image
              src={habitation}
              alt="habitationimg"
              width="116"
              height="117"
              priority={true}
            />
          </a>
        </Box>
        <button disabled>Home</button>
      </Box>
      <h1>List of Users</h1>
      {users && users.length > 0 ? (
        users.map((user, index) => (
          <ul key={`user${index}`}>
            <li>{user["name"]}</li>
          </ul>
        ))
      ) : (
        <p>No users found</p>
      )}
    </Box>
  );
};

export default Home;
