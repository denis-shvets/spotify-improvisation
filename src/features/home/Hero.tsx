import Button from '@/shared/Button';

function Hero() {
  return (
    <section className="m-auto flex max-w-[1920px] flex-col items-center justify-center gap-4 px-4 pt-28 pb-16 sm:px-6 md:h-200 md:min-h-175 md:px-8 md:pt-24 lg:max-h-[90vh]">
      <h1 className="text-center text-[2rem] font-black sm:text-[4rem] md:text-[6rem]">
        <span className="text-[1.5em] leading-[1em]">
          Improvise like
          <br /> Denis
        </span>
      </h1>
      <p className="text-center text-[1.2rem] font-bold sm:text-[1.35rem] md:text-[1.5rem]">
        Failure is not an option. Fight to the end, with Improvisation.
        <br /> You can do it.
      </p>
      <div className="mt-6 sm:mt-8">
        <Button href="#motivation">
          Read the story and enjoy the journey with Denis
        </Button>
      </div>
    </section>
  );
}

export default Hero;
