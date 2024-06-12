import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Lenis from '@studio-freight/lenis';

const testimonials = [
  {
    quote: "Working with [Your Company Name] was a game-changer for our business. Their intuitive UI and seamless UX design have significantly improved our user engagement and satisfaction. Highly recommend!",
    name: "Jane Doe",
    title: "CEO of Tech Innovators"
  },
  {
    quote: "The team at [Your Company Name] truly understands the importance of user experience. Their meticulous approach to UI design has made our app not only beautiful but incredibly user-friendly.",
    name: "John Smith",
    title: "Product Manager at App Solutions"
  },
  {
    quote: "Since partnering with [Your Company Name], we've seen a noticeable increase in user retention and positive feedback. Their expertise in UX design is unparalleled.",
    name: "Emily Johnson",
    title: "Marketing Director at Web Creators"
  },
  {
    quote: "From start to finish, the collaboration with [Your Company Name] was seamless. Their ability to translate our vision into a functional and aesthetically pleasing design was impressive.",
    name: "Michael Brown",
    title: "Founder of Startup Hub"
  },
  {
    quote: "The new UI/UX design provided by [Your Company Name] has significantly boosted our conversion rates. Their innovative approach and user-centric design have made a huge difference.",
    name: "Sarah Lee",
    title: "E-commerce Manager at ShopEase"
  }
];

const TestimonialDemo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    gsap.fromTo(
      sectionRef.current.querySelectorAll('.testimonial'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Testimonials</h2>
        <h3 className="text-2xl text-center mb-12">What Our Clients Are Saying</h3>
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg italic mb-4">{testimonial.quote}</p>
              <p className="font-bold text-gray-800">— {testimonial.name}, {testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialDemo;