import { Button } from "@mui/material";
import { useState } from "react";

const AddButton = (props) => {
  const [show, setShow] = useState(false);
  const fieldText = props.field;

  const addHandler = () => {
    setShow((prevShow) => !prevShow);
    props.onAdd(!show);
  };

  return (
    <Button
      size="small"
      sx={{ width: "75%" }}
      style={{borderColor: "black", color:"rgba(0, 0, 0, 0.9)", borderWidth: "2px", fontWeight: "600"}}
      variant="outlined"
      onClick={addHandler}
    >
      {show ? `Hide ${fieldText}` : `Add ${fieldText}`}
    </Button>
  );
};

export default AddButton;
