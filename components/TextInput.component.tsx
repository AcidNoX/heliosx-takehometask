import { TextInput as RNTextInput } from 'react-native';
import { Row } from './Containers';

type TextInputProps = {
  value: string | undefined;
  onChange: (value: string) => void;
};

export const TextInput = ({ value, onChange }: TextInputProps) => {
  return (
    <Row $gap="md">
      <RNTextInput
        style={{ backgroundColor: '#fff', width: '100%' }}
        onChangeText={(text) => onChange(text)}
        value={value}
      />
    </Row>
  );
};
