import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AddButton from "../actions/AddButton";
import DeleteButton from "../actions/DeleteButton";

const ListContent = (props) => {
  return (
    <List sx={{border: 1, borderRadius: 2, margin: "1rem 0rem" }} style={{borderColor: "black"}}>
      <ListItem
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <ListItemText primary={props.primary} sx={{ height: "1rem" }}/>
        {(props.field !== "Hide") && <AddButton sid={props.sid} tid={props.tid} field={props.field} onAdd={props.handler}/>}
        <DeleteButton fld={props.fld} sid={props.sid} tid={props.tid} nid={props.nid}/>
      </ListItem>
    </List>
  );
};

export default ListContent;
