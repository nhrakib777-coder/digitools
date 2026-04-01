import React from "react";

const Explore = () => {
  return (
    <section className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-16 my-20">

      <div className="max-w-6xl mx-auto text-center px-4 space-y-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Transform Your Workflow?
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base opacity-90">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br className="hidden md:block" />
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

          <button className="bg-white text-purple-600 hover:bg-gray-200 font-semibold rounded-full py-2 px-6 transition">
            Explore Products
          </button>

          <button className="border border-white rounded-full hover:bg-white hover:text-purple-600 py-2 px-6 transition">
            View Pricing
          </button>

        </div>

        {/* Footer text */}
        <p className="text-sm opacity-80">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>

    </section>
  );
};

export default Explore;