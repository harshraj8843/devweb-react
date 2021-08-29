import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import Container from "../Container";

const MDTab = ({ fileName }) => {
  const [contents, setContents] = useState("");

  useEffect(() => {
    const loadFile = async () => {
      const file = await import(`../../data/tabs/${fileName}.md`);
      const response = await fetch(file.default);
      const text = await response.text();
      setContents(text);
    };
    loadFile();
  }, [fileName]);

  return (
    <Container seo={{ title: fileName }}>
      <ReactMarkdown children={contents} />
    </Container>
  );
};

export default MDTab;
