import React from "react";
import { Box, Modal, Typography } from "@mui/material";

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
    <div className="modal-style">
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Le numéro de chassis
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>
              7 Le numéro de chassis Ce numéro se trouve généralement à
              plusieurs endroits :
            </p>
            <p>
              Sur la planche de bord côté conducteur – vous pouvez le voir à
              travers le pare-brise depuis l’extérieur de la voiture.
            </p>
            <p>
              Sur la porte côté conducteur, vérifiez l’autocollant qui contient
              des informations sur la voiture, y compris le numéro de chassis.
            </p>{" "}
            <p>
              {" "}
              Dans le compartiment moteur – ce numéro peut se trouver sur le
              bloc moteur ou d’autres pièces du moteur.{" "}
            </p>
            <p>
              {" "}
              Sur les documents d’immatriculation de la voiture – généralement
              sur le certificat d’immatriculation du véhicule.
            </p>
            <p>
              Sur vos documents d’assurance – généralement sur votre carte ou
              police d’assurance.
            </p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
