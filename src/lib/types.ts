type sectionData = {
  topic: string;
  questions: question[];
};

type question = {
  text: string;
  answers: answer[];
};

type answer = {
  text: string;
  data: number;
};

export default sectionData;
