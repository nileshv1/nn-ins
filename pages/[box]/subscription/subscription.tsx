import React from "react";
import {
  Box,
  Typography,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Select,
  InputLabel,
  MenuItem,
  Switch,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const Subscription = () => {
  const theme = useTheme();
  const themesubscription = createTheme({
    typography: {
      h6: {
        fontWeight: 400,
        fontSize: 12,
      },
      h5: {
        fontWeight: 450,
        fontSize: 14,
      },
      h4: {
        fontSize: 15,
        fontWeight: 550,
      },
      h3: {
        fontWeight: 550,
        fontSize: 25,
      },
    },
  });
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <ThemeProvider theme={themesubscription}>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center" }}
        border="1px solid green"
      >
        <Grid item xs={12} sm={6} border="1px solid red">
          {/* //box1  */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="h4">Responsibilty civile (RC)</Typography>
              <Typography variant="h6">
                Service apres sinistre inclus
              </Typography>
            </Box>
            <Typography variant="h5">&euro; 446,13</Typography>
          </Box>

          {/* //box 2 */}
          <Box border="0px solid blue" sx={{ mt: 2 }}>
            <FormControl sx={{ width: "100%" }}>
              {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  border="0px solid red"
                >
                  <FormControlLabel
                    value="Mini-Omnium"
                    control={<Radio />}
                    label="Mini-Omnium"
                    sx={{
                      "& span": {
                        fontSize: "15px",
                        fontWeight: "550",
                      },
                    }}
                  />
                  <Typography variant="h5">&euro; 166,55</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  border="0px solid red"
                >
                  <FormControlLabel
                    value="Omnium"
                    control={<Radio />}
                    label="Omnium"
                    sx={{
                      "& span": {
                        fontSize: "15px",
                        fontWeight: "550",
                      },
                    }}
                  />

                  <Typography variant="h5">&euro; 747,43</Typography>
                </Box>
              </RadioGroup>
            </FormControl>
          </Box>

          {/* //box 3 */}
          <Box sx={{ mt: 3, ml: 4, width: "35%" }}>
            <Typography variant="h4" sx={{ mb: 1 }}>
              Franchies
            </Typography>
            <FormControl fullWidth>
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                placeholder="Franchies"
                onChange={handleChange}
                sx={{ height: 42 }}
              >
                <MenuItem value={10}>&euro; 400,00</MenuItem>
                <MenuItem value={20}>&euro; 500,00</MenuItem>
                <MenuItem value={30}>&euro; 600,00</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* box 4 */}
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">
              Prime basee sur la valeur facture
            </Typography>
            <Switch />
          </Box>

          {/* box 5 */}
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Switch />
            <Typography variant="h4">
              Pack Premium
            </Typography>
          </Box>


        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Subscription;
