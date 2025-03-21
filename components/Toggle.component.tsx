import { Button } from './Button';
import { Row } from './Containers';

type ToggleProps = {
  value: boolean | undefined;
  onChange: (value: boolean) => void;
};

export const Toggle = ({ value, onChange }: ToggleProps) => {
  return (
    <Row $gap="md">
      <Button
        variant={value === true ? 'primary' : 'outline'}
        onPress={() => onChange(true)}
      >
        Yes
      </Button>
      <Button
        variant={value === false ? 'primary' : 'outline'}
        onPress={() => onChange(false)}
      >
        No
      </Button>
    </Row>
  );
};
