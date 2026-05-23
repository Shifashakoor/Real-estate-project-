import React, { useState } from 'react';
import Heading from './heading';
import Paragraph from './paragraph';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="border-b border-slate-200 last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-5 py-3 text-left hover:bg-slate-50 transition-all"
      >
        <Heading
          text={question}
          level="h6"
          className="text-[13px] font-semibold leading-5 text-[#000929]"
        />

        <span className="shrink-0 text-base font-semibold text-[#000929]">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen && (
        <article className="pb-4 pr-8">
          <Paragraph
            text={answer}
            className="text-xs leading-5 text-slate-500"
          />
        </article>
      )}
    </section>
  );
};

export default FaqItem;