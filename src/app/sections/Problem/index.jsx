import React from "react";

const Problem = () => {
  return (
    <section className="problem py-20 text-center">
      <div>
        <h2 className="text-3xl font-bold mb-4">
          Stop spending hours gathering data 🤕
        </h2>
        <p className="text-xl">
          Product managers are drowning in scattered data. Your product's story is
          fragmented across Gmail, GitHub, Calendar, and Trello – and you're
          spending hours every week just trying to piece it together
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-8 mt-8">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">The Challenges</h3>
          <ul className="list-disc list-inside text-left">
            <li>Scattered data sources</li>
            <li>Time-consuming data gathering</li>
            <li>Inconsistent data formats</li>
            <li>Lack of real-time insights</li>
          </ul>
        </div>
        <div className="flex-1">
          <img src="/problem-image.png" alt="Problem illustration" className="mx-auto" />
        </div>
      </div>
      <div className="mt-8">
        <p className="text-xl">
        Meanwhile, decisions need to be made, stakeholders are waiting, and your valuable time is being wasted on dashboard setup instead of product strategy.        </p>
      </div>
    </section>
  );
};

export default Problem;
