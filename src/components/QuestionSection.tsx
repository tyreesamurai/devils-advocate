"use client";
import questionData from "@/lib/types";
import React, { useState } from "react";

export default function QuestionSection(props: { questionSet: questionData }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const { topic, questions } = props.questionSet;

  const currentQuestion = questions[currentQuestionIndex];

  function handleAnswerSelection(answer: string) {
    setSelectedAnswer((prevSelectedAnswer) =>
      prevSelectedAnswer === answer ? null : answer,
    );
  }

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      setTransitioning(true);
      setTimeout(() => {
        setTransitioning(false);
        setSelectedAnswer(null);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }, 300);
    }
  };

  return (
    <div className="p-6 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">{topic}</h1>
      <div
        className={`w-full max-w-md p-6 bg-white rounded-lg shadow-lg transition-opacity duration-300 ${
          transitioning ? "opacity-50" : "opacity-100"
        }`}
      >
        {currentQuestion && (
          <div>
            <h2 className="text-xl  font-semibold mb-4">
              {currentQuestion.text}
            </h2>
            <div className="space-y-2">
              {currentQuestion.answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelection(answer.text)}
                  disabled={transitioning}
                  className={`w-full px-4 py-2 rounded-lg text-white font-medium ${
                    transitioning
                      ? "bg-gray-300"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  {answer.text}
                </button>
              ))}
            </div>
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null || transitioning}
              className={`mt-4 w-full px-4 py-2 rounded-lg text-white font-medium ${
                selectedAnswer === null || transitioning
                  ? "bg-gray-300"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
