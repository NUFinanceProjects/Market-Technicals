import { z } from "zod";

export const gradeSchema = z.object({
  score: z.number().min(0).max(100),
  correctPoints: z.array(z.string()).default([]),
  missingPoints: z.array(z.string()).default([]),
  incorrectStatements: z.array(z.string()).default([]),
  improvedAnswer: z.string(),
  followUpQuestion: z.string(),
  overallFeedback: z.string(),
});

export type ParsedGrade = z.infer<typeof gradeSchema>;
