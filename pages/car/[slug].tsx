import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Container } from "@mui/material";
import { ROUTE_PATHS } from "@/constants/constants";
import styles from "../../styles/variables.module.scss";
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
import { Formik } from "formik";
import * as Yup from "yup";

const Car: React.FC = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const { t } = useTranslation();
  // const [values, setValues] = useState("");
  const [fuel, setFuel] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [construction, setCOnstruction] = useState("");
  const [registration, setRegistration] = useState("");
  const [number1, setNumber] = useState("");
  const validationSchema = Yup.object({
    fuel: Yup.string().required("Required"),
    brand: Yup.string().required("Required"),
    model: Yup.string().required("Required"),
    type: Yup.string().required("Required"),
    construction: Yup.string().required("Required"),
    registration: Yup.string().required("Required"),
    number1: Yup.number()
      .required("Required")
      .max(157300, "Maximum should be 157300")
      .min(2000, "Minimum should be 2000"),
  });
  console.log(number1, "number1");

  useEffect(() => {
    if (slug == "YourCarDetails") {
      setToggle(true);
    } else if (slug == "YourCar") {
      setToggle(false);
    }
  }, []);
  const handleContinue = () => {
    router.push(ROUTE_PATHS.MOTOR);
  };
  const [toggle, setToggle] = useState(false);

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
          <Formik
            initialValues={{
              fuel: "",
              brand: "",
              model: "",
              type: "",
              construction: "",
              registration: "",
              number1: "",
            }}
            validationSchema={validationSchema}
            validateOnChange={true}
            validateOnBlur={true}
            enableReinitialize={true}
            onSubmit={async (values) => {
              // values && postData(values)
              // scrollToTop()
              console.log(values);
            }}
          >
            {({
              values,
              errors,
              handleChange,
              handleBlur,
              touched,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
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
                    <Divider
                      color={styles.primaryColor}
                      sx={{ height: 1.8, width: "60px" }}
                    />
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
                          id="fuel"
                          name="fuel"
                          val={values.fuel}
                          handleChange={handleChange}
                        />
                        {errors.fuel && touched.fuel && (
                          <Typography
                            variant="body1"
                            color="red"
                            sx={{ mx: 2, fontSize: "14px" }}
                          >
                            {errors.fuel}
                          </Typography>
                        )}
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
                          id="brand"
                          name="brand"
                          val={values.brand}
                          handleChange={handleChange}
                        />
                        {errors.brand && touched.brand && (
                          <Typography
                            variant="body1"
                            color="red"
                            sx={{ mx: 2, fontSize: "14px" }}
                          >
                            {errors.brand}
                          </Typography>
                        )}
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
                          id="model"
                          name="model"
                          val={values.model}
                          handleChange={handleChange}
                        />
                        {errors.model && touched.model && (
                          <Typography
                            variant="body1"
                            color="red"
                            sx={{ mx: 2, fontSize: "14px" }}
                          >
                            {errors.model}
                          </Typography>
                        )}
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
                          id="type"
                          name="type"
                          val={values.type}
                          handleChange={handleChange}
                        />
                        {errors.type && touched.type && (
                          <Typography
                            variant="body1"
                            color="red"
                            sx={{ mx: 2, fontSize: "14px" }}
                          >
                            {errors.type}
                          </Typography>
                        )}
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
                        id="construction"
                        name="construction"
                        val={values.construction}
                        handleChange={handleChange}
                      />
                      {errors.construction && touched.construction && (
                        <Typography
                          variant="body1"
                          color="red"
                          sx={{ mx: 2, fontSize: "14px" }}
                        >
                          {errors.construction}
                        </Typography>
                      )}
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
                        label="registration"
                        id="registration"
                        name="registration"
                        val={values.registration}
                        handleChange={handleChange}
                      />
                      {errors.registration && touched.registration && (
                        <Typography
                          variant="body1"
                          color="red"
                          sx={{ mx: 2, fontSize: "14px" }}
                        >
                          {errors.registration}
                        </Typography>
                      )}
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
                          id="outlined-adornment-weight"
                          aria-describedby="outlined-weight-helper-text"
                          type="number"
                          sx={{ height: 32 }}
                          // label="number1"
                          // id="number1"
                          name="number1"
                          value={values.number1}
                          onChange={handleChange}
                        />
                        {errors.number1 && touched.number1 && (
                          <Typography
                            variant="body1"
                            color="red"
                            sx={{ mx: 2, fontSize: "14px" }}
                          >
                            {errors.number1}
                          </Typography>
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
                    <Grid md={8} mdOffset={7} xs={12}>
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
            )}
          </Formik>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Car;
