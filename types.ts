export enum AnimalType {
  LION = 'LION',
  OTTER = 'OTTER',
  GOLDEN = 'GOLDEN',
  BEAVER = 'BEAVER',
}

export interface QuestionOption {
  text: string;
  type: AnimalType;
}

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}

export interface AnimalProfile {
  type: AnimalType;
  name: string;
  archetype: string;
  color: string;
  description: string;
  keyTraits: string;
  fear: string;
  motivation: string;
  teamRole: string;
  advice: string;
  imageUrl: string;
}

export type ScreenState = 'INTRO' | 'QUIZ' | 'RESULTS';