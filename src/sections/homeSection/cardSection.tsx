import { useState } from 'react';
import { PlayCircle } from 'lucide-react';
import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';
import Image from '../../components/ui/img';
import Button from '../../components/ui/button';

const CardSection = () => {
  const [activeTab, setActiveTab] = useState<'tenants' | 'landlords'>('tenants');

  const scrollToProperties = () => {
    const element = document.getElementById('properties-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container as="section" clean={true} className="bg-white overflow-hidden py-10 md:py-14">
      <Container>
        <Container clean={true} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
          <Container clean={true} className="relative flex justify-center">
            <Container clean={true} className="w-full max-w-[600px] md:max-w-[500px] p-2 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
              <Image
                src="/home/heroSection/istockphoto-1214971896-612x612.jpg"
                alt="Property Image"
                className="relative z-10 w-full h-[300px] md:h-[380px] object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]"
                width={600}
                height={550}
                loading="eager"
              />
            </Container>
          </Container>

          <Container clean={true} className="space-y-4 md:pl-6">
            <Container
              clean={true}
              className="relative inline-flex items-center gap-1 p-1 bg-[#F7F7FD] rounded-xl border border-slate-100"
            >
              <Button
                text="For tenants"
                variant="transparent"
                onClick={() => setActiveTab('tenants')}
                className={`relative z-10 px-5 py-2 font-semibold text-xs md:text-sm whitespace-nowrap transition-all duration-300 rounded-lg text-center ${
                  activeTab === 'tenants' ? 'bg-white text-[#7065F0]' : 'text-slate-400 font-medium hover:text-slate-600'
                }`}
              />
              <Button
                text="For landlords"
                variant="transparent"
                onClick={() => setActiveTab('landlords')}
                className={`relative z-10 px-5 py-2 font-semibold text-xs md:text-sm whitespace-nowrap transition-all duration-300 rounded-lg text-center ${
                  activeTab === 'landlords' ? 'bg-white text-[#7065F0]' : 'text-slate-400 font-medium hover:text-slate-600'
                }`}
              />
            </Container>

            <Heading
              text="We make it easy for tenants and landlords."
              level="h2"
              className="max-w-sm"
            />

            <Paragraph
              text="Whether it's selling your current home, getting financing, or buying a new home, we make it easy and efficient. The best part? you’ll save a bunch of money and time."
              className="text-slate-500 text-sm md:text-base leading-relaxed max-w-[420px]"
            />

            <Container clean={true} className="pt-2">
              <Button
                text="See more"
                variant="primary"
                onClick={scrollToProperties}
                className="bg-[#7065F0] hover:bg-[#5e54d6] transition-colors px-5 py-2.5 rounded-lg text-sm"
              >
                <PlayCircle size={16} className="inline ml-1" />
              </Button>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default CardSection;