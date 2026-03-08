export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold">Pricing</h1>

      <p className="mt-4 text-gray-600">
        Transparent pricing. World-class ACCA preparation without ₹1 lakh coaching fees.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="border p-6 rounded-lg">
          <h2 className="font-semibold text-xl">Foundation Bundle</h2>
          <p className="mt-2 text-gray-600">All Applied Knowledge papers</p>
          <div className="text-3xl font-bold mt-4">₹14,999</div>
        </div>

        <div className="border p-6 rounded-lg">
          <h2 className="font-semibold text-xl">Skill Papers</h2>
          <p className="mt-2 text-gray-600">Per ACCA paper</p>
          <div className="text-3xl font-bold mt-4">₹4,499</div>
        </div>

        <div className="border p-6 rounded-lg">
          <h2 className="font-semibold text-xl">Membership</h2>
          <p className="mt-2 text-gray-600">Tutor support + strategy calls</p>
          <div className="text-3xl font-bold mt-4">₹599 / month</div>
        </div>

      </div>
    </div>
  );
}