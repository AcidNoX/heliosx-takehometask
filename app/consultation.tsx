import { useEffect, useRef } from 'react';

import { Button } from '@/components/Button';
import { Column } from '@/components/Containers';
import { ConsultationQuestion } from '@/components/ConsultationQuestion';
import { ConsultationQuestion as ConsultationQuestionType } from '@/services/consultation-questions';
import { FlatList } from 'react-native';
import { FormProvider } from 'react-hook-form';
import { Typography } from '@/components/Typography';
import { useConsultationForm } from '@/hooks/useConsultationForm';
import { useConsultationQuestions } from '@/hooks/useConsultationQuestions';

const ConsultationScreen = (): JSX.Element => {
  const ref = useRef<FlatList<ConsultationQuestionType>>(null);

  const questionsQuery = useConsultationQuestions();
  const [form, questionsToShow, handleSubmit] = useConsultationForm(
    questionsQuery.data,
  );

  // Scroll to the end when the answered questions change
  // Small delay to allow for re-render, then animate.
  //
  // Wouldn't do it this way in prod - would probably listen to layout event
  // for new questions and then animated
  useEffect(() => {
    setTimeout(() => ref.current?.scrollToEnd({ animated: true }), 200);
  }, [questionsToShow]);

  return (
    <FormProvider {...form}>
      <Column $padding="md" $gap="md" $grow testID="consultation-screen">
        <Typography variant="header" color="fontBlue">
          Your consultation
        </Typography>
        <FlatList
          ref={ref}
          data={questionsToShow}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ConsultationQuestion index={index} question={item} />
          )}
          ItemSeparatorComponent={() => <Column $padding="xs" />}
        />
        <Button
          testID="submit-button"
          disabled={!form.formState.isValid}
          onPress={handleSubmit}
        >
          Submit
        </Button>
      </Column>
    </FormProvider>
  );
};

export default ConsultationScreen;
