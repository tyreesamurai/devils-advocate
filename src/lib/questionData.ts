import sectionData from "./types";

const questionData: sectionData[] = [
  {
    topic: "Family and Relationships",
    questions: [
      {
        text: "Have you ever been a parent or guardian to any children, living or deceased, including any biological or adopted children?",
        answers: [
          { text: "Yes", data: 0 },
          { text: "No", data: 100 },
          { text: "No Answer", data: 0 },
        ],
      },
      {
        text: "Thinking about the future, how likely is it that you will have children someday?",
        answers: [
          { text: "Very likely", data: 0 },
          { text: "Somewhat likely", data: 0 },
          { text: "Not too likely", data: 46 },
          { text: "Not at all likely", data: 54 },
          { text: "No Answer", data: 0 },
        ],
      },
      {
        text: "Which of these best describes your current marital status?",
        answers: [
          { text: "Married", data: 25 },
          { text: "Divorced", data: 3 },
          { text: "Separated", data: 1 },
          { text: "Widowed", data: 0 },
          { text: "Never been married", data: 41 },
          { text: "No Answer", data: 0 },
        ],
      },
      {
        text: "Are you currently in a committed romantic relationship?",
        answers: [
          { text: "Yes", data: 34 },
          { text: "No", data: 66 },
          { text: "No Answer", data: 0 },
        ],
      },
      {
        text: "Which of these best describes what you are looking for right now?",
        answers: [
          { text: "A committed romantic relationship only", data: 16 },
          { text: "Casual dates only", data: 6 },
          {
            text: "Either a committed romantic relationship or casual dates",
            data: 26,
          },
          {
            text: "Not currently looking for a relationship or casual dates",
            data: 52,
          },
          { text: "No Answer", data: 0 },
        ],
      },
      {
        text: "Do you have a living parent?",
        answers: [
          { text: "Yes", data: 94 },
          { text: "No", data: 6 },
          { text: "No Answer", data: 0 },
        ],
      },
      {
        text: "What is your current work situation?",
        answers: [
          { text: "Work full time for pay", data: 65 },
          { text: "Work part time for pay", data: 17 },
          { text: "Not currently working for pay", data: 10 },
          { text: "Unable to work due to a disability", data: 8 },
          { text: "Retired", data: 1 },
          { text: "No Answer", data: 0 },
        ],
      },
      {
        text: "In general, what type of impact do you think the fact that you're unlikely to have children has had on your dating life?",
        answers: [
          { text: "Very positive", data: 2 },
          { text: "Somewhat positive", data: 6 },
          { text: "Neither positive nor negative", data: 78 },
          { text: "Somewhat negative", data: 11 },
          { text: "Very negative", data: 3 },
          { text: "No Answer", data: 0 },
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
