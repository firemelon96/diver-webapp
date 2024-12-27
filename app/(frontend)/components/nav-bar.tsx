'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { routes } from '@/lib/routes';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { useMedia } from 'react-use';

export const NavBar = () => {
  const isMobile = useMedia('(min-width: 430px)', false);
  const [isOpen, setIsOpen] = useState(isMobile);

  return (
    <header className='px-4 bg-black sticky top-0 z-50 text-white border-b-slate-900 border-b'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='text-xl'>
          <Image src='/logo.png' height={50} width={150} alt='logo' />
        </div>
        <nav className='hidden md:flex items-center gap-1'>
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

        {/* mobile navigation */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className='flex items-center justify-center md:hidden'
        >
          <BiMenu className='fill-blue-50 text-5xl' />
        </button>

        {/* {isOpen && (
          <ul className='absolute left-0 top-14 w-full items-center bg-black/75 text-center text-xl tracking-widest text-sky-500 backdrop-blur-sm md:hidden'>
            {routes.map((nav) => (
              <li key={nav.label} className='p-4 uppercase hover:bg-white/30'>
                <Link href={nav.link}>{nav.label}</Link>
              </li>
            ))}
            <li className='p-4'>
              <Button size='lg' variant='primary' className='uppercase'>
                Book now
              </Button>
            </li>
          </ul>
        )} */}

        {isOpen && (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent className='bg-sky-900'>
              <SheetHeader>
                <SheetTitle>
                  <Image src='/logo.png' height={50} width={150} alt='logo' />
                </SheetTitle>
              </SheetHeader>
              <ul className='w-full items-center text-center text-xl tracking-widest text-sky-500 backdrop-blur-sm md:hidden'>
                {routes.map((nav) => (
                  <li
                    onClick={() => setIsOpen(false)}
                    key={nav.label}
                    className='p-4 uppercase hover:bg-white/30'
                  >
                    <Link href={nav.link}>{nav.label}</Link>
                  </li>
                ))}
                <li className='p-4'>
                  <Button size='lg' variant='primary' className='uppercase'>
                    Book now
                  </Button>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};
