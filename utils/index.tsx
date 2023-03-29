export interface FilterProps {
  value: string;
  label: string;
}

export const status: FilterProps[] = [
  { value: 'alive', label: 'Alive' },
  { value: 'dead', label: 'Dead' },
];

export const genders: FilterProps[] = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
];
