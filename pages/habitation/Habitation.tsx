import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import classes from "../../styles/habitation/habitation.module.scss";
import Image from "next/image";
import {
  HABITATION_CARD_CONTENT,
  HABITATION_HEADING,
  HABITATION_SIMULATION_CONTENT,
  HABITATION_RENDEZVOUS_CONTENT,
  HABITATION_CONTACT_CONTENT,
  HABITATION_SIMULATION_BTN,
  HABITATION_RENDEZVOUS_BTN,
  HABITATION_CONTACT_BTN,
} from "@/constants/text_constants";

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
                {HABITATION_CARD_CONTENT}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <div className={classes.info_section}>
        <Grid container spacing={2} alignItems="center" sx={{ px: 2 }}>
          <Grid item xs={12}>
            <Typography variant="body2" className={classes.text_style}>
              {HABITATION_HEADING}
            </Typography>
            {/* <hr className="horizontal-line" /> */}
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
              {HABITATION_SIMULATION_CONTENT}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              size="medium"
              color="success"
              sx={{ width: 115 }}
              href="/simulation"
            >
              {HABITATION_SIMULATION_BTN}
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
              {HABITATION_RENDEZVOUS_CONTENT}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              size="medium"
              color="warning"
              sx={{ width: 115 }}
            >
              {HABITATION_RENDEZVOUS_BTN}
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
              {HABITATION_CONTACT_CONTENT}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" size="medium" sx={{ width: 115 }}>
              {HABITATION_CONTACT_BTN}
            </Button>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Habitation;
