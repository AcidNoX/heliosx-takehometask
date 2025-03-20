import { ButtonVariant } from './Button.types';
import styled from 'styled-components/native';

const HEIGHT = 48;

export const StyledButton = styled.TouchableOpacity.attrs<{
  $variant: ButtonVariant;
}>({
  activeOpacity: 0.8,
})`
  height: ${HEIGHT}px;
  padding-left: ${({ theme }) => theme.spacing.md * 2}px;
  padding-right: ${({ theme }) => theme.spacing.md * 2}px;
  background-color: ${({ theme, $variant }) =>
    theme.colors.button[$variant].background};
  border: 2px solid ${({ theme }) => theme.colors.button.border};
  border-radius: ${HEIGHT / 2}px;
  justify-content: center;
  align-items: center;
`;
