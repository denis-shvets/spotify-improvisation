import { LayoutDashboard } from 'lucide-react';

function Blockquote() {
  return (
    <section className="m-auto w-full max-w-[1920px] px-32 py-6">
      <div className="rounded-2xl bg-[linear-gradient(270deg,rgb(10,89,184)0%,rgb(10,89,184)40%,rgb(4,40,82)100%)] p-16">
        <div className="flex items-center gap-8 pt-12">
          <div className="max-w-2/3 before:block before:text-[6rem] before:leading-[16px] before:font-bold before:content-['\201C']">
            <p className="max-w-[40ch] text-[2.5rem] leading-[1.2em] font-bold">
              I’m motivated to join Spotify because I enjoy building
              high-quality user experiences, and your fast, innovative culture
              matches how I work. I focus on creating polished, reliable,
              user-friendly interfaces, and I’d love to bring that level of
              quality to the products your teams build.
            </p>
            <p className="mt-6 text-[1rem]">
              Denis Shvets, Frontent Software Engineer
            </p>
            <blockquote className="mt-16 border-l-3 pl-4 text-[0.875rem]">
              In the past, I worked extensively with design studios, but over
              time many of my work references have changed or disappeared
              entirely. Still, I’m strong in JavaScript and even stronger in the
              fundamentals like HTML and CSS — and I can prove it.
            </blockquote>
          </div>
          <LayoutDashboard className="ml-auto size-90" />
        </div>
      </div>
    </section>
  );
}

export default Blockquote;
