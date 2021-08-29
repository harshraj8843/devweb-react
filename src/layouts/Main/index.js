import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

import Header from "./components/Header";
import LeftBar from "./components/LeftBar";
import StatusBar from "./components/StatusBar";

import styles from "./styles";

const useStyles = createUseStyles(styles);

const MainLayout = ({ children, tabs, custom_components, contactData }) => {
  // eslint-disable-next-line
  const [explorerOpen, setExplorerOpen] = useState(false);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LeftBar contactData={contactData} />
      <main
        className={clsx(classes.content, {
          [classes.explorerOpen]: explorerOpen,
        })}
      >
        <Header tabs={tabs} custom_components={custom_components} />
        {children}
      </main>
      <StatusBar />
    </div>
  );
};

export default MainLayout;
