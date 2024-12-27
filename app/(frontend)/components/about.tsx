import { ImageCard } from './image-card';
import { TextCard } from './text-card';

export const About = () => {
  return (
    <div className='relative' id='about'>
      <div className='container mx-auto py-10'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:grid-rows-3 rounded-2xl overflow-hidden'>
          <div className='row-span-2 col-span-2 h-64 md:h-full'>
            <ImageCard url='/enriched.webp' />
          </div>
          <div className='row-span-2 col-span-2'>
            <span className='uppercase text-xl'>About us</span>
            <h1 className='text-5xl font-bold'>
              Dicover Our Deep-Sea Passion.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className='col-span-1'>
            <TextCard count={1900} label='Happy Clients' />
          </div>
          <div className='col-span-1'>
            <TextCard count={3} label='Years in Service' />
          </div>
          <div className='col-span-2 h-44'>
            <ImageCard url='/dive-with-fish.jpg' />
          </div>
        </div>
      </div>
    </div>
  );
};
