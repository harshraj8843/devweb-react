
import { bgLightBlue, breakpoints, widths } from '../../../../theme';

const styles = {
  root: {
    alignItems: 'center',
    background: bgLightBlue,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    position: 'fixed',
    left: '0',
    top: '0',
    width: `${widths.leftBar}px`,
    [`@media screen and (max-width: ${breakpoints.desktop})`]: {
      display: 'none',
    },
    '& div': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '10px 0',
    },
  },
  divider: {
    height: '1px',
    background: bgLightBlue,
    width: '95%',
    marginTop: '4px',
    marginBottom: '12px',
  },
};

export default styles;