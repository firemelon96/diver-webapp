import Image from 'next/image';
import Hero from './components/hero';
import SvgDivider from './components/svg-divider';
import SvgDividerBottom from './components/svg-divider-bottom';
import { About } from './components/about';
import { Services } from './components/services';
import { Courses } from './components/courses';
import { Contact } from './components/contact';
import { Why } from './components/why';
import { Testimonial } from './components/testimonials';
import { Faq } from './components/faq';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Courses />
      <Contact />
      <Why />
      <Testimonial />
      <Faq />
    </main>
  );
}
