import React from "react";
import { createUseStyles } from "react-jss";

import ButtonLink from "../../../../components/ButtonLink";
import GHButton from "../../../../components/GHButton";

import styles from "./styles";

const useStyles = createUseStyles(styles);

const MainButtons = ({ contactData, repoUrl }) => {
  const classes = useStyles();

  const getGHCredentials = (repoUrl) => {
    const parts = new URL(repoUrl).pathname.split("/");
    const repo = parts.pop() || "";
    const username = parts.pop() || "";
    return { repo, username };
  };

  const { repo, username } = getGHCredentials(repoUrl);

  const ghButtons = [
    // Follow button
    {
      resource: {
        endpoint: `https://api.github.com/users/${username}`,
        attr: "followers",
      },
      href: `https://github.com/${username}`,
      title: `Follow me on GitHub`,
      icon: ["fab", "github"],
      size: "lg",
      text: `Follow @${username}`,
    },
    // Stargazers button
    {
      resource: {
        endpoint: `https://api.github.com/repos/${username}/${repo}`,
        attr: "stargazers_count",
      },
      href: repoUrl,
      title: `Star ${username}/${repo} on GitHub`,
      icon: "star",
      size: "sm",
      text: "Star",
    },
  ];

  const mainContact = contactData.find((c) => c.isMain);

  return (
    <div className={classes.root}>
      <div>
        {ghButtons.map((btn) => (
          <GHButton key={`gh-btn-${btn.resource.attr}`} {...btn} />
        ))}
      </div>
      <div>
        <ButtonLink
          href={mainContact.url}
          title={`Find me on ${mainContact.name}`}
          icon={mainContact.icon}
          size="lg"
          text="Contact Me"
        />
      </div>
    </div>
  );
};

export default MainButtons;
