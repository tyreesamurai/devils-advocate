type sectionData = {
  topic: string;
  questions: question[];
  source: string;
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
