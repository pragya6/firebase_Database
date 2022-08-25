import { useState } from "react";
import { db } from "../../firebase_config";
import ListContent from "../UI/ListContent";
import { Box } from "@mui/system";
import AdditionForm from "../actions/AdditionForm";
import NotesList from "./NotesList";

const TopicList = (props) => {
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState([]);

  const addNoteHandler = (show) => {
    db.collection("subjects")
      .doc(props.sid)
      .collection("topics")
      .doc(props.tid)
      .collection("notes")
      .onSnapshot((query) => {
        setNotes(
          query.docs.map((not) => ({
            id: not.id,
            noteName: not.data().noteName,
          }))
        );
      });
    setShowNotes(show);
  };

  return (
    <>
      <ListContent
        primary={props.top}
        sid={props.sid}
        tid={props.tid}
        field="Notes"
        fld="Topic"
        handler={addNoteHandler}
      />
      {showNotes && (
        <Box
          component="div"
          sx={{ padding: "0rem 1.5rem", margin: "0.5rem 0.5rem", border: 1, borderColor: 'grey.500' }}
        >
          <AdditionForm sid={props.sid} tid={props.tid} field="note" />
          {notes.map((not) => (
            <NotesList key={not.id} not={not.noteName} sid={props.sid} tid={props.tid} nid={not.id}/>
          ))}
        </Box>
      )}
    </>
  );
};

export default TopicList;
