import ListContent from "../UI/ListContent";

const NotesList = (props) => {
  return <>
    <ListContent
      primary={props.not}
      sid={props.sid}
      tid={props.tid}
      nid={props.nid}
      field="Hide"
      fld="Note"
    />
  </>;
};

export default NotesList;
