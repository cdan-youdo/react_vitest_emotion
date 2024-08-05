import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'styles/theme'
import { StyledDiv } from 'components';

export const AppContainer = () =>
  <ThemeProvider theme={theme}>
    <StyledDiv/>
  </ThemeProvider>

export default AppContainer