import { Manufacter, PhoneColor } from 'types/models';
import { SelectOption } from 'types/components';

export const manufacturerOptions: SelectOption<Manufacter>[] = [
  {
    label: 'Apple',
    value: Manufacter.APPLE,
  },
  {
    label: 'Samsung',
    value: Manufacter.SAMSUNG,
  },
  {
    label: 'Xiaomi',
    value: Manufacter.XIAOMI,
  },
];

export const colorsOptions: SelectOption<PhoneColor>[] = [
  {
    label: 'Negro',
    value: PhoneColor.BLACK,
  },
  {
    label: 'Azul oscuro',
    value: PhoneColor.DARK_BLUE,
  },
  {
    label: 'Gris',
    value: PhoneColor.GRAY,
  },
];
