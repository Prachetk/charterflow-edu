/**
 * Courses Page - CharterFlow Edu
 * 
 * Displays available ACCA courses with animations:
 * - Course card entrance animations
 * - Hover effects with depth
 * - Filter animations
 * - Smooth transitions
 */

import { motion } from "framer-motion";
import { useState } from "react";
import { ScrollReveal, AnimatedButton } from "@/components/animations";
import { useStaggerAnimation } from "@/hooks/animations";
import { easing, duration } from "@/lib/easing";

interface Course {
  id: string;
  title: string;
  code: string;
  description: string;
  duration: string;
  lessons: number;
  students: number;
  rating: number;
  price: number;
  category: "foundation" | "intermediate" | "advanced";
  icon: string;
}

const courses: Course[] = [
  {
    id: "1",
    title: "Foundations of Accounting",
    code: "FAC",
    description: "Learn the fundamentals of accounting principles and practices",
    duration: "8 weeks",
    lessons: 24,
    students: 1200,
    rating: 4.8,
    price: 4999,
    category: "foundation",
    icon: "📊",
  },
  {
    id: "2",
    title: "Management Accounting",
    code: "MA",
    description: "Master cost accounting and management decision-making",
    duration: "10 weeks",
    lessons: 28,
    students: 950,
    rating: 4.9,
    price: 5999,
    category: "intermediate",
    icon: "💼",
  },
  {
    id: "3",
    title: "Financial Accounting",
    code: "FA",
    description: "Comprehensive guide to financial reporting and analysis",
    duration: "12 weeks",
    lessons: 32,
    students: 1100,
    rating: 4.7,
    price: 6999,
    category: "intermediate",
    icon: "💰",
  },
  {
    id: "4",
    title: "Audit and Assurance",
    code: "AA",
    description: "Deep dive into audit procedures and assurance standards",
    duration: "10 weeks",
    lessons: 26,
    students: 800,
    rating: 4.8,
    price: 5999,
    category: "advanced",
    icon: "✓",
  },
  {
    id: "5",
    title: "Tax Compliance",
    code: "TX",
    description: "Navigate Indian tax laws and compliance requirements",
    duration: "8 weeks",
    lessons: 22,
    students: 700,
    rating: 4.6,
    price: 4999,
    category: "advanced",
    icon: "📋",
  },
  {
    id: "6",
    title: "Strategic Business",
    code: "SBL",
    description: "Strategic planning and business analysis for success",
    duration: "14 weeks",
    lessons: 36,
    students: 600,
    rating: 4.9,
    price: 7999,
    category: "advanced",
    icon: "🎯",
  },
];

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { containerVariants, itemVariants } = useStaggerAnimation(0.08, 0.05);

  const filteredCourses = selectedCategory
    ? courses.filter((c) => c.category === selectedCategory)
    : courses;

  const categories = [
    { id: "foundation", label: "Foundation" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-600 to-amber-700">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto text-center text-white"
        >
          <h1 className="text-5xl font-bold mb-4">ACCA Courses</h1>
          <p className="text-xl text-amber-50">
            Comprehensive curriculum designed for success
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-lg font-semibold text-gray-900 mb-6"
          >
            Filter by Level
          </motion.h3>

          <motion.div
            className="flex flex-wrap gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              variants={itemVariants}
              onClick={() => setSelectedCategory(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === null
                  ? "bg-amber-600 text-white"
                  : "bg-gray-200 text-gray-900 hover:bg-gray-300"
              }`}
            >
              All Courses
            </motion.button>

            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                variants={itemVariants}
                onClick={() => setSelectedCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-amber-600 text-white"
                    : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: duration.micro }}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-amber-600 transition-colors"
              >
                {/* Course Header */}
                <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-gray-200">
                  <div className="text-4xl mb-3">{course.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {course.title}
                  </h3>
                  <p className="text-sm font-semibold text-amber-600">
                    {course.code}
                  </p>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-6">{course.description}</p>

                  {/* Course Stats */}
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex justify-between text-gray-700">
                      <span>Duration</span>
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Lessons</span>
                      <span className="font-semibold">{course.lessons}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Students</span>
                      <span className="font-semibold">{course.students}+</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Rating</span>
                      <span className="font-semibold">⭐ {course.rating}</span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="text-2xl font-bold text-amber-600 mb-4">
                      ₹{course.price.toLocaleString()}
                    </div>
                    <AnimatedButton variant="primary" size="md" className="w-full">
                      Enroll Now
                    </AnimatedButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">
                No courses found in this category
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-amber-700">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-6">Need Help Choosing?</h2>
          <p className="text-xl mb-8 text-amber-50">
            Our course advisors can help you select the perfect learning path
          </p>
          <AnimatedButton variant="outline" size="lg">
            Schedule a Consultation
          </AnimatedButton>
        </motion.div>
      </section>
    </div>
  );
}
