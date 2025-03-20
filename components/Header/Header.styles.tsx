import { Colors } from '@/constants/Colors';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View<{ $safeAreaTop: number }>`
  background-color: ${Colors.background.brandPrimary};
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${({ $safeAreaTop }) => $safeAreaTop}px;
`;

export const LogoImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 50%;
  height: 60px;
  margin-bottom: 20px;
`;

// Placeholder View to keep logo centered
export const HeaderRight = styled.View`
  width: 32px;
`;
