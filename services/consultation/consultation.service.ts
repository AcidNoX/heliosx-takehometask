import { Consultation, IConsultationService } from './consultation.types';

import { asyncTimeout } from '@/utils/asyncTimeout';
import { randomUUID } from 'expo-crypto';

// Fake array to act as an in-memory db
const FAKE_CONSULTATION_DB: Consultation[] = [];

export const ConsultationService: IConsultationService = {
  getConsultations: async () => {
    await asyncTimeout();
    return FAKE_CONSULTATION_DB;
  },
  getConsultation: async (id) => {
    await asyncTimeout();
    return FAKE_CONSULTATION_DB.find((x) => x.id === id);
  },
  createConsultation: async ({ questions }) => {
    const toCreate = {
      id: randomUUID(),
      questions,
    };
    FAKE_CONSULTATION_DB.push(toCreate);
    await asyncTimeout();
    return toCreate;
  },
};
