import { Consultation, ConsultationService } from '@/services/consultation';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

export const useConsultations = (): UseQueryResult<Consultation[]> => {
  return useQuery({
    queryKey: ['consultations'],
    queryFn: ConsultationService.getConsultations,
  });
};
