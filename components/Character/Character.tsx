import Card from '@mui/material/Card';
import { ReactElement } from 'react';

interface Props {
  characterImage: ReactElement;
  characterBody: ReactElement;
  characterActions?: ReactElement;
}

export const Character = ({
  characterImage,
  characterBody,
  characterActions,
}: Props) => (
  <Card sx={{ width: 250, mt: '1rem' }}>
    {characterImage}
    {characterBody}
    {characterActions && characterActions}
  </Card>
);
