"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "Questions and concern 1?",
    answer:
      "We offer a 30-day return policy with a full refund if the product is unused and in its original packaging.",
  },
  {
    question: "Questions and concern 2?",
    answer:
      "Yes, we ship worldwide. Shipping fees may vary depending on your location.",
  },
  {
    question: "Questions and concern 3?",
    answer:
      "Once your order is shipped, you will receive a tracking number via email.",
  },
  {
    question: "Questions and concern 4?",
    answer:
      "Once your order is shipped, you will receive a tracking number via email.",
  },
  {
    question: "Questions and concern 5?",
    answer:
      "Once your order is shipped, you will receive a tracking number via email.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto flex flex-col justify-center items-center px-4 py-8" id="faq">
      <div className="flex flex-col mb-6">
        <h2 className="text-center mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-center font-medium text-[20px] md:text-base">
          If you need more help, contact us at customerhelp@cc.com
        </p>
      </div>

      <div className="border rounded-md">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300">
            <button
              className="w-full flex justify-between items-center p-4 text-left text-lg font-medium bg-[#E0E0E0] hover:bg-gray-200 transition-all text-[#000]"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-xl">
                {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="bg-white text-black p-4">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
