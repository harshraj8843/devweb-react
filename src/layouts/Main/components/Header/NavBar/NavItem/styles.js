
import { breakpoints, textLightBlue, textWhite } from '../../../../../../theme';

const styles = {
  root: {
    '& a[aria-current="page"] span': {
      display: 'inline-block !important',
    },
  },
  navText: {
    marginLeft: '8px',
    // [`@media screen and (max-width: ${breakpoints.desktop})`]: {
    //   display: 'none',
    // },
  },
  currentTab: {
    '& .closeButton': {
      color: textLightBlue,
      marginLeft: '8px',
      paddingLeft: '8px',
      [`@media screen and (max-width: ${breakpoints.desktop})`]: {
        paddingLeft: '8px',
      },
      '&:hover': {
        color: textWhite,
      },
    },
  },
  otherTab: {
    '& .closeButton': {
      display: 'none',
    },
  },
};

export default styles;