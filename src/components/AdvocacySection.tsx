import QuestionSection from "./QuestionSection";
import questionData from "@/lib/questionData";

export default function AdvocacySection() {
  return (
    <div>
      {questionData.map((questionSet, index) => (
        <QuestionSection key={index} questionSet={questionSet} />
      ))}
    </div>
  );
}
