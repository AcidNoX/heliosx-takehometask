import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';

export type FlexProps = {
  $gap?: keyof typeof Spacing;
  $padding?: keyof typeof Spacing;
  $bgColor?: keyof (typeof Colors)['background'];
  $grow?: boolean;
};
