import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#4F46E5] mb-8 sm:mb-12">
        Frequently asked questions
      </h2>

      <div className="space-y-3 sm:space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-4 py-3 sm:px-6 sm:py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-opacity-50 hover:bg-gray-50 transition-colors"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="text-base sm:text-lg font-medium text-gray-900 pr-2 sm:pr-4">
                {item.question}
              </h3>
              <div className="flex-shrink-0 ml-2">
                {openIndex === index ? (
                  <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                ) : (
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                )}
              </div>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96 pb-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
