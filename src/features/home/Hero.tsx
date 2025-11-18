import Button from '@/shared/Button';

function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-1">
        <div className="absolute -bottom-1/2 left-1/2 h-200 w-250 -translate-x-1/5 animate-[float_15s_ease-in-out_infinite] rounded-full bg-[#0a59b8]/30 blur-[150px]"></div>
        <div className="bg-spotify-green-a/20 absolute top-1/3 right-1/4 size-100 animate-pulse rounded-full blur-[80px]"></div>
      </div>
      <section className="relative z-10 m-auto flex max-w-[1920px] flex-col items-center justify-center gap-4 px-4 pt-28 pb-16 sm:px-6 md:h-200 md:min-h-175 md:px-8 md:pt-24 lg:max-h-[90vh]">
        <h1 className="text-center text-[2rem] font-black sm:text-[4rem] md:text-[6rem]">
          <span className="text-[1.5em] leading-[1em]">
            Improvise like
            <br /> Denis
          </span>
        </h1>
        <p className="text-center text-[1.2rem] font-bold sm:text-[1.35rem] md:text-[1.5rem]">
          Failure is not an option. Fight to the end - improvise, adapt, and
          keep going.
          <br /> You&apos;ve got this.
        </p>
        <div className="mt-6 sm:mt-8">
          <Button href="#motivation">
            Read the story and enjoy the journey with Denis
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Hero;
