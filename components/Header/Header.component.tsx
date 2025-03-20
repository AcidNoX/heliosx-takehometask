import { HeaderContainer, HeaderRight, LogoImage } from './Header.styles';

import { BackButton } from '@/components/BackButton';
import { View } from 'react-native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Header = (): JSX.Element => {
  const { top } = useSafeAreaInsets();
  const canGoBack = router.canGoBack();

  const handleBackPressed = () => {
    router.back();
  };

  return (
    <HeaderContainer $safeAreaTop={top}>
      {canGoBack ? <BackButton onPress={handleBackPressed} /> : <View />}
      <LogoImage source={require('../../assets/images/medexpress.png')} />
      {canGoBack ? <HeaderRight /> : <View />}
    </HeaderContainer>
  );
};
