
import {
  bgDarkBlue,
  bgMidBlue,
  textLightBlue,
  sSize,
  sansFont,
  heights,
} from '../../../../theme';

const styles = {
  root: {
    bottom: '0',
    background: bgDarkBlue,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: sansFont,
    fontWeight: 400,
    left: '0',
    position: 'fixed',
    width: '100vw',
    height: heights.statusBar,
    '& span, & a': {
      display: 'inline-block',
      padding: '2px 8px',
      '&:hover': {
        background: bgMidBlue,
        cursor: 'pointer',
      },
    },
  },
  icon: {
    color: textLightBlue,
  },
  text: {
    color: textLightBlue,
    fontSize: sSize,
    padding: '0 4px',
  },
};

export default styles;