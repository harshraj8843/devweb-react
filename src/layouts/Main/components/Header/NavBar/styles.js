
import {
  bgMidBlue,
  bgDarkBlue,
  textWhite,
  textLightBlue,
  sSize,
  breakpoints,
  sansFont,
  heights,
} from '../../../../../theme';

const styles = {
  root: {
    fontFamily: sansFont,
    height: heights.navBar,
  },
  list: {
    color: textLightBlue,
    listStyle: 'none',
    margin: '0',
    padding: '0',
  },
  listItem: {
    display: 'inline-block',
    '& a': {
      borderRight: `1px solid ${bgMidBlue}`,
      borderTop: `4px solid ${bgDarkBlue}`,
      cursor: 'pointer',
      display: 'inline-block',
      fontSize: sSize,
      letterSpacing: '0.5px',
      padding: '10px 15px',
      textTransform: 'lowercase',
      transition: 'background, border-color 250ms ease',
      [`@media screen and (max-width: ${breakpoints.desktop})`]: {
        letterSpacing: '0',
        padding: '10px',
      },
      '&:hover, &[aria-current="page"]': {
        borderTopColor: bgDarkBlue,
        background: bgDarkBlue,
        color: textWhite,
      },
      '&[aria-current="page"]': {
        background: bgMidBlue,
        borderTopColor: bgDarkBlue,
      },
    },
  },
};

export default styles;