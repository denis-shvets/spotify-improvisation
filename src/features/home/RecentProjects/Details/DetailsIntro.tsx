import Image from 'next/image';

type DetailsIntroProps = {
  thumbnail: string;
  children: string;
};

function DetailsIntro({ thumbnail, children }: DetailsIntroProps) {
  return (
    <div className="flex flex-col items-center gap-8 p-6 md:flex-row md:gap-16">
      <div className="relative aspect-square w-full max-w-[318px] shrink-0">
        <Image
          src={thumbnail}
          alt={children}
          fill
          sizes="(max-width: 768px) 100vw, 650px"
          className="rounded-md object-cover"
          loading="eager"
        />
      </div>
      <p className="text-[1rem] font-bold sm:text-[1.5rem] md:max-w-[30ch]">
        {children}
      </p>
    </div>
  );
}

export default DetailsIntro;
