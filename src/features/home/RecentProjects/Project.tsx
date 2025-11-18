'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import type { ComponentType, MouseEvent } from 'react';

type ProjectProps = {
  className: string;
  description: string;
  notes: string;
  thumbnail: string;
  content: ComponentType;
};

function Project({
  className,
  description,
  notes,
  thumbnail,
  content: Content,
}: ProjectProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isModalOpen]);

  function handleOpenDialogClick() {
    setIsModalOpen(true);
  }

  function handleCloseDialogClick() {
    setIsModalOpen(false);
  }

  function handlePropagateClick(event: MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
  }

  return (
    <>
      <button
        type="button"
        onClick={handleOpenDialogClick}
        className={`focus-visible:outline-foreground flex max-w-[650px] cursor-pointer flex-col gap-4 rounded-2xl px-16 py-24 text-left transition-transform hover:scale-[1.04] focus-visible:scale-[1.04] focus-visible:outline-3 ${className}`}
      >
        <div className="text-foreground max-w-[23ch] text-[2rem] font-bold before:block before:text-[6rem] before:leading-[16px] before:font-bold before:content-['\201C']">
          {description}
        </div>
        <p className="text-[0.875rem]">{notes}</p>
        <div className="relative mt-6 aspect-square w-full">
          <Image
            src={thumbnail}
            alt={description}
            fill
            sizes="(max-width: 768px) 100vw, 650px"
            className="rounded-md object-cover"
            loading="eager"
          />
        </div>
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xl"
          onClick={handleCloseDialogClick}
        >
          <div className="px-32 py-16">
            <div
              className="mx-auto w-full max-w-[1100px]"
              onClick={handlePropagateClick}
            >
              <div
                className={`relative min-h-16 rounded-2xl shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] ${className}`}
              >
                <button
                  type="button"
                  onClick={handleCloseDialogClick}
                  className="bg-foreground text-background focus-visible:outline-foreground absolute top-4 right-4 cursor-pointer rounded-full border-0 p-1 font-semibold transition-transform hover:scale-[1.04] focus-visible:outline-2"
                >
                  <X className="size-4" />
                </button>
                <Content />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Project;
