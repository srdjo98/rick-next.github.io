import { ThemeOptions, createTheme } from '@mui/material';

const themeOptions: ThemeOptions = {
  components: {
    MuiInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          '::before': {
            borderBottomColor: theme.palette.common.white,
          },
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        iconStandard: {
          color: 'white',
        },
      },
    },
  },
  palette: {
    primary: {
      light: '#B2D3C2',
      main: '#728C69',
    },
  },
};

export const theme = createTheme(themeOptions);
