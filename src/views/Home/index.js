import React, { useEffect } from "react";

import Typed from "typed.js";
import { createUseStyles } from "react-jss";

import MainButtons from "./components/MainButtons";

import SEO from "../../components/SEO";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const Home = ({ staticData, contactData, repoUrl }) => {
  const classes = useStyles();

  useEffect(() => {
    const options = {
      strings: staticData.typed,
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
    };

    const typed = new Typed("#typed-insert-point", options);

    return () => {
      // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      typed.destroy();
    };
  }, [staticData]);

  const hello = "Hii there";

  return (
    <>
      <SEO title={hello} />
      <section className={classes.root}>
        <h1 className={classes.heading}>{staticData.mainLine}</h1>
        <div className={classes.typedWrap}>
          <span id="typed-insert-point" style={{ whiteSpace: "pre" }} />
        </div>
        <MainButtons contactData={contactData} repoUrl={repoUrl} />
      </section>
    </>
  );
};

export default Home;
