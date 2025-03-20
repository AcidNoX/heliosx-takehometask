export type ConsultationQuestion = {
  id: string;
  text: string;
};

export type IConsultationQuestionsService = {
  getConsultationQuestions: () => Promise<ConsultationQuestion[]>;
};
