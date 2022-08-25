import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { db } from "../../firebase_config";
import AdditionForm from "../actions/AdditionForm";
import SubjectList from "../Lists/SubjectList";

const Content = () => {
  const [subjectList, setSubjectList] = useState([]);

  useEffect(() => {
    getSubjects();
  }, []);

  const getSubjects = () => {
    db.collection("subjects").onSnapshot((query) => {
      setSubjectList(
        query.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  };

  return (
    <Box
      component="div"
      sx={{ padding: "4rem 10rem", height: "100%", width: "100%" }}
      style={{ backgroundColor: "Gainsboro" }}
    >
      <AdditionForm field="subject" />
      {subjectList.map((sub) => (
        <SubjectList key={sub.id} id={sub.id} name={sub.name} />
      ))}
    </Box>
  );
};

export default Content;
