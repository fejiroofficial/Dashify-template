import React from "react";
import Card from "../../components/Card";

const Solution = () => {
  return (
    <section className="solution py-20 text-center">
      <p className="text-sm text-gray-500 mb-2">
        TELL AI WHAT YOU NEED TO KNOW 💡
      </p>
      <h2 className="text-3xl font-bold mb-4">
        Build headache-free dashboards with Dashify{" "}
      </h2>
      <p className="text-xl mb-8">
        Watch as your scattered data transforms into clear, actionable insights.
        No code. No waiting. No hassle{" "}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Card imageSrc="/feature1.png" title="Feature 1" subtext="Description of feature 1" />
        <Card imageSrc="/feature2.png" title="Feature 2" subtext="Description of feature 2" />
        <Card imageSrc="/feature3.png" title="Feature 3" subtext="Description of feature 3" />
        <Card imageSrc="/feature4.png" title="Feature 4" subtext="Description of feature 4" />
      </div>
    </section>
  );
};

export default Solution;
