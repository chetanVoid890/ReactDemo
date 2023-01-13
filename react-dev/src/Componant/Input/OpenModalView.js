import React from "react";
import {
  Box,
  Modal,
  Typography,
  Button,
  Container,
  Card,
  Stack,
} from "@mui/material";

function OpenModalView({ closeModal }) {
  console.log("closeModal========================");
  return (
    <>
      <Card
        sx={{
          px: 5,
          boxShadow: "none",
          paddingTop: "10px",
          paddingBottom: "20px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            columnGap: 2,
            rowGap: 3,
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
            },
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Specification
            <hr></hr>
          </Typography>
          <br></br>
          <label>Title</label>
          <input />
          {/* <br></br> */}
          <label>placeholder</label>
          <input />
          {/* <Stack alignItems="flex-end" sx={{ my: 3 }} className="ModalButton"> */}
          <Button variant="outlined" color="error" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="outlined" color="error" onClick={closeModal}>
            Submit
          </Button>
          {/* </Stack> */}
        </Box>
      </Card>
    </>
  );
}

export default OpenModalView;
