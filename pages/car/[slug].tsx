import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Container, MenuItem, Select } from "@mui/material";
import { ROUTE_PATHS } from "@/constants/constants";
import styles from "../../styles/variables.module.scss";
import Link from "next/link";
import InfoIcon from '@mui/icons-material/Info';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
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
import Banner from "@/components/Banner";
import { policybanner } from "@/public/images";
import { BANNER_IMAGE_TEXT } from "@/constants/text_constants";
import { useTranslation } from "next-i18next";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classes from "../../styles/slug/slug.module.scss";

const schema = yup.object().shape({
  fuel: yup.string().required("Fuel is required"),
  brand: yup.string().required("Brand is required"),
  model: yup.string().required("Model is required"),
  type: yup.string().required("Type is required"),
  construction: yup.string().required("Construction is required"),
  registration: yup.string().required("Registration is required"),
  number1: yup
  .number()
    .typeError("Please enter a valid number")
    .required("This field is required")
    .min(2000, "Minimum value is 2000")
    .max(157300,"maximum value is 157300")
});

const Car: React.FC = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm({ resolver: yupResolver(schema) });

  const scrollToTop = () => {
    window.scroll(0, 0);
  };

  useEffect(() => {
    if (slug == "YourCarDetails") {
      setToggle(true);
    } else if (slug == "YourCar") {
      setToggle(false);
    }
  }, []);
  const onSubmit = (data:any) => {
    router.push(ROUTE_PATHS.FINAL);
    // console.log(data);
  };
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
    scrollToTop();
    console.log(open)
  };

  const theme = createTheme({
    typography: {
      subtitle2: {
        fontSize: 16,
        fontWeight: 550,
      },
      h6:{
        fontWeight: "bold"
      },
      h5:{
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
        <Grid
          sx={{ mx: "auto", width: { xs: "90%", md: "100%" } }}
          border="0px solid green"
          container
          justifyContent="center"
          alignItems="start"
        >
          <Grid 
          xs={10} sm={5} md={4} lg={3} 
          className={open ? classes.popup1 : classes.popupHide}
          sx={{ sm:{mb:8}, md:{mb:12}}}>
          <HighlightOffIcon className={classes.close} onClick={handleClick}/>
          <Typography variant="h5">{t("invoiceValuePopup")}</Typography>
          <Typography variant="body1">{t("popup1")}</Typography>
          <Typography variant="body1">{t("popup2")}</Typography>
          </Grid>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container border="0px solid pink" className={open ? classes.detailsInfoBlur : ""}>
              <Grid md={6} mdOffset={1} xs={12}>
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
              <Grid md={6} mdOffset={1} xs={12} sx={{ mb: 4 }}>
                <Typography variant="h6">{t("yourCar")} :</Typography>
                <Divider
                  color={styles.primaryColor}
                  sx={{ height: 1.8, width: "60px" }}
                />
              </Grid>
              <Grid
                md={10}
                mdOffset={1}
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
                      id="fuel"
                      name="fuel"
                      errors={errors}
                      control={control}
                    />
                  </Grid>
                )}
              </Grid>
              <Grid
                md={10}
                mdOffset={1}
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
                      id="brand"
                      name="brand"
                      errors={errors}
                      control={control}
                    />
                  </Grid>
                )}
              </Grid>
              <Grid
                md={10}
                mdOffset={1}
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
                      id="model"
                      name="model"
                      errors={errors}
                      control={control}
                    />
                  </Grid>
                )}
              </Grid>
              <Grid
                md={10}
                mdOffset={1}
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
                      id="type"
                      name="type"
                      errors={errors}
                      control={control}
                    />
                  </Grid>
                )}
              </Grid>
              <Grid
                md={10}
                mdOffset={1}
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
                    id="construction"
                    name="construction"
                    errors={errors}
                    control={control}
                  />
                </Grid>
              </Grid>
              <Grid
                md={10}
                mdOffset={1}
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
                    options={Vehicle_Details.Fuels}
                    label="registration"
                    id="registration"
                    name="registration"
                    errors={errors}
                    control={control}
                  />
                </Grid>
              </Grid>
              <Grid
                md={10}
                mdOffset={1}
                xs={12}
                container
                sx={{ mb: 2 }}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                border="0px solid orange"
              >
                <Grid md={7} xs={12}>
                  <Typography variant="body1">{t("invoiceValue")}
                    <InfoIcon className={classes.infoIcon} onClick={handleClick}/>
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
                    <Controller
                      name="number1"
                      // defaultValue=""
                      control={control}
                      render={({ field }) => (
                        <OutlinedInput
                          {...field}
                          id="outlined-adornment-weight"
                          aria-describedby="outlined-weight-helper-text"
                          type="number"
                          sx={{ height: 32 }}
                          error={Boolean(errors.number1)}
                        />
                      )}
                    />
                    {errors.number1 && (
                      <FormHelperText error>
                        {errors.number1.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              {/* <Grid
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
              </Grid> */}
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
                <Grid md={10} mdOffset={12} xs={12}>
               
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    type="submit"
                    sx={{
                      px: 9,
                      backgroundColor: styles.primaryColor,
                      ":hover": {
                        bgcolor: styles.primaryColor,
                      },
                    }}
                  >
                    {t("next")}
                  </Button>
                 
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Car;
