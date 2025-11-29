import { Part2Question, Part3Question } from './types';

// Audio Source URLs
export const PART2_AUDIO_SRC = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2220944300&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
export const PART3_AUDIO_SRC = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2220951827&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";

export const PART2_DATA: Part2Question[] = [
  {
    id: 8,
    context: "You will hear a man talking to his wife about a podcast.",
    questionText: "The man thinks",
    options: [
      { id: 'A', text: "their daughter wouldn’t enjoy it." },
      { id: 'B', text: "it would be useful for their daughter’s studies." },
      { id: 'C', text: "it’s free." }
    ],
    correctAnswer: 'C'
  },
  {
    id: 9,
    context: "You will hear two friends talking about a new mobile phone.",
    questionText: "The woman says",
    options: [
      { id: 'A', text: "it’s not much better than her last one." },
      { id: 'B', text: "it doesn’t seem to be working properly." },
      { id: 'C', text: "the screen is damaged." }
    ],
    correctAnswer: 'A'
  },
  {
    id: 10,
    context: "You will hear a woman talking to her husband about washing clothes.",
    questionText: "The man says the washing machine",
    options: [
      { id: 'A', text: "could be fixed quite cheaply." },
      { id: 'B', text: "has never worked properly." },
      { id: 'C', text: "doesn’t need replacing." }
    ],
    correctAnswer: 'B'
  },
  {
    id: 11,
    context: "You will hear two friends talking about living in the countryside.",
    questionText: "What does the woman say?",
    options: [
      { id: 'A', text: "It would be good for her health." },
      { id: 'B', text: "It’s difficult to do your shopping." },
      { id: 'C', text: "It can feel lonely." }
    ],
    correctAnswer: 'C'
  },
  {
    id: 12,
    context: "You will hear two friends talking about travelling by plane.",
    questionText: "The man thinks",
    options: [
      { id: 'A', text: "we should take more holidays at home." },
      { id: 'B', text: "flights are too expensive." },
      { id: 'C', text: "flying is faster than going by train." }
    ],
    correctAnswer: 'A'
  },
  {
    id: 13,
    context: "You will hear two friends talking about a local businesswoman.",
    questionText: "What does the man say about her?",
    options: [
      { id: 'A', text: "She is looking for a business partner." },
      { id: 'B', text: "She supports local businesses." },
      { id: 'C', text: "She is thinking of opening a new shop." }
    ],
    correctAnswer: 'B'
  }
];

export const PART3_DATA: Part3Question[] = [
  {
    id: 14,
    preText: "At this Thursday’s ‘Special Buy’ day you can get something for your",
    postText: ".",
    correctAnswers: ["pet"]
  },
  {
    id: 15,
    preText: "There are jobs available for trainee managers and",
    postText: ".",
    correctAnswers: ["cleaners"]
  },
  {
    id: 16,
    preText: "Collect a",
    postText: "by the exit for information about how to apply.",
    correctAnswers: ["magazine"]
  },
  {
    id: 17,
    preText: "On Friday the supermarket will open until",
    postText: ".",
    correctAnswers: ["10.30", "10.30 pm", "22:00"]
  },
  {
    id: 18,
    preText: "This month Milburn’s are supporting the local Arts Project and",
    postText: "Group.",
    correctAnswers: ["Children’s Theatre", "children’s theatre"]
  },
  {
    id: 19,
    preText: "You will be given a",
    postText: "when you pay to show your support.",
    correctAnswers: ["ticket"]
  }
];