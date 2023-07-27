import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import classes from "../../styles/page.module.scss";
import Image from "next/image";
import { closeIcon } from "@/public/images";
import {
  MODAL_TITLE,
  CONTENT_MODALP1,
  CONTENT_MODALP2,
  CONTENT_MODALP3,
  CONTENT_MODALP4,
  CONTENT_MODALP5,
  CONTENT_MODALP6,
} from "@/constants/text_constants";

interface CustomModalProps {
  open: boolean;
  setOpen: boolean;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CustomModal: React.FC<CustomModalProps> = ({ open, setOpen }) => {
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // className={classes.modal_style}
      >
        <Box sx={style} className={classes.modal_style}>
          <div className={classes.modal_head}>
            <Image
              src={closeIcon}
              alt="close"
              width="20"
              height="20"
              onClick={() => setOpen(false)}
            />
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {MODAL_TITLE}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>{CONTENT_MODALP1}</p>
            <p>{CONTENT_MODALP2}</p>
            <p>{CONTENT_MODALP3}</p> <p> {CONTENT_MODALP4} </p>
            <p> {CONTENT_MODALP5}</p>
            <p>{CONTENT_MODALP6}</p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
