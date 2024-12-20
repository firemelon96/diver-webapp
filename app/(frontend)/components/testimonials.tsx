import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Headline } from './headlines';
import { ImageCard } from './image-card';
import { ReviewCard } from './review-card';

export const Testimonial = () => {
  return (
    <section className='container mx-auto'>
      <div className='py-10'>
        <div className='grid grid-cols-4 gap-4 grid-rows-3 rounded-2xl overflow-hidden'>
          <div className='row-span-3 col-span-2 bg-red-50'>
            <ImageCard />
          </div>
          <div className='col-span-2 flex flex-col justify-start gap-4'>
            <Headline
              label='Testimonial'
              heading='What our Client are Saying'
              className='text-slate-700 text-start'
            />
          </div>
          <div className='col-span-2 row-span-2'>
            <Carousel className=''>
              <CarouselContent>
                {Array.from({ length: 3 }).map((_, i) => (
                  <CarouselItem className='' key={i}>
                    <ReviewCard />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
