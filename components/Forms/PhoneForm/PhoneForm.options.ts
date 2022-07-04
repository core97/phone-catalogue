import { Manufacter, PhoneColor } from 'types/models';
import { SelectOption } from 'types/components';

export const manufacturerOptions: SelectOption<Manufacter>[] = [
  {
    label: 'Apple',
    value: 'apple',
  },
  {
    label: 'Samsung',
    value: 'samsung',
  },
  {
    label: 'Xiaomi',
    value: 'xiaomi',
  },
];

export const colorsOptions: SelectOption<PhoneColor>[] = [
  {
    label: 'Negro',
    value: 'black',
  },
  {
    label: 'Azul oscuro',
    value: 'dark-blue',
  },
  {
    label: 'Gris',
    value: 'gray',
  },
];
