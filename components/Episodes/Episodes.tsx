import { EpisodeProps } from '@/pages/[id]';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Box, Paper, Typography } from '@mui/material';

interface Props {
  episodes: EpisodeProps[];
}

const Episode = ({ episodes }: Props) => (
  <>
    <Typography
      variant='h4'
      sx={{
        pt: '35px',
      }}
    >
      Featured Episodes
    </Typography>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '0.625rem',
        pt: '1.563rem',
      }}
    >
      {episodes?.slice(0, 3).map((e: EpisodeProps) => (
        <Paper
          elevation={7}
          sx={{
            width: '15.625rem',
            height: 'auto',
          }}
          key={e.name}
        >
          <Typography
            variant='subtitle1'
            sx={(theme) => ({
              color: 'white',
              bgcolor: theme.palette.primary.main,
            })}
          >
            {e.episode}
          </Typography>
          <Box>
            <Typography
              sx={{
                fontSize: '1.063rem',
              }}
            >
              Episode - {e.name}
            </Typography>
            <PlayCircleIcon
              sx={{
                fontSize: '3.75rem',
              }}
            />
          </Box>
          <Typography
            sx={{
              color: 'white',
              bgcolor: 'black',
            }}
          >
            {e.air_date}
          </Typography>
        </Paper>
      ))}
    </Box>
  </>
);

export default Episode;
