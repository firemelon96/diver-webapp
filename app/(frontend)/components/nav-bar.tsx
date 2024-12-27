import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const routes = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Expeditions',
    link: '/expeditions',
  },
  {
    label: 'Courses',
    link: '/courses',
  },
  {
    label: 'Why Choose Us',
    link: '/why-choose-us',
  },
  {
    label: 'Testimonials',
    link: '/testimonials',
  },
  {
    label: 'Faqs',
    link: '/faqs',
  },
];

export const NavBar = () => {
  return (
    <header className='px-4 bg-black sticky top-0 z-50 text-white border-b-slate-900 border-b'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='text-xl'>
          <Image src='/logo.png' height={50} width={150} alt='logo' />
        </div>
        <nav className='flex items-center gap-1'>
          <ul className='flex gap-1 '>
            {routes.map((route) => (
              <li className='p-4 text-sky-400' key={route.label}>
                <Link href={route.link}>{route.label}</Link>
              </li>
            ))}
          </ul>
          <Button size='lg' variant='primary'>
            Book now
          </Button>
        </nav>
      </div>
    </header>
  );
};
