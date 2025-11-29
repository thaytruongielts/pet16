export interface Part2Question {
  id: number;
  context: string;
  questionText: string;
  options: {
    id: 'A' | 'B' | 'C';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C';
}

export interface Part3Question {
  id: number;
  preText: string;
  postText: string;
  correctAnswers: string[]; // Array to allow variations
}

export type ExamPart = 'HOME' | 'PART2' | 'PART3';