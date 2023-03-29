import { ReactElement } from 'react';
import Card from '@mui/material/Card';

interface Props {
  characterImage: ReactElement;
  characterBody: ReactElement;
  characterActions?: ReactElement;
}

export const Character = ({ characterImage, characterBody, characterActions }: Props) => (
  <Card sx={{ width: 250, mt: '1rem' }}>
    {characterImage}
    {characterBody}
    {characterActions && characterActions}
  </Card>
);
