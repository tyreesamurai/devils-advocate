import questionData from "@/lib/types";

export default function QuestionSection(props: { questionSet: questionData }) {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <h1>{props.questionSet.topic}</h1>
    </div>
  );
}
