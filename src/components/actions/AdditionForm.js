import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { db } from "../../firebase_config";

const AdditionForm = (props) => {
  const [fieldValue, setFieldValue] = useState("");
  const field = props.field;

  const submitHandler = (event) => {
    event.preventDefault();

    if (field === "subject") {
      db.collection("subjects").add({
        name: fieldValue,
      });
    } else if (field === "topic") {
      db.collection("subjects").doc(props.sid).collection("topics").add({
        topicName: fieldValue,
      });
    } else if (field === "note") {
      db.collection("subjects")
        .doc(props.sid)
        .collection("topics")
        .doc(props.tid)
        .collection("notes")
        .add({
          noteName: fieldValue,
        });
    }

    setFieldValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <TextField
        id="standard-basic"
        label={`Add ${field}`}
        value={fieldValue}
        onChange={(event) => {
          setFieldValue(event.target.value);
        }}
        variant="standard"
        sx={{ margin: "2rem 0rem" }}
      />
      <Button style={{ display: "none" }} type="submit">
        {`Add ${field}`}
      </Button>
    </form>
  );
};

export default AdditionForm;
