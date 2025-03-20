import { Href } from 'expo-router';

export type ButtonVariant = 'primary' | 'outline';

export type ButtonPropsBase = {
  children: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  testID?: string;
  onPress: () => void | Promise<void>;
};

export type ButtonLinkProps = {
  children: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  testID?: string;
  href: Href;
};

export type ButtonProps = ButtonPropsBase | ButtonLinkProps;
