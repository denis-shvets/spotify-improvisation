import Button from '@/shared/Button';

function Hero() {
  return (
    <section className="m-auto flex h-200 max-h-[90vh] min-h-175 w-full max-w-[1920px] flex-col items-center justify-center gap-4 p-6 pt-24">
      <h1 className="text-center text-[6rem] font-black">
        <span className="text-[1.5em] leading-[1em]">
          Improvise like
          <br /> Denis
        </span>
      </h1>
      <p className="text-center text-[1.5rem] font-bold">
        Failure is not an option. Fight to the end, with Improvisation.
        <br /> You can do it.
      </p>
      <div className="m-8">
        <Button>Read the story and enjoy the journey with Denis</Button>
      </div>
    </section>
  );
}

export default Hero;
