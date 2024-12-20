import Image from 'next/image';

export const ImageCard = () => {
  return (
    <div className='p-0'>
      <Image
        src='/enriched.webp'
        width={1000}
        height={800}
        alt='Diver'
        className='overflow-hidden rounded-md relative'
      />
    </div>
  );
};
