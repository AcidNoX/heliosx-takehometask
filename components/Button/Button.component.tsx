import { ButtonProps } from './Button.types';
import { Link } from 'expo-router';
import { StyledButton } from './Button.styles';
import { Typography } from '../Typography';

export const Button = ({
  children,
  variant = 'primary',
  disabled = false,
  testID,
  ...rest
}: ButtonProps): JSX.Element => {
  if ('onPress' in rest) {
    return (
      <StyledButton
        $variant={variant}
        onPress={rest.onPress}
        disabled={disabled}
        $disabled={disabled}
        testID={testID}
      >
        <Typography
          variant="button"
          color={variant === 'primary' ? 'fontWhite' : 'fontOrange'}
        >
          {children}
        </Typography>
      </StyledButton>
    );
  }

  return (
    <Link asChild href={rest.href} disabled={disabled} testID={testID}>
      <StyledButton $variant={variant} $disabled={disabled}>
        <Typography
          variant="button"
          color={variant === 'primary' ? 'fontWhite' : 'fontOrange'}
        >
          {children}
        </Typography>
      </StyledButton>
    </Link>
  );
};
