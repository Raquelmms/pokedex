import { createTheme } from '@mui/material/styles';
import { primaryColor, neutralColor } from './colors';

export const theme = createTheme({
  palette: {
    primary: {

      main: primaryColor,
      contrastText: '#5F5950'
    },
    text: {

    },
    secondary: {
      main: neutralColor
    }
  }
});

export default theme 