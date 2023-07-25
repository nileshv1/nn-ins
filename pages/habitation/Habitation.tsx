import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import classes from "../../styles/habitation/habitation.module.scss";
import Image from "next/image";

const Habitation: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card
            sx={{
              bgcolor: "initial",
              boxShadow: "none",
            }}
          >
            <CardMedia
              component="img"
              alt="habitation image"
              image="/images/policybanner.png"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Benefit from comprehensive car insurance for your private or
                professional car, with the best covers and at an
                ultra-competitive price!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <div className={classes.info_section}>
        <Grid container spacing={2} alignItems="center" sx={{ px: 2 }}>
          <Grid item xs={12}>
            <Typography variant="body2" className={classes.text_style}>
              Compose your ideal home insurance policy
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <Image
              src="/images/calculation.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="body2"
              className={classes.text_style}
              sx={{ fontSize: 12 }}
            >
              I make an online simulation
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              size="medium"
              color="success"
              sx={{ width: 115 }}
            >
              Simulation
            </Button>
          </Grid>

          <Grid item xs={2}>
            <Image
              src="/images/calendar.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="subtitle1"
              className={classes.text_style}
              sx={{ fontSize: 12 }}
            >
              Make an appointment with a consultant
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              size="medium"
              color="warning"
              sx={{ width: 115 }}
            >
              Rendezvous
            </Button>
          </Grid>

          <Grid item xs={2}>
            <Image
              src="/images/mail.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="body2"
              className={classes.text_style}
              sx={{ fontSize: 12 }}
            >
              I would like to receive more information
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" size="medium" sx={{ width: 115 }}>
              Contact
            </Button>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Habitation;
