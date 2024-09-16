import React, { useState } from 'react';
import Hero from '../Home/components/Hero';
import FeaturedProducts from '../Home/components/FeaturedProducts';
import { Faq } from '../Home/components/Faq';
import { Testimonials } from '../Home/components/Testimonials';

export default function Home() {
  const [loader, setLoader] = useState(true);

  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  )
}
