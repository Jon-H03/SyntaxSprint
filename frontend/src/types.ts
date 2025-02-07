export type DifficultyLevel = "beginner" | "intermediate" | "expert";
export type Language = "python" | "javascript" | "typescript";

export type Snippets = {
  [key in Language]: {
    [key in DifficultyLevel]: string[];
  };
};
