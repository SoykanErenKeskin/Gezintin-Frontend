"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "Gezinti nasıl çalışıyor?",
    answer:
      "Gezinti, size en iyi rotaları sunarak planlamasız keşif yapmanıza yardımcı olur.",
  },
  {
    question: "Rotamı kişiselleştirebilir miyim?",
    answer: "Evet! Kendi ilgi alanlarınıza göre rotalar oluşturabilirsiniz.",
  },
  {
    question: "Kayıt olmak zorunda mıyım?",
    answer:
      "Hayır, kayıt olmadan da gezintiler oluşturabilirsiniz ancak kayıtlı kullanıcılar ek özelliklere erişebilir.",
  },
  {
    question: "Gezinti ücretli mi?",
    answer: "Hayır, temel gezinti özellikleri tamamen ücretsizdir!",
  },
];

const Faqui = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const ToggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mt-12 mb-10">
        Sıkça Sorulan Sorular
      </h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-text-secondary/20 rounded-2xl shadow-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-white text-left bg-secondary dark:bg-gray-800 hover:bg-secondary/80 dark:hover:bg-gray-700 transition cursor-pointer"
              onClick={() => ToggleFAQ(index)}
            >
              <span className="font-medium">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqui;
