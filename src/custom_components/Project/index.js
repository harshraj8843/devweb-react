import React from "react";

import { createUseStyles } from "react-jss";

import SEO from "../../components/SEO";
import styles from "./styles";

// //simple approach
// import ReactMarkdown from "react-markdown";

const useStyles = createUseStyles(styles);

const Project = ({ repoData, api_domain }) => {
  const classes = useStyles();

  // // simple approach
  // const [projects, setProjects] = React.useState("");
  // React.useEffect(() => {
  //   for (let i = 0; i < repoData.length; i++) {
  //     console.log(repoData[i].owner.login);
  //     setProjects(
  //       (prevState) =>
  //         `${prevState} [![Project Card](https://harshraj8843.vercel.app/api/pin/?username=${repoData[i].owner.login}&repo=${repoData[i].name})](${repoData[i].html_url})`
  //     );
  //   }
  // }, [repoData]);

  const hello = "Project";

  return (
    <>
      <SEO title={hello} />
      <section className={classes.root}>
        <p align="center" style={{ paddingBottom: "50px", overflowY: 'scroll' }}>
          {repoData.map((data) => (
            <a
              key={data.id}
              target="_blank"
              rel="noreferrer"
              href={data.html_url}
            >
              <img
                style={{ margin: "5px", height: "140px", width: "400px" }}
                alt={`${data.name}`}
                src={`${api_domain}/api/pin?username=${data.owner.login}&repo=${data.name}&title_color=fff&icon_color=f9f9f9&text_color=9f9f9f&bg_color=151515`}
              />
            </a>
          ))}
        </p>

        {/* simple approach but look ugly */}
        {/* <ReactMarkdown className={classes.mdtext} children={projects} /> */}
      </section>
    </>
  );
};

export default Project;
