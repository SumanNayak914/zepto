import React from "react";

const steps = [
  {
    id: 1,
    title: "Open the app",
    desc: "Choose from over 7000 products across groceries, fresh fruits & veggies, meat, pet care, beauty items & more",
    img: "https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.10.1/images/pdp/place-order.svg",
  },
  {
    id: 2,
    title: "Place an order",
    desc: "Add your favourite items to the cart & avail the best offers",
    img: "https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.10.1/images/pdp/do-not-blink.svg",
  },
  {
    id: 3,
    title: "Get free delivery",
    desc: "Experience lighting-fast speed & get all your items delivered in 10 minutes",
    img: "https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.10.1/images/pdp/enjoy.svg",
  },
];

function StepCard({ img, title, desc }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition duration-300 md:block flex flex-row items-center space-x-4">
      <img src={img} alt={title} className="w-20 h-20 flex-shrink-0 md:mx-auto md:mb-4" />
      <div className="md:text-center">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">How it Works</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <StepCard key={step.id} {...step} />
        ))}
      </div>
    </div>
  );
}