import { CourseCard } from './course-card';
import { Headline } from './headlines';

export const Courses = () => {
  return (
    <section className='bg-sky-950 py-20 space-y-4'>
      <Headline
        label='Courses'
        heading='Explore the Depths with Expert Scuba Diving Couses'
      />
      <div className='container mx-auto text-white'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {Array.from({ length: 4 }).map((_, i) => (
            <CourseCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
