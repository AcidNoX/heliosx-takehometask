export type ConsultationQuestionType = 'boolean' | 'text';

export type ConsultationQuestion = {
  id: string;
  text: string;
  type: ConsultationQuestionType;
};

export type IConsultationQuestionsService = {
  getConsultationQuestions: () => Promise<ConsultationQuestion[]>;
};
