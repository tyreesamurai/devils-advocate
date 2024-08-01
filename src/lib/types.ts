type sectionData = {
  topic: string;
  questions: question[];
};

type question = {
  question: string;
  answers: answer[];
};

type answer = {
  answer: string;
  answerData: number;
};

export default sectionData;
