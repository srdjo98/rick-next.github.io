import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export const Navbar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar
      position='static'
      sx={(theme) => ({ bgcolor: theme.palette.primary.dark })}
    >
      <Toolbar>
        <Link href={'/'}>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Home
          </Typography>
        </Link>
        <Box sx={{ ml: '2.25rem' }}>
          <Link href={'/locations'}>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Locations
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
);
