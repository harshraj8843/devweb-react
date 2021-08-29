
import React from 'react';
import { createUseStyles } from 'react-jss';
import NavBar from './NavBar';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Header = ({ tabs, custom_components }) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <NavBar tabs={tabs} custom_components={custom_components} />
    </header>
  );
};

export default Header;
