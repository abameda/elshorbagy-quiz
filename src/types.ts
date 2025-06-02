export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface LectureData {
  title: string;
  questions: Question[];
}

export interface QuizDataType {
  [key: string]: LectureData;
}
