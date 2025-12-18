import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  image: string;
  name: string;
  title: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ image, name, title, quote }) => (
  <div className="min-w-[320px] md:min-w-[400px] p-6 bg-white rounded-[2rem] border border-gray-100 flex flex-col gap-6 hover:border-primary transition-colors shadow-sm">
    <div className="w-full h-48 rounded-3xl overflow-hidden bg-gray-100">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-col gap-3">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} size={16} className="text-yellow-400" fill="currentColor" />
        ))}
      </div>
      <h4 className="text-lg font-bold">"{title}"</h4>
      <p className="text-dark-secondary text-sm leading-relaxed">
        {quote}
      </p>
      <div className="font-bold text-sm mt-2">— {name}</div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop",
      name: "Sarah J.",
      title: "Amazing Results",
      quote: "I never thought my acne scars would fade, but after just 3 sessions, the difference is night and day. Highly recommend DermaPlus!"
    },
    {
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop",
      name: "Mark T.",
      title: "Professional Staff",
      quote: "The staff made me feel so comfortable during my consultation. They truly listened to my concerns and curated a plan just for me."
    },
    {
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop",
      name: "Jessica R.",
      title: "Highly Recommended",
      quote: "The HydraFacial is a game changer. My skin feels so hydrated and glowing. Will be coming back monthly for sure!"
    }
  ];

  return (
    <section className="py-20 bg-light-bg">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Patient Stories</h2>
        
        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x">
          {testimonials.map((t, i) => (
            <div key={i} className="snap-center">
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;