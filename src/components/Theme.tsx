import React from 'react';

import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { IconButton } from '@mui/material';
import Brightness2RoundedIcon from '@mui/icons-material/Brightness2Rounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ThemeButton() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <IconButton
      sx={{
        ml: 1,
        position: 'fixed',
        top: 20,
        right: 50,
        p: 1.8,
        border: 1,
        borderColor: 'grey.500',
      }}
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === 'dark' ? (
        <Brightness2RoundedIcon />
      ) : (
        <WbSunnyRoundedIcon />
      )}
    </IconButton>
  );
}

function Theme() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          return prevMode === 'light' ? 'dark' : 'light';
        });
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ThemeButton />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default Theme;
