import { createTheme } from '@mui/material/styles';
import { blueGrey, pink } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: blueGrey,
    secondary: { main: pink[500] },
    mode: 'light'
  },
})