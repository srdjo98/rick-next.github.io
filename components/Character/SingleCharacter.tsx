import { CharacterProps } from '@/pages/[id]';
import { CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import { Character } from './Character';
interface Props {
  character: CharacterProps;
}

export const SingleCharacter = ({ character }: Props) => (
  <Character
    characterImage={
      <CardMedia>
        <Image
          src={character.image!}
          alt={character.name}
          height={256}
          width={256}
        />
      </CardMedia>
    }
    characterBody={
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {character.name}
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          Gender - {character.gender}
        </Typography>
        <hr />
        <Typography
          variant='body1'
          color='text.secondary'
          sx={{ pt: '0.313rem', pb: '0.313rem' }}
        >
          Location - {character.location.name}
        </Typography>
        <hr />
        <Typography variant='body1' color='text.secondary'>
          Dimension - {character.location.dimension}
        </Typography>
      </CardContent>
    }
  />
);
