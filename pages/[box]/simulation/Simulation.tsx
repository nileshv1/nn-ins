import React from "react";
import {
  Box,
  Grid,
  InputLabel,
  TextField,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CustomModal from "@/components/Modal/CustomModal";
import Link from "next/link";
import { ROUTE_PATHS } from "@/constants/constants";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useTheme } from "@mui/material/styles";
import Banner from "@/components/Banner";
import { policybanner } from "@/public/images";

const Simulation: React.FC = () => {
  const router = useRouter();
  const { box } = router.query;
  const theme = useTheme();
  const { t } = useTranslation();
  const [userInput, setUserInput] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (e: any) => {
    setUserInput(e.target.value);
  };

  const handleClickNext = () => {
    router.push(`/${box}${ROUTE_PATHS.CARDETAILS}`);
    setUserInput("");
  };
  const handleIcon = (open: boolean) => {
    setOpen(!open);
  };

  return (
    <Grid container>
      <Banner
        image={policybanner}
        imageText={t("")}
        alt={t("bannerImageText")}
      />

      <Grid container item sx={{ py: 4, px: { md: 3, xs: 1 } }}>
        <Grid item sx={{ pb: 2 }} xs={12}>
          <Typography variant="h4">{t("simulationHeaderText")}</Typography>
          <Divider
            color={theme.palette.primary.main}
            sx={{ height: 3.5, width: "5rem", mt: 0.5 }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel
            htmlFor="component-simple"
            sx={{ fontSize: "16px", color: "text.secondary" }}
          >
            {t("simulationContentLabel")}
            <InfoOutlinedIcon onClick={() => handleIcon(open)} />
            {open && <CustomModal open={open} setOpen={setOpen} />}
          </InputLabel>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="ABCDEFG1234567890"
            sx={{ pt: 1 }}
            value={userInput}
            onChange={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "end", mt: 2 }}
        >
          <Button
            variant="contained"
            sx={{
              px: { xs: 7, md: 9 },
              backgroundColor: theme.palette.primary.light,
              ":hover": {
                bgcolor: theme.palette.primary.main,
              },
            }}
            disabled={!userInput}
            onClick={handleClickNext}
          >
            {t("simulationNextBtn")}
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "end", mt: 2 }}
        >
          <Link href={`/${box}${ROUTE_PATHS.YOURCAR}`}>
            <Button
              variant="outlined"
              sx={{
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                ":hover": {
                  borderColor: theme.palette.primary.main,
                },
              }}
            >
              {t("simulationWithoutChassisBtn")}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Simulation;
