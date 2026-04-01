import React from "react";
import person from "../../assets/user.png";
import box from "../../assets/package.png";
import rocket from "../../assets/rocket.png";

const stepsData = [
  {
    id: "01",
    title: "Create Account",
    text: "Sign up for free in seconds. No credit card required to get started.",
    img: person
  },
  {
    id: "02",
    title: "Choose Products",
    text: "Browse our catalog and select the tools that fit your needs.",
    img: box
  },
  {
    id: "03",
    title: "Start Creating",
    text: "Download and start using your premium tools immediately.",
    img: rocket
  }
];

function Steps() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {stepsData.map((step) => (
          <div
            key={step.id}
            className="card bg-white shadow-md hover:shadow-xl transition-all duration-300"
          >

            {/* Badge */}
            <div className="relative">
              <span className="absolute top-4 right-4 badge bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full text-sm px-2">
                {step.id}
              </span>
            </div>

            <div className="card-body text-center space-y-3">

              {/* Icon */}
              <img
                className="w-16 h-16 mx-auto bg-[#E1E7FF] rounded-full p-3"
                src={step.img}
                alt={step.title}
              />

              {/* Title */}
              <h2 className="text-[#101727] text-xl font-bold">
                {step.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-[#627382]">
                {step.text}
              </p>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Steps;