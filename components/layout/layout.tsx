import { ReactElement } from 'react';
import { Box, Container, ThemeProvider } from '@mui/material';
import { Navbar } from './Navbar';
import { theme } from '@/theme';

export const Layout = ({ children }: { children: ReactElement }) => (
  <ThemeProvider theme={theme}>
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url("/images/background.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Navbar />
      <Container maxWidth="md" sx={{ pb: '0.7rem', pt: '0.5rem', textAlign: 'center' }}>
        {children}
      </Container>
    </Box>
  </ThemeProvider>
);
