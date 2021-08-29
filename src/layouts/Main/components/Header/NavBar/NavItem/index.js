
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles } from 'react-jss';
import styles from './styles';

// custom navlink
import NavLink from './NavLink';

const useStyles = createUseStyles(styles);

const NavItem = ({
  name,
  url,
  mdFileName, // eslint-disable-line
  ...iconProps
}) => {
  const classes = useStyles();

  const history = useHistory();

  const onCloseClicked = (e) => {
    e.preventDefault();
    e.stopPropagation();
    history.push('/');
  };

  return (
    <span className={classes.root}>
      <NavLink
        to={url}
        inactiveClassName={classes.otherTab}
        activeClassName={classes.currentTab}
      >
        <FontAwesomeIcon {...iconProps} size={iconProps.size || 'lg'} />
        <span className={classes.navText}>{name}</span>
        <FontAwesomeIcon
          onClick={onCloseClicked}
          className="closeButton"
          icon="times"
          size="1x"
          title="Close"
        />
      </NavLink>
    </span>
  );
};

export default NavItem;
