import { useState } from "react";
import { db } from "../../firebase_config";
import ListContent from "../UI/ListContent";
import { Box } from "@mui/system";
import TopicList from "./TopicList";
import AdditionForm from "../actions/AdditionForm";

const SubjectList = (props) => {
  const [showTopics, setShowTopics] = useState(false);
  const [topics, setTopics] = useState([]);

  const addTopicHandler = (show) => {
    db.collection("subjects")
      .doc(props.id)
      .collection("topics")
      .onSnapshot((query) => {
        setTopics(
          query.docs.map((top) => ({
            id: top.id,
            topicName: top.data().topicName,
          }))
        );
      });
    setShowTopics(show);
  };

  return (
    <>
      <ListContent
        sid={props.id}
        primary={props.name}
        field="Topics"
        fld="Subject"
        handler={addTopicHandler}
      />
      {showTopics && (
        <Box
          component="div"
          sx={{ padding: "0rem 1.5rem", margin: "0.5rem 0.5rem", border: 1, borderColor: 'grey.500' }}
        >
          <AdditionForm sid={props.id} field="topic" />
          {topics.map((top) => (
            <TopicList key={top.id} top={top.topicName} sid={props.id} tid={top.id} />
          ))}
        </Box>
      )}
    </>
  );
};

export default SubjectList;
