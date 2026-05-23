import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';
import Button from '../../components/ui/button';
import FaqItem from '../../components/ui/faqItem';

const faqData = [
  {
    category: 'Buying & Investing',
    questions: [
      {
        q: 'What is the process of buying a property?',
        a: 'The process includes property selection, site visit, document verification, payment agreement, and final registry or transfer.',
      },
      {
        q: 'Do you help with property verification?',
        a: 'Yes, we help verify ownership documents, location details, and legal status before purchase.',
      },
      {
        q: 'Can I invest in property through installments?',
        a: 'Yes, selected properties are available on easy installment plans depending on the project and seller terms.',
      },
      {
        q: 'Is buying property a good investment?',
        a: 'Real estate can be a strong long-term investment, especially in high-demand locations with good development potential.',
      },
    ],
  },
  {
    category: 'Rentals & Security',
    questions: [
      {
        q: 'How much security deposit is required for rental properties?',
        a: 'Security deposit usually depends on the property and owner, but it is commonly equal to one or two months of rent.',
      },
      {
        q: 'When do I have to pay monthly rent?',
        a: 'Monthly rent is usually paid at the start of each month, based on the rental agreement.',
      },
      {
        q: 'Do you provide rental agreements?',
        a: 'Yes, we can assist with preparing a proper rental agreement between tenant and landlord.',
      },
      {
        q: 'Can I visit the property before renting?',
        a: 'Yes, you can schedule a property visit before making any final decision.',
      },
    ],
  },
  {
    category: 'Selling Your Property',
    questions: [
      {
        q: 'How can I list my property for sale?',
        a: 'You can share your property details, images, location, and expected price. Our team will review and list it.',
      },
      {
        q: 'Do you help in finding serious buyers?',
        a: 'Yes, we connect sellers with verified and interested buyers.',
      },
      {
        q: 'How do you decide the property price?',
        a: 'Property price is estimated based on location, market value, size, condition, and nearby property rates.',
      },
    ],
  },
  {
    category: 'Property Visits',
    questions: [
      {
        q: 'How can I book a property visit?',
        a: 'You can contact our team or click on the property detail page to schedule a visit.',
      },
      {
        q: 'Are property visits free?',
        a: 'Most property visits are free, but it may depend on the location and type of property.',
      },
      {
        q: 'Can I visit multiple properties in one day?',
        a: 'Yes, our team can arrange multiple visits based on availability and location.',
      },
    ],
  },
  {
    category: 'Payments & Documentation',
    questions: [
      {
        q: 'What documents are required to buy a property?',
        a: 'Usually CNIC, payment proof, sale agreement, ownership documents, and transfer papers are required.',
      },
      {
        q: 'Is token money refundable?',
        a: 'Token refund depends on the agreement between buyer and seller. Always confirm the terms before paying.',
      },
      {
        q: 'Do you assist with registry or transfer process?',
        a: 'Yes, we guide clients through the registry, transfer, and documentation process.',
      },
    ],
  },
  {
    category: 'Home Loans & Financing',
    questions: [
      {
        q: 'Do you help with home loans?',
        a: 'Yes, we can guide you about available financing options through partner banks or financial institutions.',
      },
      {
        q: 'Can I buy a house on monthly installments?',
        a: 'Yes, some projects and properties offer installment-based payment plans.',
      },
      {
        q: 'What is the minimum down payment required?',
        a: 'Down payment depends on the project, property value, and financing plan.',
      },
    ],
  },
  {
    category: 'General Information',
    questions: [
      {
        q: 'How can I contact your real estate team?',
        a: 'You can contact us through the Get in touch button, phone number, or contact form on our website.',
      },
      {
        q: 'Do you deal in residential and commercial properties?',
        a: 'Yes, we deal in houses, apartments, plots, offices, shops, and commercial buildings.',
      },
      {
        q: 'Which areas do you cover?',
        a: 'We cover selected high-demand areas and can guide you based on your preferred location.',
      },
    ],
  },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [openCat, setOpenCat] = useState<string | null>('Buying & Investing');

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <Container
      as="section"
      clean={true}
      className="w-full min-h-screen bg-[#f4f4f4] px-4 py-12"
    >
      <Container
        clean={true}
        className="mx-auto max-w-[760px] rounded-2xl bg-white px-9 py-8 shadow-sm max-sm:px-5"
      >
        <Container clean={true} className="mb-8 text-center">
          <Heading
            text="FAQS"
            level="h2"
            className="font-extrabold text-[#000929]"
          />

          <Paragraph
            text="Have a question? We are here to help!"
            className="mt-2 text-sm text-slate-500"
          />
        </Container>

        <Container clean={true}>
          {faqData.map((section) => (
            <section
              key={section.category}
              className="border-b border-[#0f8aa8]"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenCat(openCat === section.category ? null : section.category)
                }
                className="flex w-full items-center justify-between py-4 text-left"
              >
                <Heading
                  text={section.category}
                  level="h6"
                  className="text-sm font-bold text-[#000929]"
                />

                <span className="text-base font-bold text-[#000929]">
                  {openCat === section.category ? '⌃' : '⌄'}
                </span>
              </button>

              {openCat === section.category && (
                <Container clean={true} className="pb-3">
                  {section.questions.map((item, index) => (
                    <FaqItem
                      key={`${section.category}-${item.q}`}
                      question={`${index + 1}. ${item.q}`}
                      answer={item.a}
                    />
                  ))}
                </Container>
              )}
            </section>
          ))}
        </Container>

        <Container
          clean={true}
          className="relative mt-8 flex items-center justify-between gap-5 overflow-hidden rounded-2xl bg-gradient-to-br from-[#020617] via-[#0b1445] to-[#17155c] px-6 py-7 shadow-xl max-sm:flex-col max-sm:items-start"
        >
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#7065F0]/30 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

          <Container clean={true} className="relative z-10">
            <Heading
              text="Still have questions?"
              level="h3"
              className="text-lg font-extrabold text-white"
            />

            <Paragraph
              text="Can’t find the answer you’re looking for? Contact our real estate team for buying, selling, or renting support."
              className="mt-1.5 text-xs leading-5 text-indigo-100/90"
            />
          </Container>

          <Button
            text="Get in touch"
            variant="primary"
            className="relative z-10 border-[#7065F0] bg-[#7065F0] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#5b50df] max-sm:w-full"
            onClick={handleContactClick}
          />
        </Container>
      </Container>
    </Container>
  );
};

export default HeroSection;