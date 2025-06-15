
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQItem[];
  className?: string;
}

const FAQSection = ({ 
  title = "Questions fréquentes", 
  faqs, 
  className = "" 
}: FAQSectionProps) => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>

      <section className={`py-20 bg-gray-50 ${className}`}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-primary font-medium text-sm mb-4">
              FAQ
            </span>
            <h2 className="font-bold font-montserrat text-3xl md:text-4xl mb-5 text-[#212121]">
              {title}
            </h2>
            <p className="text-gray-600 font-opensans max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus fréquentes sur nos services de réfrigération et climatisation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left py-6 hover:no-underline group">
                    <span className="font-semibold font-montserrat text-gray-900 group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-0">
                    <p className="text-gray-600 font-opensans leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
