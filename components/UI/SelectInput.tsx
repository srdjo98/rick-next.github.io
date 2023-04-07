import { FilterProps } from '@/utils';
import { FormControl, MenuItem, Select } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

interface Props {
  name: string;
  defaultValue: string;
  menuItems: FilterProps[];
  control: Control;
}

export const SelectInput = ({
  name,
  defaultValue,
  menuItems,
  control,
}: Props) => (
  <FormControl sx={{ width: '120px', mr: '20px' }}>
    <Controller
      render={({ field }) => (
        <Select sx={{ color: 'white' }} variant='standard' {...field}>
          {menuItems.map((m) => (
            <MenuItem key={m.label} value={m.value}>
              {m.label}
            </MenuItem>
          ))}
        </Select>
      )}
      control={control}
      name={name}
      defaultValue={defaultValue}
    />
  </FormControl>
);
