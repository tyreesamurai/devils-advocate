import sectionData from "./types";

const questionData: sectionData[] = [
  {
    topic: "Family and Relationships",
    questions: [
      {
        question:
          "Have you ever been a parent or guardian to any children, living or deceased, including any biological or adopted children?",
        answers: [
          { answer: "Yes", answerData: 0 },
          { answer: "No", answerData: 100 },
          { answer: "No Answer", answerData: 0 },
        ],
      },
      {
        question:
          "Thinking about the future, how likely is it that you will have children someday?",
        answers: [
          { answer: "Very likely", answerData: 0 },
          { answer: "Somewhat likely", answerData: 0 },
          { answer: "Not too likely", answerData: 46 },
          { answer: "Not at all likely", answerData: 54 },
          { answer: "No Answer", answerData: 0 },
        ],
      },
      {
        question: "Which of these best describes your current marital status?",
        answers: [
          { answer: "Married", answerData: 25 },
          { answer: "Divorced", answerData: 3 },
          { answer: "Separated", answerData: 1 },
          { answer: "Widowed", answerData: 0 },
          { answer: "Never been married", answerData: 41 },
          { answer: "No Answer", answerData: 0 },
        ],
      },
      {
        question: "Are you currently in a committed romantic relationship?",
        answers: [
          { answer: "Yes", answerData: 34 },
          { answer: "No", answerData: 66 },
          { answer: "No Answer", answerData: 0 },
        ],
      },
      {
        question:
          "Which of these best describes what you are looking for right now?",
        answers: [
          { answer: "A committed romantic relationship only", answerData: 16 },
          { answer: "Casual dates only", answerData: 6 },
          {
            answer: "Either a committed romantic relationship or casual dates",
            answerData: 26,
          },
          {
            answer: "Not currently looking for a relationship or casual dates",
            answerData: 52,
          },
          { answer: "No Answer", answerData: 0 },
        ],
      },
      {
        question: "Do you have a living parent?",
        answers: [
          { answer: "Yes", answerData: 94 },
          { answer: "No", answerData: 6 },
          { answer: "No Answer", answerData: 0 },
        ],
      },
      {
        question: "What is your current work situation?",
        answers: [
          { answer: "Work full time for pay", answerData: 65 },
          { answer: "Work part time for pay", answerData: 17 },
          { answer: "Not currently working for pay", answerData: 10 },
          { answer: "Unable to work due to a disability", answerData: 8 },
          { answer: "Retired", answerData: 1 },
          { answer: "No Answer", answerData: 0 },
        ],
      },
      {
        question:
          "In general, what type of impact do you think the fact that you're unlikely to have children has had on your dating life?",
        answers: [
          { answer: "Very positive", answerData: 2 },
          { answer: "Somewhat positive", answerData: 6 },
          { answer: "Neither positive nor negative", answerData: 78 },
          { answer: "Somewhat negative", answerData: 11 },
          { answer: "Very negative", answerData: 3 },
          { answer: "No Answer", answerData: 0 },
        ],
      },
    ],
  },
  {
    topic: "To Be Determined",
    questions: [],
  },
  {
    topic: "Question 3",
    questions: [],
  },
  {
    topic: "To Be Determined",
    questions: [],
  },
  {
    topic: "Works",
    questions: [],
  },
];

export default questionData;
