import questionData from "@/lib/questionData";
import QuestionSection from "@/components/QuestionSection";

export default function Page(params: { params: { topic: string } }) {
  const questionSet = questionData.find(
    (questionSet) =>
      questionSet.topic.trim() == params.params.topic.replaceAll("%20", " "),
  );

  if (!questionSet) {
    return <div>404</div>;
  }

  return <QuestionSection questionSet={questionSet} />;
}
