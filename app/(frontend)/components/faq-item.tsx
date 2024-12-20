import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

export const FaqItem = () => {
  return (
    <Collapsible className='text-center'>
      <CollapsibleTrigger className='text-2xl w-full font-semibold p-2 border'>
        What do we offer?
      </CollapsibleTrigger>
      <CollapsibleContent className='py-4 bg-slate-200 text-xl'>
        Yes. Free to use for personal and commercial projects. No attribution
        required.
      </CollapsibleContent>
    </Collapsible>
  );
};
