import {
  ConsultationQuestion,
  ConsultationQuestionsService,
} from '@/services/consultation-questions';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

export const useConsultationQuestions = (): UseQueryResult<
  ConsultationQuestion[]
> => {
  return useQuery({
    queryKey: ['consultation-questions'],
    queryFn: ConsultationQuestionsService.getConsultationQuestions,
  });
};
