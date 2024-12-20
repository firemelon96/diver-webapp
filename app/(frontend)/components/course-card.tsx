import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ImageCard } from './image-card';

export const CourseCard = () => {
  return (
    <Card className='p-2 bg-transparent flex text-white'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-3xl font-semibold'>Snorkeling and Skin Driving</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div>
          <Button variant='link' className='text-white pl-0'>
            Read more...
          </Button>
        </div>
      </div>
      <ImageCard />
    </Card>
  );
};
