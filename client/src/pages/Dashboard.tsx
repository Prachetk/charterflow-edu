/**
 * Student Dashboard - CharterFlow Edu
 * 
 * Dashboard with animations:
 * - Card entrance animations
 * - Smooth data transitions
 * - Progress indicators
 * - Interactive charts
 */

import { motion } from "framer-motion";
import { ScrollRevealGroup, ProgressBar, AnimatedCounter } from "@/components/animations";
import { useStaggerAnimation } from "@/hooks/animations";

interface DashboardCard {
  title: string;
  value: string | number;
  icon: string;
  color: "amber" | "blue" | "green" | "purple";
  description?: string;
}

const dashboardCards: DashboardCard[] = [
  {
    title: "Courses Enrolled",
    value: 5,
    icon: "📚",
    color: "amber",
    description: "Active courses",
  },
  {
    title: "Study Hours",
    value: 156,
    icon: "⏱",
    color: "blue",
    description: "This month",
  },
  {
    title: "Tests Completed",
    value: 24,
    icon: "✓",
    color: "green",
    description: "Mock exams",
  },
  {
    title: "Current Score",
    value: "87%",
    icon: "📊",
    color: "purple",
    description: "Average",
  },
];

const colorMap = {
  amber: "bg-amber-100 text-amber-700",
  blue: "bg-blue-100 text-blue-700",
  green: "bg-green-100 text-green-700",
  purple: "bg-purple-100 text-purple-700",
};

export default function Dashboard() {
  const { containerVariants, itemVariants } = useStaggerAnimation(0.1, 0.05);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome back, Prachet!
            </h1>
            <p className="text-gray-600">
              Here's your learning progress and upcoming tasks
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {dashboardCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white rounded-lg border border-gray-200 p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`text-3xl p-3 rounded-lg ${colorMap[card.color]}`}>
                  {card.icon}
                </div>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">
                {card.title}
              </h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {card.value}
              </div>
              {card.description && (
                <p className="text-gray-500 text-xs">{card.description}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {/* Course Progress */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Course Progress
            </h2>

            <div className="space-y-6">
              {[
                { name: "Foundations of Accounting", progress: 85 },
                { name: "Management Accounting", progress: 60 },
                { name: "Financial Accounting", progress: 45 },
              ].map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-gray-900">{course.name}</h3>
                    <span className="text-sm font-semibold text-amber-600">
                      {course.progress}%
                    </span>
                  </div>
                  <ProgressBar progress={course.progress} height="h-2" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Upcoming
            </h2>

            <div className="space-y-4">
              {[
                { date: "Tomorrow", event: "Live Class - FAC" },
                { date: "In 3 days", event: "Mock Exam - MA" },
                { date: "In 7 days", event: "Assignment Due" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200"
                >
                  <p className="text-xs font-semibold text-amber-600 mb-1">
                    {item.date}
                  </p>
                  <p className="text-gray-900 font-medium">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg border border-gray-200 p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4">
            {[
              {
                action: "Completed mock exam",
                course: "Foundations of Accounting",
                time: "2 hours ago",
                score: "82%",
              },
              {
                action: "Watched lecture",
                course: "Management Accounting",
                time: "5 hours ago",
                score: null,
              },
              {
                action: "Completed assignment",
                course: "Financial Accounting",
                time: "1 day ago",
                score: "A",
              },
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-amber-600 transition-colors"
              >
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.course}</p>
                </div>
                <div className="text-right">
                  {activity.score && (
                    <p className="font-semibold text-amber-600">
                      {activity.score}
                    </p>
                  )}
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
