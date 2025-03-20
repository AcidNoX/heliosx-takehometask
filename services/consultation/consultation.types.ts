export type Consultation = {
  id: string;
  questions: {
    questionId: string;
    answer: boolean;
  }[];
};

export type IConsultationService = {
  getConsultations: () => Promise<Consultation[]>;
  getConsultation: (id: string) => Promise<Consultation | undefined>;
  createConsultation: (
    consultation: Omit<Consultation, 'id'>,
  ) => Promise<Consultation>;
};
