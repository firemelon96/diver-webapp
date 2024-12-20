import { Card } from '@/components/ui/card';

export const TextCard = () => {
  return (
    <Card className='bg-sky-800 text-white flex items-center justify-center h-full flex-col'>
      <p className='text-xl font-bold'>1,900</p>
      <span>Clients</span>
    </Card>
  );
};
