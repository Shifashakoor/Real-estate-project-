import Container from '../../components/layout/Container';
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';
import Button from '../../components/ui/button';

const HERO_IMAGE =
  '/pexels-binyamin-mellish-1396122-removebg-preview%201.png';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-indigo-50/40">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="absolute -bottom-16 left-0 h-64 w-64 rounded-full bg-amber-100/60 blur-3xl" />
      </div>

      <Container className="relative py-12 md:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="max-w-xl space-y-6">
            <Heading level="h1" className="leading-tight tracking-tight">
              Find a home that fits your life
            </Heading>
            <Paragraph size="lg" className="max-w-md">
              Browse curated listings, compare neighborhoods, and move with
              confidence. Your next chapter starts with the right front door.
            </Paragraph>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="primary">Browse homes</Button>
              <Button variant="outline">List your property</Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div
                className="absolute inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-100/80 to-amber-50/80 blur-sm"
                aria-hidden
              />
              <img
                src={HERO_IMAGE}
                alt="Modern two-story home at dusk with warm interior lighting"
                className="relative mx-auto w-full max-w-md object-contain drop-shadow-[0_25px_50px_rgba(15,23,42,0.18)] lg:max-w-none"
                width={800}
                height={600}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
