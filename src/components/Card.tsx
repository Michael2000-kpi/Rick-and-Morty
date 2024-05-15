import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  episode: string[];
  created: string;
  url: string;
}

interface CardProps {
  character: Character;
}

const Card: React.FC<CardProps> = ({ character }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-auto mb-2"
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {character.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Status: {character.status}
            <br />
            Species: {character.species}
            <br />
            Type: {character.type}
            <br />
            Gender: {character.gender}
            <br />
            Origin: {character.origin.name}
            <br />
            Location: {character.location.name}
            <br />
            Image: {character.image}
            <br />
            Episode: {character.episode}
            <br />
            Created: {character.created}
            <br />
            URL: {character.url}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Card;
