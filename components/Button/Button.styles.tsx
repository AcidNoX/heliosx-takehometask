import { Pattern, match } from 'ts-pattern';
import styled, { DefaultTheme } from 'styled-components/native';

import { ButtonVariant } from './Button.types';

const HEIGHT = 48;

const getBackgroundColor = (
  theme: DefaultTheme,
  variant: ButtonVariant,
  isDisabled: boolean = false,
): string => {
  return match([isDisabled, variant])
    .with([true, Pattern.any], () => theme.colors.button.disabled)
    .otherwise(() => theme.colors.button[variant].background);
};

export const StyledButton = styled.TouchableOpacity.attrs<{
  $variant: ButtonVariant;
  $disabled?: boolean;
}>({
  activeOpacity: 0.8,
})`
  height: ${HEIGHT}px;
  padding-left: ${({ theme }) => theme.spacing.md * 2}px;
  padding-right: ${({ theme }) => theme.spacing.md * 2}px;
  background-color: ${({ theme, $variant, $disabled }) =>
    getBackgroundColor(theme, $variant, $disabled)};
  border: 2px solid
    ${({ theme, $disabled }) =>
      $disabled ? theme.colors.button.disabled : theme.colors.button.border};
  border-radius: ${HEIGHT / 2}px;
  justify-content: center;
  align-items: center;
`;
