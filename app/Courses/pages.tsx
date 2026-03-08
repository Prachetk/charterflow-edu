// app/courses/page.tsx
import CourseCard from "../components/CourseCard";

export default function Courses() {
  const courses = [
    { title: "Financial Reporting (FR)", short: "Examiner-focused coverage with past paper walkthroughs", price: "₹4,499", href: "/courses/fr" },
    { title: "Audit & Assurance (AA)", short: "Technique-led live examples", price: "₹4,499", href: "/courses/aa" },
    { title: "Performance Management (PM)", short: "Practical solved problems", price: "₹4,499", href: "/courses/pm" },
    { title: "Taxation (TX)", short: "India context & IFRS crosswalks", price: "₹4,499", href: "/courses/tx" },
    { title: "Financial Management (FM)", short: "Exam pacing and calculations", price: "₹4,499", href: "/courses/fm" },
    { title: "Foundation Bundle", short: "All Applied Knowledge papers — complete bundle", price: "₹14,999", href: "/courses/foundation" },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold">Courses</h1>
        <p className="mt-2 text-slate-600">Choose the paper you want to master. FR is our recommended starting point.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.title} title={c.title} short={c.short} price={c.price} href={c.href} />
          ))}
        </div>
      </div>
    </div>
  );
}