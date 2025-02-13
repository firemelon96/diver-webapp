import { Headline } from './headlines';
import { ImageCard } from './image-card';
import { WhyCard } from './why-card';

export const Why = () => {
  return (
    <section className='container mx-auto scroll-mt-10' id='why-choose-us'>
      <div className='py-10'>
        <div className='grid md:grid-cols-4 gap-4 md:grid-rows-3 rounded-2xl overflow-hidden'>
          <div className='row-span-2 col-span-2 h-64 md:h-full'>
            <ImageCard url='/chill-diver.jpg' />
          </div>
          <div className='col-span-2 flex flex-col justify-start gap-4'>
            <WhyCard />
          </div>
          <div className='col-span-2'>
            <WhyCard />
          </div>
          <div className='col-span-2'>
            <Headline
              className='text-slate-700 text-start'
              label='Why Choose Us'
              heading='Why Choose Us for Your Dive'
            />
          </div>
          <div className='col-span-2'>
            <WhyCard />
          </div>
        </div>
      </div>
    </section>
  );
};
