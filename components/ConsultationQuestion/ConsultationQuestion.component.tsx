import { Pattern, match } from 'ts-pattern';

import { Column } from '@/components/Containers';
import { ConsultationForm } from '@/hooks/useConsultationForm/useConsultationForm.schema';
import { ConsultationQuestionProps } from './ConsultationQuestion.types';
import { TextInput } from '../TextInput.component';
import { Toggle } from '../Toggle.component';
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
    .with({ answer: Pattern.string }, (v) => v.answer)
    .otherwise(() => undefined);

  const formElement = match(question.type)
    .with('boolean', () => (
      <Toggle
        value={answer as boolean | undefined}
        onChange={(answer) =>
          controller.field.onChange({
            questionId: question.id,
            answer,
          })
        }
      />
    ))
    .with('text', () => (
      <TextInput
        value={answer as string | undefined}
        onChange={(answer) => {
          controller.field.onChange({
            questionId: question.id,
            answer,
          });
        }}
      />
    ))
    .exhaustive();

  return (
    <Column $bgColor="surfactTertiary" $padding="md" $gap="md">
      <Typography variant="subheader">{question.text}</Typography>
      {formElement}
    </Column>
  );
};
