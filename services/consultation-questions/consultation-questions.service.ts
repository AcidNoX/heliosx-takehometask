import {
  ConsultationQuestion,
  IConsultationQuestionsService,
} from './consultation-questions.types';

import { asyncTimeout } from '@/utils/asyncTimeout';
import { randomUUID } from 'expo-crypto';

// Fake array to act as an in-memory db
const FAKE_CONSULTATION_QUESTIONS: ConsultationQuestion[] = [
  {
    id: randomUUID(),
    text: 'Are you male and aged between 18-75?',
  },
  {
    id: randomUUID(),
    text: 'Do you smoke or drink?',
  },
  {
    id: randomUUID(),
    text: 'Do you have high blood pressure (above 160/90), or are you currently on treatment for high blood pressure?',
  },
  {
    id: randomUUID(),
    text: 'Do you suffer from depression for which you have not seen a GP?',
  },
  {
    id: randomUUID(),
    text: 'Have you experienced any adverse reaction to any anti-alergy medication previously',
  },
];

export const ConsultationQuestionsService: IConsultationQuestionsService = {
  getConsultationQuestions: async () => {
    await asyncTimeout();
    return FAKE_CONSULTATION_QUESTIONS;
  },
};
