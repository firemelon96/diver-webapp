type Props = {
  label: string;
  heading: string;
};

export const Headline = ({ label, heading }: Props) => {
  return (
    <div className='text-center text-white flex flex-col gap-4'>
      <span className='uppercase text-xl'>{label}</span>
      <h1 className='text-5xl font-bold'>{heading}</h1>
    </div>
  );
};
