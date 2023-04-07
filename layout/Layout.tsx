import { theme } from '@/theme';
import { Box, Container, ThemeProvider } from '@mui/material';
import { ReactElement } from 'react';
import { Navbar } from './Navbar';

export const Layout = ({ children }: { children: ReactElement }) => (
  <ThemeProvider theme={theme}>
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url("/images/background.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Navbar />
      <Container
        maxWidth='md'
        sx={{ pb: '0.7rem', pt: '0.5rem', textAlign: 'center' }}
      >
        {children}
      </Container>
    </Box>
  </ThemeProvider>
);
