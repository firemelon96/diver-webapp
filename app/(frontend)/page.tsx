import Image from 'next/image';
import Hero from './components/hero';
import SvgDivider from './components/svg-divider';
import SvgDividerBottom from './components/svg-divider-bottom';
import { About } from './components/about';
import { Services } from './components/services';
import { Courses } from './components/courses';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Courses />
    </main>
  );
}
