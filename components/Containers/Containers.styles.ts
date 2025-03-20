import styled, { css } from 'styled-components/native';

import { FlexProps } from './Containers.types';

const FlexContainerBase = styled.View<FlexProps>`
  ${({ $gap }) =>
    $gap &&
    css`
      gap: ${({ theme }) => theme.spacing[$gap]}px;
    `}

  ${({ $padding }) =>
    $padding &&
    css`
      padding: ${({ theme }) => theme.spacing[$padding]}px;
    `}

    ${({ $bgColor }) =>
    $bgColor &&
    css`
      background-color: ${({ theme }) => theme.colors.background[$bgColor]};
    `}

    ${({ $grow }) =>
    $grow &&
    css`
      flex-grow: 1;
      flex-shrink: 1;
    `}
`;

export const Column = styled(FlexContainerBase)`
  flex-direction: column;
`;

export const Row = styled(FlexContainerBase)`
  flex-direction: row;
`;
