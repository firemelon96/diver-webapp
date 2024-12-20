import Link from 'next/link';

const routes = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Expeditions',
    link: '/expeditions',
  },
  {
    label: 'Contact',
    link: '/contact',
  },
];

export const NavBar = () => {
  return (
    <header className='px-4 bg-black sticky top-0 z-50 text-white border-b-slate-900 border-b'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='text-xl'>Logo</div>
        <nav className='flex gap-3'>
          <ul className='flex gap-3 '>
            {routes.map((route) => (
              <li className='p-4' key={route.label}>
                <Link href={route.link}>{route.label}</Link>
              </li>
            ))}
          </ul>
          <button className='bg-sky-500'>Book now</button>
        </nav>
      </div>
    </header>
  );
};
