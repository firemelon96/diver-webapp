import { Headline } from './headlines';
import { ServicesCard } from './services-card';

export const Services = () => {
  return (
    <section className='min-h-screen relative'>
      <div
        className=' h-screen w-full z-0 bg-cover bg-center bg-fixed bg-no-repeat'
        style={{
          backgroundImage: `url(/ocean-depth.jpg)`,
        }}
      ></div>
      <div className='flex items-center justify-center gap-6 w-full absolute inset-y-0 flex-col'>
        <Headline label='Services' heading='Explore Our Dive Programs' />
        <div className='flex gap-6'>
          {Array.from({ length: 4 }).map((_, i) => (
            <ServicesCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
