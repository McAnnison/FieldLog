export type QuestionType = "text" | "voice" | "multiple_choice" | "rating" | "photo";

export interface Question {
  id: string;
  projectId: string;
  type: QuestionType;
  title: string;
  required: boolean;
  order: number;
  options?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateQuestionInput {
  projectId: string;
  type: QuestionType;
  title: string;
  required?: boolean;
  order?: number;
  options?: string[];
}