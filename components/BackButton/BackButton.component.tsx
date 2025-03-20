import { BackButtonContainer, BackButtonIcon } from './BackButton.styles';

import { BackButtonProps } from './BackButton.types';

export const BackButton = ({ onPress }: BackButtonProps) => {
  return (
    <BackButtonContainer onPress={onPress}>
      <BackButtonIcon name="chevron-back" />
    </BackButtonContainer>
  );
};
