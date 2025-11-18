import Image from 'next/image';

type DetailsIntroProps = {
  thumbnail: string;
  children: string;
};

function DetailsIntro({ thumbnail, children }: DetailsIntroProps) {
  return (
    <div className="flex items-center gap-16 p-6">
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
      <p className="max-w-[30ch] text-[1.5rem] font-bold">{children}</p>
    </div>
  );
}

export default DetailsIntro;
