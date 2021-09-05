
import React from 'react';
import { createUseStyles } from 'react-jss';
import IconLink from '../../../../components/IconLink';
import { pages } from '../../../../data';
import styles from './styles';

const useStyles = createUseStyles(styles);

const LeftBar = ({ contactData }) => {
  const classes = useStyles();

  const internals = pages.map(({ name, url, icon, isInternal, badge }) => ({
    name,
    url,
    icon,
    isInternal,
    badge,
  }));

  const bottom = [
    {
      name: 'settings',
      url: '',
      icon: 'cog',
      isInternal: true,
    },
  ];

  const renderData = (data) => {
    return data.map((contactItem) => (
      <IconLink key={contactItem.name} {...contactItem} />
    ));
  };

  const renderDivider = () => <span className={classes.divider} />;

  return (
    <div className={classes.root}>
      <div>
        {renderData(internals)}
        {renderDivider()}
        {renderData(contactData)}
      </div>
      <div>{renderData(bottom)}</div>
    </div>
  );
};

export default LeftBar;
