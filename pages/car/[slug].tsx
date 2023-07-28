import React , {useEffect}from "react";
import { useRouter } from "next/router";
import { Button, Container } from "@mui/material";
import { ROUTE_PATHS } from "@/constants/constants";
import Link from "next/link";
import {
  Paper,
  Box,
  Typography,
  FormControl,
  OutlinedInput,
  Divider,
  FormHelperText,
} from "@mui/material";
// import variables from '../../styles/variables.module.scss'
import Grid from "@mui/material/Unstable_Grid2";
import { Vehicle_Details } from "../../constants/constants";
import { useState } from "react";
import Dropdown from "@/components/dropdown/dropdown";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useForm, Controller } from "react-hook-form";
import Banner from "@/components/Banner";
import { policybanner } from "@/public/images";
import { BANNER_IMAGE_TEXT } from "@/constants/text_constants";
import { useTranslation } from "next-i18next";

const Car: React.FC = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const router = useRouter();
  const slug = router.query.slug;
  const { t } = useTranslation();
  
  useEffect(()=>{
    if(slug=="YourCarDetails"){
      setToggle(true)
    }else if( slug=="YourCar"){
      setToggle(false)
    }
  })
  const handleContinue = () => {
    router.push(ROUTE_PATHS.MOTOR);
  };
  const [toggle, setToggle] = useState(false);
  
  const [number, setNumber] = useState("");
  
  const theme = createTheme({
    typography: {
      subtitle2: {
        fontSize: 16,
        fontWeight: 550,
      },
    },
    // palette: {
    //   salmon: theme.palette.augmentColor({
    //     color: {
    //       main: '#FF5733',
    //     },
    //     name: 'salmon',
    //   }),
    // },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box border="0px solid green">
        <Banner image={policybanner} imageText="" />
        <Box
          sx={{ mx: "auto", width: { xs: "90%", md: "100%" } }}
          border="0px solid green"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container border="0px solid pink">
              <Grid md={6} mdOffset={3} xs={12}>
                <Link href={ROUTE_PATHS.SIMULATION}>
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
              <Grid md={6} mdOffset={3} xs={12} sx={{ mb: 4 }}>
                <Typography variant="h6">{t("yourCar")} :</Typography>
                <Divider color="#20ea3c" sx={{ height: 1.8, width: "60px" }} />
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
                <Grid md={6} xs={5}>
                  <Typography variant="body1" gutterBottom>
                  {t("fuel")}
                  </Typography>
                </Grid>
                {toggle ? (
                  <Grid md={6} xs={7}>
                    <Typography
                      variant="subtitle2"
                      sx={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      {t("essence")}
                    </Typography>
                  </Grid>
                ) : (
                  <Grid md={6} xs={12}>
                    <Dropdown
                      options={Vehicle_Details.Fuels}
                      label="fuel"
                      register={register}
                      required
                      errors={errors}
                    />
                  </Grid>
                )}
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
                <Grid md={6} xs={5}>
                  <Typography variant="body1" gutterBottom>
                  {t("brand")}
                  </Typography>
                </Grid>
                {toggle ? (
                  <Grid md={6} xs={7}>
                    <Typography
                      variant="subtitle2"
                      sx={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      {t("volkswagen")}
                    </Typography>
                  </Grid>
                ) : (
                  <Grid md={6} xs={12}>
                    <Dropdown
                      options={Vehicle_Details.Fuels}
                      label="brand"
                      register={register}
                      required
                      errors={errors}
                    />
                  </Grid>
                )}
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
                <Grid md={6} xs={5}>
                  <Typography variant="body1" gutterBottom>
                  {t("model")}
                  </Typography>
                </Grid>
                {toggle ? (
                  <Grid md={6} xs={7}>
                    <Typography
                      variant="subtitle2"
                      sx={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      {t("golf")}
                    </Typography>
                  </Grid>
                ) : (
                  <Grid md={6} xs={12}>
                    <Dropdown
                      options={Vehicle_Details.Fuels}
                      label="model"
                      register={register}
                      required
                      errors={errors}
                    />
                  </Grid>
                )}
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
                <Grid md={6} xs={5}>
                  <Typography variant="body1" gutterBottom>
                  {t("type")}
                  </Typography>
                </Grid>
                {toggle ? (
                  <Grid md={6} xs={7}>
                    <Typography
                      variant="subtitle2"
                      sx={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      {t("tsi")}
                    </Typography>
                  </Grid>
                ) : (
                  <Grid md={6} xs={12}>
                    <Dropdown
                      options={Vehicle_Details.Fuels}
                      label="type"
                      register={register}
                      required
                      errors={errors}
                    />
                  </Grid>
                )}
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
                <Grid md={6} xs={12}>
                  <Typography variant="body1" gutterBottom>
                  {t("yearsOfConstruction")}
                  </Typography>
                </Grid>
                <Grid md={6} xs={12}>
                  <Dropdown
                    options={Vehicle_Details.Fuels}
                    label="construction"
                    register={register}
                    required
                    errors={errors}
                  />
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
                <Grid md={6} xs={12}>
                  <Typography variant="body1" gutterBottom>
                    {t("initilaRegisteration")}
                  </Typography>
                </Grid>
                <Grid md={6} xs={12}>
                  <Dropdown
                    options={Vehicle_Details.Years}
                    label="years"
                    register={register}
                    required
                    errors={errors}
                  />
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
                <Grid md={7} xs={12}>
                  <Typography variant="body1">
                  {t("invoiceValue")}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {t("discounts")}
                  </Typography>
                </Grid>
                <Grid
                  md={5}
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "flex-start", md: "flex-end" },
                  }}
                >
                  <Typography component="span">&euro;</Typography>
                  <FormControl
                    component="span"
                    sx={{ width: "150px", ml: 2 }}
                    variant="outlined"
                  >
                    <OutlinedInput
                      // error={!number}
                      id="outlined-adornment-weight"
                      aria-describedby="outlined-weight-helper-text"
                      type="number"
                      sx={{ height: 32 }}
                      inputProps={{
                        "aria-label": "weight",
                        min: 2000,
                        max: 157300,
                      }}
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      // helperText="Some important text"
                    />
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
                <Grid md={8} xs={12}>
                  <Typography variant="body1" gutterBottom>
                    {t("dateOfPurchase")}
                  </Typography>
                </Grid>
                <Grid
                  md={4}
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "flex-start", md: "flex-end" },
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker slotProps={{ textField: { size: "small" } }} />
                  </LocalizationProvider>
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
                      backgroundColor: "#55B862",
                      ":hover": {
                        bgcolor: "#55B862",
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

export default Car;
