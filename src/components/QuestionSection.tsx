"use client";
import questionData from "@/lib/types";
import React, { useState } from "react";

export default function QuestionSection(props: { questionSet: questionData }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

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
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsFinished(true);
        }
      }, 300);
    }
  };

  return (
    <div className="p-4 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">{topic}</h1>
      <div
        className={`w-full max-w-md p-4 bg-gray-700 rounded-lg shadow-md transition-opacity duration-300 ${
          transitioning ? "opacity-50" : "opacity-100"
        }`}
      >
        {isFinished ? (
          <div>
            <h1>You&apos;re done now!</h1>
          </div>
        ) : (
          currentQuestion && (
            <div>
              <h2 className="text-xl font-semibold mb-2">
                {currentQuestion.text}
              </h2>
              <div className="space-y-2">
                {currentQuestion.answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelection(answer.text)}
                    disabled={transitioning}
                    className={`w-full px-3 py-2 rounded ${
                      answer.text === selectedAnswer
                        ? "bg-blue-600 text-white"
                        : "bg-blue-400 text-white hover:bg-blue-500"
                    }`}
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null || transitioning}
                className={`mt-4 w-full px-4 py-2 rounded ${
                  selectedAnswer === null || transitioning
                    ? "bg-gray-400 text-white"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                Next
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
