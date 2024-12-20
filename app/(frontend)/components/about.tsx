import { ImageCard } from './image-card';
import { TextCard } from './text-card';

export const About = () => {
  return (
    <div className='relative'>
      <div className='container mx-auto py-10'>
        <div className='grid grid-cols-4 gap-4 grid-rows-3 rounded-2xl overflow-hidden'>
          <div className='row-span-2 col-span-2 '>
            <ImageCard />
          </div>
          <div className='row-span-2 col-span-2 flex flex-col justify-start gap-4'>
            <span className='uppercase text-xl'>About us</span>
            <h1 className='text-5xl font-bold'>
              Dicover Our Deep-Sea Passion.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className='row-span-1'>
            <TextCard />
          </div>
          <div className='row-span-1'>
            <TextCard />
          </div>
          <div className='col-span-2'>
            <TextCard />
          </div>
        </div>
      </div>
    </div>
  );
};
