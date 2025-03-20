import { StyleProp, Text, TextStyle } from 'react-native';
import { TypographyTextProps, TypographyVariant } from './Typography.types';

import { Colors } from '@/constants/Colors';
import { match } from 'ts-pattern';
import { useMemo } from 'react';

// Roboto_100Thin,
// Roboto_100Thin_Italic,
// Roboto_300Light,
// Roboto_300Light_Italic,
// Roboto_400Regular,
// Roboto_400Regular_Italic,
// Roboto_500Medium,
// Roboto_500Medium_Italic,
// Roboto_700Bold,
// Roboto_700Bold_Italic,
// Roboto_900Black,
// Roboto_900Black_Italic
export const Typography = ({
  children,
  variant = 'paragraph',
  color = 'fontPrimary',
}: TypographyTextProps): JSX.Element => {
  const style = useMemo(
    () =>
      match<TypographyVariant, StyleProp<TextStyle>>(variant)
        .with('header', () => ({
          fontSize: 28,
          fontFamily: 'Roboto_900Black',
          lineHeight: 36,
          letterSpacing: 0.5,
          color: Colors.foreground[color],
        }))
        .with('subheader', () => ({
          fontSize: 20,
          fontFamily: 'Roboto_400Regular',
          lineHeight: 28,
          letterSpacing: 0.25,
          color: Colors.foreground[color],
        }))
        .with('paragraph', () => ({
          fontSize: 16,
          fontFamily: 'Roboto_400Regular',
          lineHeight: 24,
          letterSpacing: 0,
          color: Colors.foreground[color],
        }))
        .with('button', () => ({
          fontSize: 16,
          fontFamily: 'Roboto_700Bold',
          lineHeight: 24,
          letterSpacing: 0,
          color: Colors.foreground[color],
        }))
        .exhaustive(),
    [variant, color],
  );

  return <Text style={style}>{children}</Text>;
};
