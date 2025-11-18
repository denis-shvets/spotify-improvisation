type DetailsHeaderProps = {
  children: string;
};

function DetailsHeader({ children }: DetailsHeaderProps) {
  return (
    <header className="p-8 sm:p-8 sm:pt-16">
      <h3 className="text-[1.5rem] font-bold sm:text-[2rem]">{children}</h3>
    </header>
  );
}

export default DetailsHeader;
