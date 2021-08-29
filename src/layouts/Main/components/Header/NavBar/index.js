
import React from 'react';
import { createUseStyles } from 'react-jss';
import NavItem from './NavItem';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Navbar = ({ tabs, custom_components }) => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <ul className={classes.list}>
        {tabs.map((tab) => (
          <li className={classes.listItem} key={tab.name}>
            <NavItem {...tab} />
          </li>
        ))}
        {custom_components.map((tab) => (
          <li className={classes.listItem} key={tab.name}>
            <NavItem {...tab} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
