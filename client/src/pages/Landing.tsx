/**
 * Landing Page - CharterFlow Edu
 * 
 * Features Apple-level animations:
 * - Parallax hero section
 * - Staggered text reveals
 * - Scroll-linked animations
 * - Animated stat counters
 * - Interactive pricing cards
 * 
 * Educational Note: This page demonstrates how to compose multiple
 * animation components and hooks to create a cohesive, premium experience.
 */

import { motion } from "framer-motion";
import {
  ScrollReveal,
  ScrollRevealGroup,
  ParallaxSection,
  AnimatedButton,
  AnimatedCounter,
  StatCard,
  LoadingSpinner,
} from "@/components/animations";
import { useStaggerAnimation } from "@/hooks/animations";
import { easing, duration } from "@/lib/easing";

export default function Landing() {
  const { containerVariants, itemVariants } = useStaggerAnimation(0.1, 0.05);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section with Parallax */}
      <ParallaxSection
        backgroundColor="#1A1612"
        intensity={0.3}
        minHeight="100vh"
        className="flex items-center justify-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center text-white max-w-4xl mx-auto px-4"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 font-serif"
          >
            Master ACCA Exams
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
          >
            Premium exam preparation platform designed for Indian students
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center flex-wrap"
          >
            <AnimatedButton variant="primary" size="lg">
              Start Learning
            </AnimatedButton>
            <AnimatedButton variant="outline" size="lg">
              Watch Demo
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </ParallaxSection>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16 text-gray-900"
          >
            Trusted by Thousands
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              label="Active Students"
              value={5000}
              suffix="+"
              icon="👥"
              description="Learning with CharterFlow"
            />
            <StatCard
              label="Success Rate"
              value={95}
              suffix="%"
              icon="✓"
              description="Students pass their exams"
            />
            <StatCard
              label="Study Hours"
              value={100000}
              suffix="+"
              icon="⏱"
              description="Completed on platform"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16 text-gray-900"
          >
            Why Choose CharterFlow
          </motion.h2>

          <ScrollRevealGroup animation="slideUp" staggerDelay={0.15}>
            {[
              {
                title: "Live Classes",
                description: "Interactive sessions with expert ACCA instructors",
                icon: "🎓",
              },
              {
                title: "Practice Tests",
                description: "Unlimited mock exams with detailed solutions",
                icon: "📝",
              },
              {
                title: "Study Materials",
                description: "Comprehensive notes and video lectures",
                icon: "📚",
              },
              {
                title: "Progress Tracking",
                description: "Real-time analytics and performance insights",
                icon: "📊",
              },
              {
                title: "Expert Support",
                description: "24/7 doubt resolution from ACCA professionals",
                icon: "💬",
              },
              {
                title: "Flexible Learning",
                description: "Learn at your own pace, anytime, anywhere",
                icon: "⚡",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-lg bg-white border border-gray-200 hover:border-amber-600 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16 text-gray-900"
          >
            Simple, Transparent Pricing
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "₹999",
                period: "/month",
                features: [
                  "Access to study materials",
                  "5 mock exams per month",
                  "Email support",
                  "Mobile app access",
                ],
                highlighted: false,
              },
              {
                name: "Professional",
                price: "₹1999",
                period: "/month",
                features: [
                  "Everything in Starter",
                  "Unlimited mock exams",
                  "Live class access",
                  "Priority support",
                  "Performance analytics",
                ],
                highlighted: true,
              },
              {
                name: "Premium",
                price: "₹2999",
                period: "/month",
                features: [
                  "Everything in Professional",
                  "1-on-1 mentoring",
                  "Doubt resolution",
                  "Personalized study plan",
                  "Exam guarantee",
                ],
                highlighted: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`p-8 rounded-lg border-2 transition-all ${
                  plan.highlighted
                    ? "border-amber-600 bg-amber-50 shadow-lg"
                    : "border-gray-200 bg-white"
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-amber-600">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <span className="text-amber-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <AnimatedButton
                  variant={plan.highlighted ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </AnimatedButton>
              </motion.div>
            ))}
          </div>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Excel?</h2>
          <p className="text-xl mb-8 text-amber-50">
            Join thousands of students preparing for ACCA success
          </p>
          <AnimatedButton variant="outline" size="lg">
            Start Your Free Trial
          </AnimatedButton>
        </motion.div>
      </section>
    </div>
  );
}
