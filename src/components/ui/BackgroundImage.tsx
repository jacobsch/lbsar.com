const BackgroundImage = ({
  imgClass,
  scroll = false,
}: {
  imgClass: string;
  scroll?: boolean;
}) => {
  return (
    <section
      className={`
        flex h-screen w-full items-center justify-center bg-cover bg-center text-white
        ${scroll ? '' : 'md:bg-fixed lg:bg-fixed xl:bg-fixed'}
        ${imgClass}`}
    ></section>
  );
};

export default BackgroundImage;
