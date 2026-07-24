export type ResponseStatus = "Complete" | "Partial" | "Pending";

export interface FieldResponse {
  id: string;
  projectId: string;
  respondentId: string;
  status: ResponseStatus;
  answers: Answer[];
  audioUrl?: string;
  submittedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface Answer {
  questionId: string;
  type: "text" | "voice" | "multiple_choice" | "rating" | "photo";
  value: string | string[] | number;
  audioUrl?: string;
}

export interface CreateResponseInput {
  projectId: string;
  respondentId: string;
  answers: Answer[];
  audioUrl?: string;
}