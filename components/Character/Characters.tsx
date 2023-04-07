import { useSnackbar } from '@/hooks/useSnackbar';
import { CharactersProps } from '@/pages';
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Character } from './Character';

interface Props {
  characters: CharactersProps[];
}

export const Characters = ({ characters }: Props) => {
  const { notify } = useSnackbar();

  const handleClick = (character: CharactersProps) => {
    notify({
      open: true,
      duration: 4000,
      message: `Exploring ${character.name}`,
    });
  };

  return (
    <>
      {characters.map((c: CharactersProps) => (
        <Character
          key={c.id}
          characterImage={
            <CardMedia>
              <Image src={c.image!} alt={c.name} height={210} width={250} />
            </CardMedia>
          }
          characterBody={
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {c.name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {c.status} - {c.species}
              </Typography>
            </CardContent>
          }
          characterActions={
            <CardActions>
              <Link href={`/${c.id}`}>
                <Button
                  variant='contained'
                  size='small'
                  sx={(theme) => ({
                    color: 'white',
                    bgcolor: theme.palette.primary.main,
                    '&:hover': {
                      bgcolor: theme.palette.primary.light,
                      color: 'black',
                    },
                  })}
                  onClick={() => handleClick(c)}
                >
                  <Typography variant='body2' sx={{ pt: '0.125rem' }}>
                    Explore Character
                  </Typography>
                </Button>
              </Link>
            </CardActions>
          }
        />
      ))}
    </>
  );
};
