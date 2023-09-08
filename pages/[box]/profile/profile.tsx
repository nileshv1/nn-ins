import React, {useState} from 'react'
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import {Box, Typography, Button, FormGroup, FormControlLabel, Checkbox} from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTheme } from '@mui/material/styles';


const Profile = () => {
  const theme = useTheme();
  const themeprofile = createTheme({
    typography: {
      h6: {
        fontWeight: 'medium',
        fontSize:16
      },
      h5: {
        fontWeight: 550,
        fontSize: 20
      },
      h3:{
        fontWeight:550,
        fontSize: 25
      },
      h4:{
        fontSize:17,
        fontWeight: 550
      }
    },
  });
  const [checkbox, setCheckbox] = useState(false)
  const  handleCheckbox = () => {
    setCheckbox(!checkbox)
  }

  return (
    <ThemeProvider theme={themeprofile}>
    <Grid container 
        sx={{display:"flex" , justifyContent: "center"}}
        border="0px solid green">
        <Grid item xs={12} sm={6}>
          <Box sx={{display:"flex", justifyContent: "center", alignItems:"center", mb:4}} border="0px solid red">
              <IconButton aria-label="delete" size="large" sx={{ml:{xs:1, md:2}}}>
                  <ArrowBackIosNewIcon fontSize="inherit" />
              </IconButton>
              <Typography variant="h5" sx={{width:"100%", pl:{xs:4,sm:7,md:15}}} border="0px solid blue">Votre profil</Typography>
          </Box>
          <Box sx={{mb:4}} border="0px solid red">
            <Typography variant="h3" sx={{width:"100%", textAlign: 'left', ml:1}} border="0px solid blue">
              Votre profil professionnel
            </Typography>
          </Box>
          <Box sx={{mb:4}} border="0px solid red">
            <Typography variant="h6" sx={{width:"100%", textAlign: 'left', ml:1}} border="0px solid blue">
              Afin d`evaluer quelle assurance auto vous convient le mieux, indiquez ci-dessous votre profile professionnel.
            </Typography>
          </Box>
          <Box sx={{display:"flex", justifyContent: "space-between", mb:4, ml:1, px:{sx:0, md:6}}} border="0px solid red">
            <Box sx={{borderRadius: '10%', border:"2px solid #80808085", }} >
              <IconButton aria-label="delete" onClick={handleCheckbox} size="large" sx={{display:"flex", flexDirection: 'column', color:"#000000b8"}}>
                  <PersonOutlineIcon sx={{mb:1, fontSize:"84px", fontWeight:"normal",}} />
                  <Typography variant="h4" sx={{pl:2,pr:2}} border="0px solid blue">
                     Particulier
                  </Typography>
              </IconButton>
            </Box>
            <Box sx={{borderRadius: '10%', border:"2px solid #80808085",}} border="1px solid purple" >
              <IconButton aria-label="delete" size="large" sx={{display:"flex", flexDirection: 'column', color:"#000000b8"}}>
                  <WorkOutlineIcon sx={{mb:1, fontSize:"82px"}} />
                  <Typography variant="h4" sx={{pl:1,pr:1}} border="0px solid blue">
                     Professionnel
                  </Typography>
              </IconButton>
            </Box>
          </Box>
          {checkbox ?
          <Box sx={{ml:1,mr:{xs:4,sm:14,md:12}, mb:4}}  border="0px solid blue">
              <FormGroup>
                <FormControlLabel control={<Checkbox size="large" sx={{}} />} label="Vous etes un fonctionnaire Europeen" />
                <FormControlLabel control={<Checkbox size="large" sx={{}} />} label="Un membre de votre famille au premier degre travaille en tant qu independent" />
              </FormGroup>
          </Box>:
          <></>}
          <Box sx={{display:"flex", justifyContent: "flex-end"}}>
            <Button
                variant="contained"
                color="primary"
                size="small"
                type="submit"
                sx={{
                  px: 3,
                  pb: 1,
                  pt:2,
                  backgroundColor:theme.palette.primary.light,
                  ":hover": {
                    bgcolor: theme.palette.primary.main,
                  },
                }}
              >
                Suivant
            </Button>

          </Box>
        </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default Profile