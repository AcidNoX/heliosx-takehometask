import { buildSchema, ConsultationForm } from './useConsultationForm.schema';
import {
  SubmitHandler,
  UseFormReturn,
  useForm,
  useWatch,
} from 'react-hook-form';

import { ConsultationQuestion } from '@/services/consultation-questions';
import { useCreateConsultation } from '@/hooks/useCreateConsultation';
import { useRouter } from 'expo-router';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';
import { Alert } from 'react-native';

export const useConsultationForm = (
  questions: ConsultationQuestion[] | undefined,
): [
  UseFormReturn<ConsultationForm>,
  ConsultationQuestion[],
  submitHandler: () => void,
] => {
  const mutation = useCreateConsultation();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(buildSchema(questions?.length ?? 5)),
    mode: 'onChange',
  });

  const formValues = useWatch(form);

  /**
   * Progressively disclose the questions
   */
  const questionsToShow = useMemo(() => {
    if (!questions) return [];

    const answers = form.getValues().questions ?? [];
    const answeredAnswers = answers.filter((q) => q?.answer != undefined);

    const numToShow = Math.min(answeredAnswers.length + 1, questions.length);
    return questions.slice(0, numToShow);
  }, [questions, formValues.questions]);

  const handleSubmit: SubmitHandler<ConsultationForm> = async ({
    questions,
  }) => {
    const response = await mutation.mutateAsync({ questions });
    console.log('Consultation created: ', JSON.stringify(response, null, 2));
    Alert.alert(
      'Consultation submitted!',
      'Thank you for submitting your consultation',
    );
    router.back();
  };

  return [form, questionsToShow, form.handleSubmit(handleSubmit)];
};
