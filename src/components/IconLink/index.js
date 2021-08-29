import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createUseStyles } from "react-jss";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const IconLink = ({ name, url, icon, isInternal, badge }) => {
  const classes = useStyles();

  const iconComp = (
    <span className={classes.iconWrapper}>
      <FontAwesomeIcon className={classes.icon} icon={icon} size="lg" />
      {badge && <span className={classes.badge}>{badge}</span>}
    </span>
  );

  if (isInternal) {
    return (
      <Link
        to={url}
        key={`left-bar-${name}`}
        className={classes.link}
        aria-label={name}
        title={name}
      >
        {iconComp}
      </Link>
    );
  }

  return (
    <a
      href={url}
      key={`left-bar-${name}`}
      className={classes.link}
      aria-label={`Find me on ${name}`}
      title={`Find me on ${name}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {iconComp}
    </a>
  );
};

export default IconLink;
