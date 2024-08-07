import { useState } from "react";
import BarChart from "./BarChart";

interface QuestionProps {
  questionData: QuestionData;
  actualData: ChartData;
}

interface QuestionData {
  question: string;
  answers: string[];
  chartData: ChartData;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
}

const Question: React.FC<QuestionProps> = ({ questionData, actualData }) => {
  const [guesses, setGuesses] = useState<number[]>(
    questionData.answers.map(() => 0),
  );
  const [showActual, setShowActual] = useState(false);

  const handleGuessChange = (newGuesses: number[]) => {
    setGuesses(newGuesses);
  };

  const handleShowActual = () => {
    setShowActual(true);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">{questionData.question}</h2>
      <BarChart
        data={questionData.chartData}
        onGuessChange={handleGuessChange}
      />
      {showActual && <BarChart data={actualData} onGuessChange={() => {}} />}
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleShowActual}
      >
        Show Actual
      </button>
    </div>
  );
};

export default Question;
