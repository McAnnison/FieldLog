export type ProjectStatus = "Draft" | "Active" | "In Review" | "Completed" | "Archived";

export interface Project {
  id: string;
  name: string;
  description?: string;
  location?: string;
  targetResponses?: number;
  status: ProjectStatus;
  responses: number;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface CreateProjectInput {
  name: string;
  description?: string;
  location?: string;
  targetResponses?: number;
}