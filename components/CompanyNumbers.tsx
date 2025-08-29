
'use client';

import { useState, useEffect } from 'react';

interface CounterProps {
  end: number;
  suffix: string;
  label: string;
  icon: string;
}

function Counter({ end, suffix, label, icon }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${label.replace(/\s+/g, '-')}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [label]);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const increment = end / 100;
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 20);

      return () => clearInterval(timer);
    }
  }, [isVisible, end]);

  return (
    <div id={`counter-${label.replace(/\s+/g, '-')}`} className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-[#5bc5f0]/20">
      <div className="w-16 h-16 bg-[#5bc5f0] rounded-full flex items-center justify-center mx-auto mb-4">
        <i className={`${icon} text-2xl text-[#001d3f]`}></i>
      </div>
      <div className="text-4xl md:text-5xl font-bold text-[#5bc5f0] mb-2">
        {count}{suffix}
      </div>
      <div className="text-lg text-gray-200 font-medium">{label}</div>
    </div>
  );
}

export default function CompanyNumbers() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#001d3f] to-[#041f4a] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Siyana in Numbers</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Our track record speaks for itself. We've been delivering excellence in IT solutions across Gujarat and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Counter end={15} suffix="+" label="Years of Excellence" icon="ri-calendar-check-line" />
          <Counter end={500} suffix="+" label="Projects Delivered" icon="ri-briefcase-line" />
          <Counter end={200} suffix="+" label="Happy Clients" icon="ri-user-heart-line" />
        </div>
      </div>
    </section>
  );
}
