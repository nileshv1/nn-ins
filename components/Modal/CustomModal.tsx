import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import classes from "../../styles/page.module.scss";
import Image from "next/image";
import { closeIcon } from "@/public/images";
import { useTranslation } from "next-i18next";

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
  const { t } = useTranslation();
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
            {t("modalTitle")}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>{t("modalContentP1")}</p>
            <p>{t("modalContentP2")}</p>
            <p>{t("modalContentP3")}</p> <p> {t("modalContentP4")} </p>
            <p>{t("modalContentP5")}</p>
            <p>{t("modalContentP6")}</p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
