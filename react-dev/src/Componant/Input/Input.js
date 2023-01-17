import React, { useState } from "react";
import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OpenModal from "./OpenModal";
import OpenModalView from "./OpenModalView";
// ============================================================
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// ============================================================

const names = [
  "Text Input",
  "Tex Area",
  "Dropdown",
  "Radio Group",
  "Checkbox",
  "Date",
  "Time",
];

// ============================================================

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

// ============================================================

function InputField() {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [modal, setModal] = useState(false);

  const onModalHandler = (e) => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };
  // ============================================================

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  // ============================================================

  return (
    <Container
      className="customelisttable"
      sx={{ border: "3px dotted black", width: "500px" }}
    >
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Name</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
                // onChange={onChangeHandlar}
                onClick={(e) => onModalHandler(e)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <OpenModal open={modal} onClose={handleCloseModal}>
        <OpenModalView closeModal={handleCloseModal} />
      </OpenModal>
    </Container>
  );
}

export default InputField;
