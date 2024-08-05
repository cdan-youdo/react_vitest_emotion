import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { theme } from 'styles/theme'
import { StyledDiv } from 'components';

export const AppContainer = () =>
  <LocalizationProvider dateAdapter={AdapterMoment}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <StyledDiv/>
      </ThemeProvider>
    </StyledEngineProvider>
  </LocalizationProvider>

export default AppContainer