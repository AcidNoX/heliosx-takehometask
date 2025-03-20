import { Colors } from '@/constants/Colors';

export type TypographyVariant = 'paragraph' | 'header' | 'subheader' | 'button';

export type TypographyTextProps = {
  children: string;
  variant?: TypographyVariant;
  color?: keyof (typeof Colors)['foreground'];
};
