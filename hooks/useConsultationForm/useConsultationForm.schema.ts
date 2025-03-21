import zod from 'zod';

export const buildSchema = (numberOfQuestions: number) => {
  return zod.object({
    questions: zod
      .array(
        zod.object({
          questionId: zod.string(),
          answer: zod.union([zod.boolean(), zod.string().min(10)]),
        }),
      )
      .length(numberOfQuestions),
  });
};
export type ConsultationForm = zod.infer<ReturnType<typeof buildSchema>>;
