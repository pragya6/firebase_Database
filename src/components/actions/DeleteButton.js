import Button from "@mui/material/Button";
import { db } from "../../firebase_config";

const DeleteButton = (props) => {
  const fieldText = props.fld;

  const deleteHandler = () => {
    if(fieldText === "Subject"){
      db.collection("subjects").doc(props.sid).delete();
    }else if(fieldText === "Topic"){
      db.collection("subjects").doc(props.sid).collection("topics").doc(props.tid).delete();
    }else if(fieldText === "Note"){
      db.collection("subjects").doc(props.sid).collection("topics").doc(props.tid).collection("notes").doc(props.nid).delete();
    }
  };

  return (
    <Button
      size="small"
      sx={{ width: "75%" }}
      style={{borderColor: "#000", color:"rgba(0, 0, 0, 0.9)", borderWidth: "2px", fontWeight: "600"}}
      variant="outlined"
      onClick={deleteHandler}
    >
      {`Delete ${fieldText}`}
    </Button>
  );
};

export default DeleteButton;
