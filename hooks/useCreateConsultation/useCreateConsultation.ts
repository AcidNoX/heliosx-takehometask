import { Consultation, ConsultationService } from '@/services/consultation';
import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

export const useCreateConsultation = (): UseMutationResult<
  Consultation,
  Error,
  Omit<Consultation, 'id'>,
  unknown
> => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: ConsultationService.createConsultation,
    onSuccess: async () => {
      await client.invalidateQueries({ queryKey: ['consultations'] });
    },
  });
};
