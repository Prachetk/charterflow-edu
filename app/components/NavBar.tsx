import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <div className="text-lg font-bold">CharterFlow Edu</div>

      <div className="flex gap-6 text-sm">

        <Link href="/acca">ACCA</Link>

        <Link href="/courses">Courses</Link>

        <Link href="/pricing">Pricing</Link>

        <Link href="/blog">Blog</Link>

        <Link href="/about">About</Link>

      </div>

      <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
        Enroll Now
      </button>
    </nav>
  );
}