import { Column, Row } from '@/components/Containers';
import { Pattern, match } from 'ts-pattern';

import { Button } from '@/components/Button';
import { ConsultationForm } from '@/hooks/useConsultationForm/useConsultationForm.schema';
import { ConsultationQuestionProps } from './ConsultationQuestion.types';
import { Typography } from '@/components/Typography';
import { useController } from 'react-hook-form';

export const ConsultationQuestion = ({
  index,
  question,
}: ConsultationQuestionProps): JSX.Element => {
  const controller = useController<ConsultationForm>({
    name: `questions.${index}`,
  });

  const answer = match(controller.field.value)
    .with({ answer: Pattern.boolean }, (v) => v.answer)
    .otherwise(() => undefined);

  const handleYes = () => {
    controller.field.onChange({
      questionId: question.id,
      answer: true,
    });
  };

  const handleNo = () => {
    controller.field.onChange({
      questionId: question.id,
      answer: false,
    });
  };

  return (
    <Column $bgColor="surfactTertiary" $padding="md" $gap="md">
      <Typography variant="subheader">{question.text}</Typography>
      <Row $gap="md">
        <Button
          variant={answer === true ? 'primary' : 'outline'}
          onPress={handleYes}
        >
          Yes
        </Button>
        <Button
          variant={answer === false ? 'primary' : 'outline'}
          onPress={handleNo}
        >
          No
        </Button>
      </Row>
    </Column>
  );
};
