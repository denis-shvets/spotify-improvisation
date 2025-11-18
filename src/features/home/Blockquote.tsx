import { LayoutDashboard } from 'lucide-react';

function Blockquote() {
  return (
    <section
      className="m-auto w-full max-w-[1920px] scroll-mt-24 px-4 py-6 sm:px-8 lg:px-32"
      id="motivation"
    >
      <div className="rounded-2xl bg-[linear-gradient(270deg,rgb(10,89,184)0%,rgb(10,89,184)40%,rgb(4,40,82)100%)] p-8 sm:p-16">
        <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:pt-12">
          <div className="before:block before:text-[5rem] before:leading-[16px] before:font-bold before:content-['\201C'] md:max-w-2/3 lg:before:text-[5.5rem] xl:before:text-[6rem]">
            <p className="max-w-[40ch] text-[1.5rem] leading-[1.2em] font-bold lg:text-[2rem] xl:text-[2.5rem]">
              I&apos;m motivated to join Spotify because I enjoy building
              high-quality user experiences, and your fast, innovative culture
              matches how I work. I focus on creating polished, reliable,
              user-friendly interfaces, and I&apos;d love to bring that level of
              quality to the products your teams build.
            </p>
            <p className="mt-6 text-[1rem]">
              Denis Shvets, Frontent Software Engineer
            </p>
            <blockquote className="mt-16 border-l-3 pl-4 text-[0.875rem]">
              In the past, I worked extensively with design studios, but over
              time many of my work references have changed or disappeared
              entirely. Still, I&apos;m strong in JavaScript and even stronger
              in the fundamentals like HTML and CSS — and I can prove it.
            </blockquote>
          </div>
          <LayoutDashboard className="size-48 shrink-0 md:ml-auto md:size-64 xl:size-90" />
        </div>
      </div>
    </section>
  );
}

export default Blockquote;
