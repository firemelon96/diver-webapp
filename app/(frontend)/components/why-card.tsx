import { Card } from '@/components/ui/card';

// type Props = {
//   count: number;
//   title: string;
//   description: string;
// };

export const WhyCard = () => {
  return (
    <Card className='bg-sky-800 text-white flex items-center justify-center h-full px-7 gap-4'>
      <span className='text-5xl px-5 py-2 bg-blue-500 rounded-full font-semibold'>
        1
      </span>
      <div className='flex flex-col gap-1.5'>
        <p className='text-3xl font-semibold'>Expert Instructors</p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </span>
      </div>
    </Card>
  );
};
