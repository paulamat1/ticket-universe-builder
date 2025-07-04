
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is included in the ticket price?",
      answer: "Your ticket includes access to all sessions, networking breaks, lunch, and event materials. Some premium workshops may require additional fees."
    },
    {
      question: "Can I get a refund if I can't attend?",
      answer: "Refunds are available up to 48 hours before the event. After that, you can transfer your ticket to someone else."
    },
    {
      question: "Is there parking available?",
      answer: "Most venues offer parking, but we recommend using public transportation. Detailed venue information will be sent before each event."
    },
    {
      question: "What should I bring to the events?",
      answer: "Bring your laptop for workshops, business cards for networking, and comfortable shoes. We'll provide all other necessary materials."
    },
    {
      question: "Are the events beginner-friendly?",
      answer: "We offer events for all skill levels. Check the event description for difficulty level and prerequisites."
    }
  ];

  return (
    <section className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-[#333]">
                <AccordionTrigger className="text-left text-white hover:text-[#00ff88]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
