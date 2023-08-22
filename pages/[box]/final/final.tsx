import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box,
  Typography,
  OutlinedInput,
  Divider,
  FormHelperText,
} from "@mui/material";
import { ROUTE_PATHS } from "@/constants/constants";
import styles from "../../../styles/variables.module.scss";
import Link from "next/link";
// import variables from '../../styles/variables.module.scss'
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Banner from "@/components/Banner";
import { policybanner } from "@/public/images";
import { useTranslation } from "next-i18next";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



const Find: React.FC = () => {
  const router = useRouter();
  const { box } = router.query;
  const { t } = useTranslation();
  const schema = yup.object().shape({
    assistance: yup.string().required(t("assistancerror")),
    kilometers: yup.string().required(t("kilometerserror")),
});
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    console.log(errors)
  }, []);
  const onSubmit = () => {
    console.log(errors);
    alert("Thanks!! You have fill the form.");
  };

  const theme = createTheme({
    typography: {
      subtitle2: {
        fontSize: 16,
        fontWeight: 550,
      },
      body1: {
        fontSize: 16,
      },
      body2:{
          fontSize:19
      },
      h6:{
        fontWeight: "bold"
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box border="0px solid green">
        <Banner
          image={policybanner}
          imageText=""
          alt="Man Driving Car Banner"
        />
        <Box
          sx={{ mx: "auto", width: { xs: "90%", md: "100%" } }}
          border="0px solid green"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container border="0px solid pink">
              <Grid md={10} mdOffset={1} xs={12}>
                <Link href={`/${box}/${ROUTE_PATHS.YOURCAR}`}>
                  <Button
                    startIcon={<ArrowBackIosIcon />}
                    sx={{
                      color: "grey",
                      textDecoration: "underline grey 0.08rem",
                    }}
                  >
                    {t("back")}
                  </Button>
                </Link>
              </Grid>
              <Grid md={10} mdOffset={1} xs={12} sx={{ mb: 4 }}>
                <Typography variant="h6">{t("yourCar")} :</Typography>
                <Divider
                  color={box =='INR'? `${styles.secondaryColor}` :`${styles.primaryColor}`}
                  sx={{ height: 1.8, width: "60px" }}
                />
              </Grid>
              <Grid
                md={10}
                mdOffset={1}
                xs={12}
                container
                sx={{ mb: 6 }}
                display="flex"
                alignItems="center"
                border="0px solid orange"
              >
                <Grid xs={12} sx={{ mb: 1 }}>
                  <Typography variant="body2" gutterBottom>
                    {t("assistance")}
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography variant="body1" sx={{ mb: 0.5 }}>
                    {t("radioq1")}
                  </Typography>
                  <FormControl>
                  <Controller
                    name="assistance"
                    control={control}
                    render={({ field }) => (
                    <RadioGroup
                    {...field}
                      row
                      style={{ gap: '37px' }}
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio size="small" />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio size="small" />}
                        label="No"
                      />
                    </RadioGroup>
                     )}
                     />
                      {errors.assistance && (
                      <FormHelperText error>
                        {errors.assistance.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                
              </Grid>
              <Grid
                md={10}
                mdOffset={1}
                xs={12}
                container
                sx={{ mb: 2 }}
                display="flex"
                alignItems="center"
                border="0px solid orange"
              >
                <Grid xs={12} sx={{ mb: 1 }}>
                  <Typography variant="body2" gutterBottom>
                    {t("kilometers")}
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography variant="body1" sx={{ mb: 0.5 }}>
                    {t("radioq2")}
                  </Typography>
                  <FormControl>
                  <Controller
                    name="kilometers"
                    control={control}
                    render={({ field }) => (
                    <RadioGroup
                    {...field}
                      name="row-radio-buttons-group"     
                    >
                      <FormControlLabel
                        value="Less than 7,500"
                        control={<Radio size="small" />}
                        label="Less than 7,500"
                      />
                      <FormControlLabel
                        value="Between 7,500 and 15,000"
                        control={<Radio size="small" />}
                        label="Between 7,500 and 15,000"
                      />
                      <FormControlLabel
                        value="Between 15,000 and 30,000"
                        control={<Radio size="small" />}
                        label="Between 15,000 and 30,000"
                      />
                      <FormControlLabel
                        value="More than 30,000"
                        control={<Radio size="small" />}
                        label="More than 30,000"
                      />
                    </RadioGroup>
                    )}
                    />
                    {errors.kilometers && (
                      <FormHelperText error>
                        {errors.kilometers.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>       
              </Grid>
              
              <Grid
                md={6}
                mdOffset={3}
                xs={12}
                container
                sx={{ mb: 2 }}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                border="0px solid orange"
              >
                <Grid md={8} mdOffset={7} xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    type="submit"
                    sx={{
                      px: 9,
                      backgroundColor: box =='INR'? `${styles.secondaryColor}` :`${styles.primaryColor}`,
                      ":hover": {
                        bgcolor: box =='INR'? `${styles.secondaryColor}` :`${styles.primaryColor}`,
                      },
                    }}
                  >
                    {t("next")}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Find;
