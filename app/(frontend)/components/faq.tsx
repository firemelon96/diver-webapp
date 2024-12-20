import { FaqItem } from './faq-item';
import { Headline } from './headlines';

export const Faq = () => {
  return (
    <section className='bg-sky-50 py-10'>
      <div className='container mx-auto space-y-6'>
        <Headline
          label="faq's"
          heading='Frequently Asked Question'
          className='text-slate-700'
        />

        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <FaqItem key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
