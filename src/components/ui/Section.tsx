import { ReactNode } from 'react';

const Section = ({
  header,
  body,
  topNode = null,
  bottomNode = null,
}: {
  header?: ReactNode;
  body?: ReactNode;
  topNode?: ReactNode;
  bottomNode?: ReactNode;
}) => {
  return (
    <section className='section relative inset-x-0 bottom-0 z-50 w-full bg-[#242424] text-white'>
      {topNode}
      {header && (
        <div className='h2 container-heading pb-4 text-center lg:xl:pb-6'>
          {header}
        </div>
      )}
      {body && <div className='text-left text-base lg:xl:px-60'>{body}</div>}
      {bottomNode}
    </section>
  );
};

export default Section;
