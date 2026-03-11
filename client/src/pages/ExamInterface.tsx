/**
 * CBE Exam Interface - CharterFlow Edu
 * 
 * Computer-Based Exam interface with animations:
 * - Question transitions
 * - Progress bar animations
 * - Answer selection feedback
 * - Timer with smooth counting
 */

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { AnimatedButton, ProgressBar } from "@/components/animations";
import { duration } from "@/lib/easing";

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    text: "What is the primary objective of financial accounting?",
    options: [
      "To maximize profits",
      "To provide financial information to users",
      "To reduce taxes",
      "To increase employee salaries",
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    text: "Which of the following is an asset?",
    options: [
      "Accounts Payable",
      "Rent Expense",
      "Cash",
      "Revenue",
    ],
    correctAnswer: 2,
  },
  {
    id: 3,
    text: "What does ACCA stand for?",
    options: [
      "Association of Chartered Certified Accountants",
      "American Certified Accounting Association",
      "Accounting and Compliance Council",
      "Advanced Certification in Corporate Accounting",
    ],
    correctAnswer: 0,
  },
];

export default function ExamInterface() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(sampleQuestions.length).fill(null)
  );
  const [timeRemaining, setTimeRemaining] = useState(3600);
  const [showResults, setShowResults] = useState(false);

  const question = sampleQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / sampleQuestions.length) * 100;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSelectAnswer = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const correctAnswers = selectedAnswers.filter(
    (answer, index) => answer === sampleQuestions[index].correctAnswer
  ).length;

  const score = Math.round((correctAnswers / sampleQuestions.length) * 100);

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-12 max-w-md text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-6xl font-bold text-amber-600 mb-4"
          >
            {score}%
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Exam Complete!</h2>
          <p className="text-gray-600 mb-6">
            You answered {correctAnswers} out of {sampleQuestions.length} questions correctly.
          </p>
          <AnimatedButton variant="primary" size="lg" className="w-full">
            Review Answers
          </AnimatedButton>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">ACCA Exam</h1>
            <p className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {sampleQuestions.length}
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-amber-600 font-mono">
              {formatTime(timeRemaining)}
            </div>
            <p className="text-sm text-gray-600">Time Remaining</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto px-4 pb-4">
          <ProgressBar progress={progress} height="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Question */}
            <div className="bg-white rounded-lg p-8 mb-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {question.text}
              </h2>

              {/* Options */}
              <div className="space-y-4">
                {question.options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleSelectAnswer(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      selectedAnswers[currentQuestion] === index
                        ? "border-amber-600 bg-amber-50"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedAnswers[currentQuestion] === index
                            ? "border-amber-600 bg-amber-600"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedAnswers[currentQuestion] === index && (
                          <span className="text-white text-sm">✓</span>
                        )}
                      </div>
                      <span className="text-gray-900 font-medium">{option}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 justify-between"
        >
          <AnimatedButton
            variant="outline"
            size="lg"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </AnimatedButton>

          <div className="flex gap-2">
            {sampleQuestions.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                  index === currentQuestion
                    ? "bg-amber-600 text-white"
                    : selectedAnswers[index] !== null
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-900"
                }`}
              >
                {index + 1}
              </motion.button>
            ))}
          </div>

          <AnimatedButton
            variant="primary"
            size="lg"
            onClick={handleNext}
          >
            {currentQuestion === sampleQuestions.length - 1
              ? "Submit Exam"
              : "Next"}
          </AnimatedButton>
        </motion.div>
      </div>
    </div>
  );
}
