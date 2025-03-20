import zod from 'zod';

export const buildSchema = (numberOfQuestions: number) => {
  return zod.object({
    questions: zod
      .array(
        zod.object({
          questionId: zod.string(),
          answer: zod.boolean(),
        }),
      )
      .length(numberOfQuestions),
  });
};
export type ConsultationForm = zod.infer<ReturnType<typeof buildSchema>>;
