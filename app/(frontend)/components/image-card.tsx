import Image from 'next/image';

type Props = {
  url: string;
};

export const ImageCard = ({ url }: Props) => {
  return (
    <div className='p-0 h-full overflow-hidden rounded-md relative'>
      <Image
        src={url}
        width={1200}
        height={1800}
        alt='Diver'
        className='object-fill object-center'
      />
    </div>
  );
};
