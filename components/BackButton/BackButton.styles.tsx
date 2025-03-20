import Ionicons from '@expo/vector-icons/Ionicons';
import styled from 'styled-components/native';

export const BackButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: ${({ theme }) => theme.spacing.md}px;
`;

export const BackButtonIcon = styled(Ionicons).attrs({
  size: 18,
})`
  color: ${({ theme }) => theme.colors.foreground.fontWhite};
`;
