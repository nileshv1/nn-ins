
import { Paper, Box, Typography, FormControl, InputLabel, Select, MenuItem, OutlinedInput, Divider } from '@mui/material';
// import variables from '../../styles/variables.module.scss'
import Grid from '@mui/material/Unstable_Grid2';
import { Vehicle_Details } from '../../constants/constants';
import { useState } from 'react';
import Dropdown from '@/components/dropdown/dropdown';

const Home = () => {
  const [fuel, setFuel] = useState("");
  console.log(fuel, "fuel")
  const handleChange = (event) => {
    setFuel(event.target.value)
  };
  return (<Paper>
    <Box sx={{ mx: 'auto', width: '100%' }} border="1px solid green">
      <Grid container border="1px solid pink">
        <Grid md={4} mdOffset={4} xs={12}>
          <Typography variant='h6'>Your Car :</Typography>
          <Divider className=""/>
        </Grid>
        <Grid md={4} mdOffset={4} xs={12}
          container sx={{mb: 2}}
          display="flex" justifyContent="space-between" alignItems="center" border="0px solid orange">
          <Grid md={5} xs={12}><Typography component='span' gutterBottom >Fuel</Typography></Grid>
          <Grid md={7} xs={12}>
            <Dropdown options={Vehicle_Details.Fuels} label="placeholder" />
          </Grid>
        </Grid>
        <Grid md={4} mdOffset={4} xs={12}
          container sx={{mb: 2}}
          display="flex" justifyContent="space-between" alignItems="center" border="0px solid orange">
          <Grid md={5} xs={12}><Typography component='span' gutterBottom >Brand</Typography></Grid>
          <Grid md={7} xs={12}>
            <Dropdown options={Vehicle_Details.Fuels} label="placeholder" />
          </Grid>
        </Grid>
        <Grid md={4} mdOffset={4} xs={12}
          container sx={{mb: 2}}
          display="flex" justifyContent="space-between" alignItems="center" border="0px solid orange">
          <Grid md={5} xs={12}><Typography component='span' gutterBottom >Model</Typography></Grid>
          <Grid md={7} xs={12}>
            <Dropdown options={Vehicle_Details.Fuels} label="placeholder" />
          </Grid>
        </Grid>
        <Grid md={4} mdOffset={4} xs={12}
          container sx={{mb: 2}}
          display="flex" justifyContent="space-between" alignItems="center" border="0px solid orange">
          <Grid md={5} xs={12}><Typography component='span' gutterBottom >Type</Typography></Grid>
          <Grid md={7} xs={12}>
            <Dropdown options={Vehicle_Details.Fuels} label="placeholder" />
          </Grid>
        </Grid>
        <Grid md={4} mdOffset={4} xs={12}
          container sx={{mb: 2}}
          display="flex" justifyContent="space-between" alignItems="center" border="0px solid orange">
          <Grid md={5} xs={12}><Typography component='span' gutterBottom >Annee de construction</Typography></Grid>
          <Grid md={7} xs={12}>
            <Dropdown options={Vehicle_Details.Fuels} label="placeholder" />
          </Grid>
        </Grid>

      </Grid>
    </Box>
  </Paper>)
};

export default Home;
